<template>
  <div class="container mt-5">
    <div class="row mt-5">
      <div class="col-12 card border-0 mb-3 d-flex flex-md-row flex-xs-column">
        <div class="image-card">
          <img
            :src="`${store.product.image}`"
            class="rounded-start mt-5 mb-2 animate__animated animate__backInDown"
            alt="..."
          />
        </div>

        <div
          class="card-body animate__animated animate__backInUp text-center text-md-start mx-5"
        >
          <h3 class="card-text">{{ store.product.title }}</h3>
          <p class="card-text fs-4 mt-5 text-danger">
            $ {{ store.product.price }}
          </p>
          <h6 class="card-text mb-3">
            {{ $t("available") }}
            <span class="text-secondary ms-3">In Stock</span>
          </h6>
          <h6 class="card-text mb-3">
            {{ $t("category") }}
            <span class="text-secondary ms-3">{{
              store.product.category
            }}</span>
          </h6>
          <h6 class="card-text">{{ $t("free_shipping_single") }}</h6>

          <span
            class="me-5 mt-3 d-flex justify-content-center justify-content-md-start mx-5 mx-md-0"
          >
            <h6 class="mt-2">{{ $t("sizes") }}</h6>
            <select
              class="selectpicker rounded bg-transparent border border-secondary-subtle ms-5 px-3 py-1"
              data-width="fit"
            >
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="X-Large">X-Large</option>
              <option value="2X-Large">2X-Large</option>
            </select>
          </span>
          <br />
          <NuxtLink
            type="button"
            :to="localePath('/cart')"
            class="btn text-docration-none mt-3 p-2 px-lg-5 align-items-center mb-5 w-md-50"
            @click="cart.addToCart(store.product)"
          >
            <Icon
              name="material-symbols:shopping-cart-sharp"
              class="fs-4 mx-2"
            />
            {{ $t("add_cart") }}
          </NuxtLink>
        </div>
      </div>
      <div class="my-5 col-sm-12 bg-body-secondary rounded-4 p-3 p-md-5">
        <span class="fs-3 my-5 fw-medium text-primary">{{
          $t("prod_infor")
        }}</span>
        <p class="mt-5 fs-5">{{ store.product.description }}</p>
      </div>

      <StoreRelatedProduct :products="store.products" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from "~/stores/product";
import { useCartStore } from "~/stores/cart";

const cart = useCartStore();
const store = useProductStore();
const localePath = useLocalePath();

const route = useRoute();
const id = route.params.id;

onMounted(async () => {
  await store.getProduct(id);
  store.getProductsCategory(store.product.category);
});

useHead({
  titleTemplate: "Single Product",
});
</script>

<style scoped>
.image-card {
  width: 35%;
  text-align: center;
}
.image-card img {
  width: 70%;
  height: 270px;
}
@media (max-width: 767px) {
  .image-card {
    width: 100%;
  }
  .image-card img {
    width: 50%;
  }
}
.btn {
  border: 1px solid black;
  transition: all 1s;
}

.btn:hover {
  transform: scale(1.1) translateX(5px);
  color: white;
  border: 1px solid white;
  background-image: linear-gradient(#fd4053, #a95cd6);
}
</style>
