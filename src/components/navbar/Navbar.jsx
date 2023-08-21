import React from "react";
import {Link}from 'react-router-dom'
import { Stack, Box } from "@mui/material";
import {SearchBar}from '../'
import { logo } from "../../constants";
import {color} from '../../constants/colors'
export default function Navbar() {
    return (
        <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            p={2}
            sx={{
                position: "sticky",
                top:0,
                zIndex:999,
                bakgraound:color.primary
            }}>
            <Link to={'/'}>
            <img src={logo} alt={logo} height={40} />

            </Link>
          <SearchBar/>
            <Box />
        </Stack>
    );
}
