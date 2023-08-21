import { useEffect, useState } from "react";
import { Stack, Box, Container, Typography } from "@mui/material";
import { Category, Videos } from "../";
import { color } from "../../constants/colors";
import { ApiService } from "../../service/api.service";
import { toast } from "react-toastify";

export default function Main() {
  const [selectedCatigory, setSelectedCatigory] = useState("New");
  const [videos, setVideos] = useState([]);
  const selectedCatigoryHendler = (catigory) => setSelectedCatigory(catigory);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `search?part=snippet&q=${selectedCatigory}`
        )
        setVideos(data.items)
      } catch (err) {
        toast.error(err);
      }
    };
    getData();
  }, [selectedCatigory]);
  return (
    <Stack>
      <Category
        selectedCatigoryHendler={selectedCatigoryHendler}
        selectedCatigory={selectedCatigory}
      />
      <Box p={2} sx={{ height: "90vh" }}>
        <Container maxWidth={"90%"}>
          <Typography sx={{ color: color.secondary }} variant={"h4"} fontWeight={"bold"} mb={2}>
            {selectedCatigory + " Videos"}
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  );
}
