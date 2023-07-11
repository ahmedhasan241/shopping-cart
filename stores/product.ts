export const useProductStore = defineStore("product", () => {
  const products = ref([]);
  const sourceProducts = ref([]);
  const rangeObj = ref({});
  const randomProduct = ref([]); // 20
  const categoryProducts = ref([
    {
      id: "",
      title: "",
      price: "",
      description: "",
      category: "",
      image: "",
      rating: {
        rate: "",
        count: "",
      },
    },
  ]); // 20
  const product = ref([]);
  const categories = ref([
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ]);

  async function getProducts(params: any) {
    let Api = "https://fakestoreapi.com/products";
    for (let param in params) {
      Api += `?${param}=${params[param]}`;
    }
    let response = await fetch(Api);
    products.value = await response.json();
    sourceProducts.value = products.value;
    if (rangeObj.value.start && rangeObj.value.end) {
      getProductsRange(rangeObj.value.start, rangeObj.value.end);
    }
  }

  async function getProduct(params) {
    let Api = `https://fakestoreapi.com/products/${params}`;

    let response = await fetch(Api);
    product.value = await response.json();
  }

  async function getProductsCategory(params) {
    let Api = `https://fakestoreapi.com/products/category/${params}`;

    let response = await fetch(Api);
    products.value = await response.json();
    sourceProducts.value = products.value;
    if (rangeObj.value.start && rangeObj.value.end) {
      getProductsRange(rangeObj.value.start, rangeObj.value.end);
    }
  }
  function getProductsRange(start, end) {
    rangeObj.value = { start, end };
    products.value = sourceProducts.value.filter(
      (prod) => prod.price <= Number(end) && prod.price >= Number(start)
    );
  }
  function getRandomProduct() {
    randomProduct.value =
      products.value[Math.floor(Math.random() * products.value.length)];
  }

  return {
    getProducts,
    products,
    getProductsRange,
    getProductsCategory,
    categories,
    getProduct,
    categoryProducts,
    product,
    randomProduct,
    getRandomProduct,
  };
});
