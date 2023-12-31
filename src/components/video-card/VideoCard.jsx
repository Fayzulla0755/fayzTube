import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { color } from "../../constants/colors";
import moment from "moment";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
function VideoCard({ video }) {
  return (
    <Card
      sx={{
        width: { xs: "90%", sm: "300px", md: "320px" },
        boxShadow: "none",
        borderRadius: "0",
      }}
    >
      <Link to={`/video/${video.id.videoId}`}>
        <CardMedia
          image={video?.snippet?.thumbnails?.medium?.url}
          alt={video.snippet?.title}
          sx={{
            width: { xs: "100%", sm: "350px", md: "360px" },
            height: "180px",
            objectFit: "cover",
          }}
        />
      </Link>

      <CardContent
        sx={{
          background: color.primary,
          height: "200px",
          position: "relative",
        }}
      >
        <Link to={`/video/${video.id.videoId}`}>
          <Typography my={"5px"} sx={{ opacity: ".4" }}>
            {moment(video?.snippet?.publishedAt).fromNow()}
          </Typography>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            {video?.snippet?.title.slice(0, 50)}
          </Typography>
          <Typography variant="subtitle2" sx={{ opacity: ".6" }}>
            {video?.snippet?.description.slice(0, 70)}
          </Typography>
        </Link>
        <Link to={`/channel/${video?.snippet?.channelId}`}>
          <Stack
            position={"absolute"}
            direction={"row"}
            bottom={"10px"}
            alignItems={"center"}
            gap={"5px"}
          >
            <Avatar src={video?.snippet?.thumbnails?.medium?.url} />
            <Typography variant="subtitle2" color={"gray"}>
              {video?.snippet?.channelTitle}
            </Typography>
            <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Stack>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
