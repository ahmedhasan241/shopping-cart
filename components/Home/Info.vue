<template>
  <div class="container my-5">
    <div class="row mb-5">
      <div class="card-group">
        <div class="col-sm-12 col-lg-6 col-xl-4 card text-center">
          <div class="card-body">
            <Icon
              class="card-title text-danger"
              name="material-symbols:local-shipping"
            />
            <h3 class="card-text my-3">{{ $t("free_shipping") }}</h3>
            <p class="card-text">
              {{ $t("free_shipping_content") }}
            </p>
          </div>
        </div>
        <div class="col-sm-12 col-lg-6 col-xl-4 card text-center">
          <div class="card-body">
            <Icon class="card-title text-danger" name="solar:dollar-broken" />
            <h3 class="card-text my-3">{{ $t("refund_title") }}</h3>
            <p class="card-text">
              {{ $t("refund_content") }}
            </p>
          </div>
        </div>
        <div class="col-sm-12 col-lg-6 col-xl-4 card text-center">
          <div class="card-body">
            <Icon
              class="card-title text-danger"
              name="ic:baseline-support-agent"
            />
            <h3 class="card-text my-3">{{ $t("support_title") }}</h3>
            <p class="card-text">
              {{ $t("support_content") }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <h2 class="text-center my-5">{{ $t("latest_title") }}</h2>
      <div class="card-group my-5">
        <div class="card mb-3 text-center" style="max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="@/assets/images/lastest1.png"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <p class="card-text text-secondary">{{ $t("latest_date") }}</p>
                <h6 class="card-text">{{ $t("latest_head") }}</h6>
                <p class="card-text">
                  {{ $t("latest_header") }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 text-center" style="max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="@/assets/images/lastest2.png"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <p class="card-text text-secondary">{{ $t("latest_date") }}</p>
                <h6 class="card-text">{{ $t("latest_head") }}</h6>
                <p class="card-text">
                  {{ $t("latest_header") }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 text-center" style="max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="@/assets/images/lastest3.png"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <p class="card-text text-secondary">{{ $t("latest_date") }}</p>
                <h6 class="card-text">{{ $t("latest_head") }}</h6>
                <p class="card-text">
                  {{ $t("latest_header") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-5">
      <h2 class="text-center my-5">{{ $t("featured_title") }}</h2>
      <div class="card-group my-5">
        <div
          class="col-xs-12 col-md-12 col-lg-12 card mb-3 text-center text-md-start"
          style="max-width: 540px"
        >
          <div class="row g-0">
            <div class="col-md-5">
              <img
                src="@/assets/images/feautred-1.png"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-7">
              <div class="card-body">
                <p class="card-text">{{ $t("first_featured") }}</p>
                <h6 class="card-text text-danger">
                  {{ $t("featured_price") }}
                  <span class="text-decoration-line-through text-secondary">{{
                    $t("featured_old_price")
                  }}</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-xs-12 col-md-12 col-lg-12 card mb-3 text-center text-md-start"
          style="max-width: 540px"
        >
          <div class="row g-0">
            <div class="col-md-5">
              <img
                src="@/assets/images/feautred-2.png"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-7">
              <div class="card-body">
                <p class="card-text">{{ $t("second_featured") }}</p>
                <h6 class="card-text text-danger">
                  {{ $t("featured_price") }}
                  <span class="text-decoration-line-through text-secondary">{{
                    $t("featured_old_price")
                  }}</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-xs-12 col-md-12 col-lg-12 card mb-3 text-center text-md-start"
          style="max-width: 540px"
        >
          <div class="row">
            <div class="col-md-5">
              <img
                src="@/assets/images/feautred-1.png"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-7">
              <div class="card-body">
                <p class="card-text">{{ $t("third_featured") }}</p>
                <h6 class="card-text text-danger">
                  {{ $t("featured_price") }}
                  <span class="text-decoration-line-through text-secondary">{{
                    $t("featured_old_price")
                  }}</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.card {
  border: none;
}
.card-title {
  font-size: 60px;
}
</style>
