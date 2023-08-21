import { Stack } from "@mui/material";
import { category } from "../../constants";
import { color } from "../../constants/colors";

function Category({ selectedCatigoryHendler, selectedCatigory }) {
    return (
        <Stack direction={"row"} sx={{ overflowX: "scroll" }}>
            {category.map((item) => (
                <button
                    key={item.name}
                    className="category-btn"
                    style={{
                        borderRadus: "0",
                        background:
                            item.name === selectedCatigory && color.secondary,
                               color:item.name === selectedCatigory && "#fff"
                    }}
                    onClick={() => selectedCatigoryHendler(item.name)}>
                    <span
                        style={{ color:item.name === selectedCatigory ? '#fff': color.secondary, marginRight: "15px" }}>
                        {item.icon}
                    </span>
                    <spam style={{ opacty: "1" }}>{item.name}</spam>
                </button>
            ))}
        </Stack>
    );
}

export default Category;
