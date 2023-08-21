import { Link, useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import { useState, useEffect } from "react";
import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import {
  CheckCircle,
  FavoriteBorderOutlined,
  MarkChatRead,
  Tag,
  Visibility,
} from "@mui/icons-material";
import { Loader, Videos } from "../";
import { toast } from "react-toastify";

export default function VideoDetail() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [relatedVideo, setRelatedVideo] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `videos?part=snippet,statistics&id=${id}`
        );
        setVideo(data.items[0]);

        const relatedData = await ApiService.fetching(
          `search?part=snippet&relatedToVideoId${id}&type=vide`
        );
        setRelatedVideo(relatedData.items);
      } catch (err) {
        toast.error(err);
      }
    };
    getData();
  }, [id]);

  if (!video?.snippet) return <Loader />;
  return (
    <Box minHeight={"90vh"} mb={10} >
      <Box display={"flex"} sx={{ flexDirection: { xs: "column", md: "row" } }} >
        <Box width={{ xs: "100%", md: "75%" }} overflow={'scroll'} px={1}>
          <ReactPlayer
            url={`https//www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
          />
          {video?.snippet?.tags.map((item, inx) => (
            <Chip
              label={item}
              key={inx}
              sx={{ marginTop: "10px", cursor: "pointer", ml: "10px" }}
              deleteIcon={<Tag />}
              onDelete={() => {}}
              variant="outlined"
            ></Chip>
          ))}
          <Typography variant="h5" fontWeight={"bold"} p={2}>
            {video.snippet.title}
          </Typography>
          <Typography variant="subtitle2" p={2} sx={{ opacity: ".7" }}>
            {video.snippet.description.slice(0, 600)}
          </Typography>
          <Stack
            direction={"row"}
            gap={"20px"}
            alignItems={"center"}
            px={2}
            py={1}
          >
            <Stack
              sx={{ opacity: ".7" }}
              direction={"row"}
              alignItems={"center"}
              gap={"3px"}
            >
              <Visibility />
              {parseInt(video.statistics.viewCount)}
            </Stack>
            <Stack
              sx={{ opacity: ".7" }}
              direction={"row"}
              alignItems={"center"}
              gap={"3px"}
            >
              <FavoriteBorderOutlined />
              {parseInt(video.statistics.likeCount)}
            </Stack>{" "}
            <Stack
              sx={{ opacity: ".7" }}
              direction={"row"}
              alignItems={"center"}
              gap={"3px"}
            >
              <MarkChatRead />
              {parseInt(video.statistics.commentCount)}
            </Stack>
          </Stack>
          <Link to={`/channel/${video.snippet.channelId}`}>
          <Stack direction={"row"} py={1} px={2}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              gap={"5px"}
              mt={"5px"}
            >
              <Avatar
                alt={video.snippet.channelTitle}
                src={video.snippet.thumbnails.default.url}
              />
              <Typography variant="subtitle2" color={"gray"}>
                {video.snippet.channelTitle}
                <CheckCircle
                  sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                />
              </Typography>
            </Stack>
          </Stack>
          </Link>
        </Box>
        <Box
          width={{ xs: "100%", md: "25%" }}
          px={1}
          py={{ md: 1, xs: 5 }}
          justifyContent={"center"}
          alignItems={"center"}
          overflow={"scroll"}
          maxHeight={"100vh"}
        >
          <Videos videos={relatedVideo} />
        </Box>
      </Box>
    </Box>
  );
}
