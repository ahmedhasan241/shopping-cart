<template>
  <div class="my-5 text-center">
    <h1 class="my-5">{{ $t("best_title") }}</h1>
    <div
      class="btn-group d-md-block d-none animate__animated animate__zoomIn"
      role="group"
      aria-label="Basic example"
    >
      <button
        @click="store.getProducts({ limit: 10 })"
        type="button"
        class="btn button-filter light"
      >
        {{ $t("all_items") }}
      </button>
      <button
        v-for="cate in store.categories"
        @click="store.getProductsCategory(cate)"
        :key="cate.id"
        type="button"
        class="btn button-filter light text-capitalize"
      >
        {{ $t(cate) }}
      </button>
    </div>
    <div
      class="dropdown-center d-md-none d-block animate__animated animate__zoomIn"
    >
      <button
        class="btn btn-light btn-lg dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span class="mx-1">{{ $t("filtred_products") }}</span>
      </button>
      <ul class="dropdown-menu">
        <li @click="store.getProducts({ limit: 10 })" type="button">
          <a class="dropdown-item">{{ $t("all_items") }}</a>
        </li>
        <li
          v-for="cate in store.categories"
          @click="store.getProductsCategory(cate)"
          :key="cate.id"
          class="text-capitalize"
        >
          <a class="dropdown-item">{{ $t(cate) }}</a>
        </li>
      </ul>
    </div>

    <div
      class="container card-group justify-content-center justify-content-md-start mt-5"
    >
      <div
        v-for="product in store.products"
        :key="product.id"
        class="col product-card card shadow text-center my-3"
      >
        <div class="card border-0">
          <NuxtLink
            class="card-body text-decoration-none"
            :to="localePath(`/store/${product.id}`)"
          >
            <img
              :src="`${product.image}`"
              class="card-img-top mx-auto mt-1 mb-3"
              style="width: 150px; height: 150px"
              alt="..."
            />
            <h6 class="card-title text-dark" style="font-size: 13px">
              {{ product.title }}
            </h6>
            <p class="card-text text-danger" style="direction: ltr">
              $ {{ product.price }}
            </p>
          </NuxtLink>
          <NuxtLink
            type="button"
            class="card-overlay text-decoration-none btn rounded w-75 mx-auto mb-2"
            @click="cart.addToCart(product)"
            :to="localePath('/cart')"
          >
            <Icon
              name="material-symbols:garden-cart-outline"
              class="fs-5 mb-1"
            />
            <span class="my-auto mx-1"> {{ $t("add_cart") }}</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from "~/stores/product";
import { useCartStore } from "~/stores/cart";

const cart = useCartStore();
const store = useProductStore();

const localePath = useLocalePath();

onMounted(() => {
  store.getProducts({ limit: 10 });
});
</script>

<style scoped>
.animate__animated.animate__zoomIn {
  --animate-duration: 2s;
}
.dropdown-center {
  z-index: 100;
}

.button-filter:hover {
  border-bottom: 1px solid grey;
}
.card-group {
  display: grid;
  grid-gap: 1.8em;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
@media (max-width: 530px) {
  .card-group {
    display: grid;
    grid-gap: 1.8em;
    grid-template-columns: repeat(auto-fit, minmax(200px, 270px));
  }
}

.product-card {
  transition: all 1s;
  padding: -1000px;
}
.product-card:hover {
  transform: translateY(-25px);
}

.product-card .card-overlay {
  opacity: 0;
  border: 1px solid black;
}

.product-card:hover .card-overlay {
  opacity: 1;
}

.product-card:hover .card-overlay:hover {
  color: white;
  border: none;
  background-image: linear-gradient(#fd4053, #a95cd6);
}
</style>
