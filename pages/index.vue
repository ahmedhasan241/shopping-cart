<template>
  <div>
    <HomeHeader />
    <HomePosters />
    <HomeBestSeller />
    <HomeInfo />
  </div>
</template>

<script setup>
import { useCartStore } from '~/stores/cart';
useHead({
  titleTemplate: "Bouncer - Home",
});

let cart = useCartStore();
if(process.client) {
  cart.getItemsToCart()
}
</script>

<style>
html[dir="en"] {
  direction: ltr;
}

html[dir="ar"] {
  direction: rtl;
}
</style>
