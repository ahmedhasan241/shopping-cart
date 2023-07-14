<template>
  <NavBar />
  <slot />
  <Footer />
</template>

<script setup>
const { locale } = useI18n();
const appDir = ref("");
watchEffect(() => {
  appDir.value = locale.value == "ar" ? "rtl" : "ltr";
});

useHead({
  htmlAttrs: {
    dir: appDir,
  },
});
</script>

<style lang="scss" scoped></style>
