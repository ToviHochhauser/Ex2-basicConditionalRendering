import "../src/parent.css";
import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [show, setShow] = useState(false);

  const save = () => {
    const newProduct = {
      Pname: name,
      Pprice: price,
      Pcolor: color,
    };

    setProducts((prev) => [...prev, newProduct]);
    setName("");
    setPrice("");
    setColor("");
  };

  const showProducts = () => {
    setShow(!show);
  };

  return (
    <div id="form">
        <h3>Ex2</h3>
      <TextField
        label="Product name"
        variant="outlined"
        color="secondary"
        focused
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Product price"
        variant="outlined"
        color="secondary"
        focused
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <TextField
        label="Product color"
        variant="outlined"
        color="secondary"
        focused
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <Box display="flex" gap={2}>
        <Button variant="outlined" color="secondary" onClick={save}>
          SAVE
        </Button>
        <Button variant="outlined" color="secondary" onClick={showProducts}>
         {show ? "HIDE" : "SHOW"}
        </Button>
      </Box>

     {/* {shows up only after clicking on the show button} */}
      {show && <Child products={products} />}
    </div>
  );
}

export default Parent;
