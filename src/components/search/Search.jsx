import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import { Videos } from "..";
import { Box, Container, Typography } from "@mui/material";
import { color } from "../../constants/colors";
import { toast } from "react-toastify";

export default function Search() {
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const { items } = await ApiService.fetching(
          `search?part=snippet&q=${id}`
        );
        setVideos(items);
      } catch (err) {
        toast.error(err)
      }
    };
    getData();
  }, [id]);
  console.log(videos);
  return (
    
    <Box p={2} sx={{height:'90vh'}}>
      <Container maxWidth={'90%'} >
        <Typography variant="h4" fontWeight={'bold'} mb={2}>
          Search results for <span style={{color: color.secondary}}>{id}</span> videos
        </Typography>
        <Videos videos={videos} />
      </Container>

    </Box>
  )
}
