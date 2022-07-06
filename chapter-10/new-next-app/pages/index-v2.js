import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navibar from "../components/Navibar";
import Caro from "../components/Caro";
import Product from "../components/product/Product";

export default function index() {
  const [products, setProducts] = useState([
    {
      title: "Kejar Diskon",
      items: [
        {
          id: 1,
          name: "Casing Iphone",
          desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          id: 2,
          name: "Baju",
          desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          id: 3,
          name: "Handuk",
          desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
      ],
    },
    {
      title: "Official Store",
      items: [
        {
          id: 10,
          name: "Kompor",
          desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          id: 20,
          name: "Matras",
          desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          id: 30,
          name: "Blender",
          desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
      ],
    },
  ]);

  return (
    <div>
      <Navibar />
      <Caro />
      <Product products={products} />
    </div>
  );
}
