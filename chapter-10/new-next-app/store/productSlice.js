import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
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
  ],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
