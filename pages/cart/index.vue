<template>
  <div class="container">
    <div class="row my-5 animate__animated animate__fadeInDown">
      <div class="col-md-12">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th></th>
                <th>{{ $t("cart_product_title") }}</th>
                <th></th>
                <th>{{ $t("cart_price_title") }}</th>
                <th>{{ $t("cart_qty_title") }}</th>
                <th>{{ $t("cart_unit_title") }}</th>
              </tr>
            </thead>
            <tbody class="my-5">
              <tr v-for="item in cart.getCartItems" :key="item.id">
                <td>
                  <Icon
                    @click="cart.removeFromCart(item)"
                    class="icon text-danger align-self-center"
                    name="material-symbols:remove-shopping-cart"
                  ></Icon>
                </td>
                <td>
                  <img
                    :src="item.image"
                    class="fluid rounded"
                    width="60"
                    height="60"
                    :alt="item.name"
                  />
                </td>
                <td>
                  {{ item.title }}
                </td>
                <td>${{ item.price }}</td>
                <td class="text-start">
                  <span class="bg-light-subtle d-flex align-items-center">
                    <Icon
                      @click="cart.decrementQ(item)"
                      class="icon"
                      name="ep:minus"
                    ></Icon>
                    {{ item.quantity }}
                    <Icon
                      @click="cart.incrementQ(item)"
                      class="icon"
                      name="ep:plus"
                    ></Icon>
                  </span>
                </td>

                <td>${{ item.price * item.quantity }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div
      class="bg-light-subtle ms-auto col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 p-5 justify-content-end my-5 animate__animated animate__backInUp"
    >
      <p>
        <span class="text-dark fw-bold d-flex justify-content-between"
          >{{ $t("cart_subtotal") }}
          <h5 class="text-danger">
            ${{
              cartItems
                .reduce((acc, item) => (acc += item.price * item.quantity), 0)
                .toFixed(2)
            }}
          </h5></span
        >
      </p>
      <p class="d-flex text-dark fw-bold d-flex justify-content-between">
        {{ $t("cart_shipping_fee") }} <span class="h5 text-danger"> $20</span>
      </p>
      <p
        class="border-bottom pb-3 text-dark fw-bold d-flex justify-content-between"
      >
        {{ $t("cart_coupon") }} <span class="h5 mx-5">No</span>
      </p>
      <h3 class="d-flex justify-content-between">
        {{ $t("cart_total") }}
        <span>
          ${{
            cartItems
              .reduce(
                (acc, item) => (acc += item.price * item.quantity + 20),
                0
              )
              .toFixed(2)
          }}
        </span>
      </h3>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "~/stores/cart";

const cart = useCartStore();

const cartItems = ref(cart.getCartItems);

useHead({
  titleTemplate: "Bouncer - Cart",
});

watch(() => {
  if (process.client) {
    /// Updates the item in local storage
    if(cart.getCartItems.length == 0) {return;}
    localStorage.setItem("shoppingCart", JSON.stringify(cart.getCartItems));
  }
});

onMounted(() => {
  cart.getItemsToCart()
  console.log(cartItems)
  cartItems.value = JSON.parse(localStorage.getItem("shoppingCart"));
});
</script>

<style scoped>
.icon {
  cursor: pointer;
  font-size: 10px;
  margin: 0 5px;
}
</style>
