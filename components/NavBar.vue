<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-light">
      <div class="container d-flex align-items-center">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-between"
          id="navbarText"
        >
          <span class="">
            <NuxtLink
              v-for="locale in availableLocales"
              :key="locale.code"
              class="text-decoration-none text-dark btn btn-outline-light rounded p-2 mx-2 mb-1"
              :to="switchLocalePath(locale.code)"
              >{{ locale.name }}</NuxtLink
            >

            <select class="selectpicker bg-transparent p-2" data-width="fit">
              <option value="USD">
                <span class="mx-1">{{ $t("usd_currency") }}</span>
              </option>
              <option value="EGP">
                <span class="mx-1">{{ $t("egp_currency") }}</span>
              </option>
            </select></span
          >
          <span class="navbar-text mt-3 mb-2 mb-lg-0 d-lg-flex">
            <NuxtLink
              :to="localePath('/')"
              class="links d-flex mx-2 text-secondary text-decoration-none"
            >
              <Icon
                name="material-symbols:person-3-rounded"
                class="fs-5 mx-2"
              />
              <p>{{ $t("profile_title") }}</p>
            </NuxtLink>
            <NuxtLink
              :to="localePath('/cart')"
              class="links d-flex mx-2 text-secondary text-decoration-none"
            >
              <Icon
                name="material-symbols:shopping-cart-sharp"
                class="fs-5 mx-2"
              />
              <p>{{ cart.countCartItems }} {{ $t("cart_title") }}</p>
              <p class="text-body-tertiary mx-2">
                {{
                  cart.cartItems
                    .reduce(
                      (acc, item) => (acc += item.price * item.quantity),
                      0
                    )
                    .toFixed(2)
                }}
                $
              </p>
            </NuxtLink>
          </span>
        </div>
      </div>
    </nav>
    <h1
      class="main-title col-12 text-center animate__animated animate__fadeIn"
      to="/"
    >
      {{ $t("brand_title") }}
    </h1>
    <ul class="nav justify-content-center mb-2">
      <li class="nav-item">
        <NuxtLink
          class="nav-link text-secondary animate__animated animate__backInLeft"
          aria-current="page"
          :to="localePath('/')"
          >{{ $t("home_title") }}</NuxtLink
        >
      </li>
      <li class="nav-item">
        <NuxtLink
          class="nav-link text-secondary animate__animated animate__backInRight"
          :to="localePath('/store')"
          >{{ $t("home_store") }}</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useCartStore } from "~/stores/cart";
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
const localePath = useLocalePath();

const cart = useCartStore();
cart.getItemsToCart;
</script>

<style scoped>
.animate__animated .animate__fadeIn {
  animation-duration: 2.5s;
}
.nav-link {
  border-bottom: 1px solid white;
}
.nav-link:hover {
  border-bottom: 1px solid grey;
}
.selectpicker {
  border: none;
  margin: 15px 15px;
}
.main-title {
  color: #ff4252;
}
.search-icon {
  cursor: pointer;
}
</style>
