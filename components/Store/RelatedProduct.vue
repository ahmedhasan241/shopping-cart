<template>
  <div class="container related-prod">
    <h1 class="my-5 text-center">{{ $t("realated_products") }}</h1>
    <div
      class="container card-group justify-content-center justify-content-md-start mt-5"
    >
      <div
        v-for="product in products.slice(0, 4)"
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
import { useCartStore } from "~/stores/cart";

const cart = useCartStore();
const localePath = useLocalePath();
const props = defineProps({
  products: Array,
});
</script>

<style scoped>
.card-group {
  display: grid;
  grid-gap: 1.8em;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
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
}

.product-card:hover .card-overlay {
  opacity: 1;
}

.product-card:hover .card-overlay:hover {
  color: white;

  background-image: linear-gradient(#fd4053, #a95cd6);
}
.related-prod {
  margin: 100px 0;
}
</style>
