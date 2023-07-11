<template>
  <div id="carouselExample" class="slide-show carousel slide mb-5">
    <div class="container carousel-inner text-light">
      <div class="carousel-item active py-3 px-5 text-center">
        <div class="row justify-content-md-around">
          <div
            class="col-xs-12 col-lg-5 my-5 px-2 animate__animated animate__backInUp"
            enter_the_class=""
          >
            <h1>{{ $t("header_title") }}</h1>
            <p class="mt-5 text-center">
              {{ $t("header_title_content") }}
            </p>
          </div>
          <div
            class="header-image col-lg-4 d-none d-lg-block animate__animated animate__backInUp"
          >
            <img src="@/assets/images/laptop.png" alt="..." />
          </div>
        </div>
      </div>
      <div
        v-for="number in 3"
        :key="number"
        class="carousel-item py-3 px-5 text-center"
      >
        <div class="row justify-content-md-around">
          <div
            class="col-xs-12 col-lg-5 my-5 px-2 animate__animated animate__backInUp"
          >
            <h1>{{ $t("header_title") }}</h1>
            <p class="mt-5 text-center">
              {{ $t("header_title_content") }}
            </p>
          </div>
          <div
            class="header-image col-lg-4 d-none d-lg-block animate__animated animate__backInUp"
          >
            <img src="@/assets/images/laptop.png" alt="..." />
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script setup></script>

<style scoped>
.header-image {
  margin-top: 85px;
}
.slide-show {
  width: 100%;
  height: 420px;
  background-image: linear-gradient(#fd4053, #a95cd6);
}
</style>
