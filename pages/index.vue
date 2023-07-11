<template>
  <div>
    <HomeHeader />
    <HomePosters />
    <HomeBestSeller />
    <HomeInfo />
  </div>
</template>

<script setup>
useHead({
  titleTemplate: "Bouncer - Home",
});
</script>

<style>
html[dir="en"] {
  direction: ltr;
}

html[dir="ar"] {
  direction: rtl;
}
</style>
