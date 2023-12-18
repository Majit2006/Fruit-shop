import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      {
        title: "",
        price: "$456.00",
        imageSrc:
          "https://cdn.shopify.com/s/files/1/2644/1682/products/fruit_04_c7d068d0-1827-43ba-ade8-58689d9fc4da_grande.jpg?v=1513649329",
      },
      {
        title: "",
        price: "$199.00",
        imageSrc:
          "https://cdn.shopify.com/s/files/1/2644/1682/products/fruit_02_eb1e2d21-aed7-475e-9621-a5941c2b191a_grande.jpg?v=1514257282",
      },
      {
        title: "",
        price: "$199.00",
        imageSrc:
          "https://cdn.shopify.com/s/files/1/2644/1682/products/fruit_13_grande.jpg?v=1513650023",
      },
      {
        title: "",
        price: "$34.00",
        imageSrc:
          "https://cdn.shopify.com/s/files/1/2644/1682/products/fruit_07_grande.jpg?v=1513649339",
      },
    ],
    productsAll: [
      {
        title: "dfsd",
        price: "$5.99",
        imageSrc:
          "https://cdn.shopify.com/s/files/1/2644/1682/products/fruit_31_grande.jpg?v=1515125720",
      },
      {
        title: "Aurore Grape",
        price: "$34.00",
        imageSrc:
          "https://cdn.shopify.com/s/files/1/2644/1682/products/fruit_06_grande.jpg?v=1514257231",
      },
      {
        title: "",
        price: "$456.00",
        imageSrc:
          "https://cdn.shopify.com/s/files/1/2644/1682/products/fruit_04_c7d068d0-1827-43ba-ade8-58689d9fc4da_grande.jpg?v=1513649329",
      },
      {
        title: "",
        price: "$199.00",
        imageSrc:
          "https://cdn.shopify.com/s/files/1/2644/1682/products/fruit_02_eb1e2d21-aed7-475e-9621-a5941c2b191a_grande.jpg?v=1514257282",
      },
      {
        title: "",
        price: "$199.00",
        imageSrc:
          "https://cdn.shopify.com/s/files/1/2644/1682/products/fruit_10_87bc3dfd-64c6-4ad2-b12f-3f5df9c1e8cf_grande.jpg?v=1513650005",
      },
      {
        title: "",
        price: "$199.00",
        imageSrc:
          "https://cdn.shopify.com/s/files/1/2644/1682/products/fruit_13_grande.jpg?v=1513650023",
      },
      {
        title: "",
        price: "$34.00",
        imageSrc:
          "https://cdn.shopify.com/s/files/1/2644/1682/products/fruit_31_grande.jpg?v=1515125720",
      },
      {
        title: "",
        price: "$34.00",
        imageSrc:
          "https://cdn.shopify.com/s/files/1/2644/1682/products/fruit_02_eb1e2d21-aed7-475e-9621-a5941c2b191a_grande.jpg?v=1514257282",
      },
      {
        title: "Aurore Grape",
        price: "$34.00",
        imageSrc:
          "https://cdn.shopify.com/s/files/1/2644/1682/products/fruit_10_87bc3dfd-64c6-4ad2-b12f-3f5df9c1e8cf_grande.jpg?v=1513650005",
      },
    ],
  },
  getters: {
    products(state) {
      return state.products;
    },
    productsAll(state) {
      return state.productsAll;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
