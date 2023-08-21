import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { color } from "../../constants/colors";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SearchBar() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (value) {
      navigate(`/search/${value}`);
    }
  };
  return (
    <Paper
      component={"form"}
      onSubmit={submitHandler}
      sx={{
        border: `1px solid${color.secondary}`,
        pl: 2,
        boxShadow: "none",
        mr: 5,
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        className="search-bar"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <IconButton aria-label="search" type="submit">
        <Search />
      </IconButton>
    </Paper>
  );
}
