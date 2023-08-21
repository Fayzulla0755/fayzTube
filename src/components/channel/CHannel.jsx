import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import { ChannelCard, Videos } from "../";
import { toast } from "react-toastify";

export default function CHannel() {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState();
  const [channelVideos, setChannelVideos] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const dataChannelDetail = await ApiService.fetching(
          `channels?part=snippet&id=${id}`
        );
        setChannelDetail(dataChannelDetail.items[0]);

        const dataVideos = await ApiService.fetching(
          `search?channelId=${id}&part=snippet%2Cid&order=date`
        );
        setChannelVideos(dataVideos.items);
      } catch (err) {
        toast.error(err)
      }
    };
    getData();
  }, [id]);
  return (
    <Box>
      <Box>
        <Box
          width={"100%"}
          height={"300px"}
          zIndex={10}
          marginTop={'1vh'}
          sx={{
            backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
            backgroundPosition:'center',
            backgroundSize:'cover',
            objectFit:'cover',
            backgroundRepeat:'no-repeat'

          }}
        />
        <ChannelCard video={channelDetail} marginTop={'-100px'} />
      </Box>
      <Container maxWidth={'90%'}>
        <Videos videos={channelVideos}/>
      </Container>
    </Box>
  );
}
