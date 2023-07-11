<template>
  <div class="container mt-5">
    <div class="row justify-content-between d-flex flex-md-row flex-column">
      <div class="col-12 col-md-4 col-lg-4 col-xl-3 mb-5">
        <div
          class="list-group bg-light-subtle text-first ps-2 animate__animated animate__fadeInUpBig"
        >
          <h3 class="my-3 mx-auto">{{ $t("home_store") }}</h3>
          <a
            @click="store.getProducts({ limit: 20 })"
            class="list-group-item list-group-item-action bg-light-subtle list-group-item-tertiary border-0"
            >{{ $t("all_items") }}</a
          >
          <a
            v-for="cate in store.categories"
            @click="store.getProductsCategory(cate)"
            :key="cate.id"
            class="list-group-item list-group-item-action text-capitalize bg-light-subtle list-group-item-tertiary border-0"
            >{{ $t(cate) }}</a
          >
        </div>

        <Range @rangeChanged="filterProducts" />
      </div>
      <div
        class="card-group col-12 col-md-8 col-lg-8 col-xl-9 justify-content-center justify-content-md-start animate__animated animate__fadeInUpBig"
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
              class="card-overlay text-decoration-none btn rounded mb-2 w-75 mx-auto"
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
  </div>
</template>

<script setup>
import { useProductStore } from "~/stores/product";
import { useCartStore } from "~/stores/cart";

const cart = useCartStore();

const store = useProductStore();
const localePath = useLocalePath();
useHead({
  titleTemplate: "Bouncer - Store",
});

onMounted(() => {
  store.getProducts({ limit: 20 });
});
</script>

<style scoped>
.card-group {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(210px, 215px));
}
@media (max-width: 530px) {
  .card-group {
    display: grid;
    grid-gap: 1.8em;
    grid-template-columns: repeat(auto-fit, minmax(200px, 270px));
  }
}
.list-group a {
  cursor: pointer;
}
.product-card {
  transition: all 1s;
  padding: -1000px;
  height: 350px;
}

.product-card:hover {
  transform: translateY(-25px);
}

.product-card .card-overlay {
  opacity: 0;
}

.product-card:hover .card-overlay {
  opacity: 1;
}

.product-card:hover .card-overlay:hover {
  color: white;

  background-image: linear-gradient(#fd4053, #a95cd6);
}
</style>
