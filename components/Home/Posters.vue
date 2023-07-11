<template>
  <div class="container posters animate__animated animate__bounce">
    <div class="card-group">
      <div class="card border-0 first-post">
        <div class="card-body text-light d-flex justify-content-between">
          <div class="mt-3">
            <h5 class="card-title">{{ $t("header_title") }}</h5>
            <p class="card-text">
              {{ $t("post_content") }}
            </p>
            <h5>{{ $t("first_post_price") }}</h5>
          </div>
          <img src="@/assets/images/laptop.png" alt="" />
        </div>
      </div>
      <div class="card border-0">
        <div class="card-body text-center second-poster">
          <img
            class="mt-3 w-75 h-75"
            src="@/assets/images/poster-2.png"
            alt=""
          />
          <span
            class="card-footer border-0 bg-white d-flex justify-content-between"
          >
            <h5>{{ $t("second_post_title") }}</h5>
            <h5 class="text-secondary">{{ $t("second_post_price") }}</h5>
          </span>
        </div>
      </div>
      <div class="card border-0 bg-secondary-subtle third-poster">
        <div class="card-body mt-3 p-3 d-flex">
          <div>
            <h5 class="card-title">{{ $t("third_post_title") }}</h5>
            <p class="card-text">
              {{ $t("post_content") }}
            </p>
            <p class="display-6">{{ $t("third_post_price") }}</p>
          </div>
          <img src="@/assets/images/poster-3.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.animate__animated.animate__bounce {
  --animate-duration: 2s;
}
.first-post {
  background-color: #ff6875;
  height: 280px;
}

.first-post img {
  width: 50%;
  height: 40%;
  margin-top: auto;
}

.second-poster img {
  margin: 0 auto;
}

.third-poster img {
  width: 40%;
  height: 40%;
  margin: auto 0 0 0;
}

@media (min-width: 575px) {
  .posters {
    margin-top: -125px;
    margin-bottom: 150px;
  }
}
</style>
