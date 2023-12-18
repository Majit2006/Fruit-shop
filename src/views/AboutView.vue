<template>
  <div>
    <div class="container">
      <h2 class="text-center m-3">Fruit And Health</h2>
      <div class="d-flex mt-5 flex-wrap">
        <div class="col-md-4 col-sm-12 col-xs-12 slide overflow-auto">
          <ul>
            <li class="d-flex slide-item mb-3" v-for="slide in 6" :key="slide">
              <img src="@/assets/images/diet1.png" class="img-fluid p-2" />
              <div class="flex-column">
                <h4 class="mx-3">Purple Grapes</h4>
                <div class="mx-3">
                  Purple Grapes Best Superfoods for Weight Loss
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
          <img src="@/assets/images/ruler.jpg" class="img-fluid mx-2" />
        </div>
        <div class="bg col-md-4 col-sm-6 col-xs-12 mr-5 align-items-center">
          <p class="text-center p-5 mt-3">
            We applaud their efforts, but you don’t have to commit to
            dumpster-diving to live a foraging-friendly lifestyle. One of the
            best ways to incorporate some freeganism into your life is to take
            advantage of the wild fruits in your area. Odds are much of it is
            going to waste anyways.
          </p>
        </div>
      </div>
      <aboutcarousel />
    </div>

    <shopifysectionfooter />
  </div>
</template>

<script>
import shopifysectionfooter from "@/components/footer/shopify-section-footer.vue";
import aboutcarousel from "@/components/Carousel/about-carousel.vue";
export default {
  components: {
    aboutcarousel,
    shopifysectionfooter
  },
};
</script>

<style>
.slide {
  height: 300px;
  scroll-behavior: smooth;
}
.slide-item img {
  border: 1px dashed #8dc73f;
  border-radius: 50%;
}

.slide::-webkit-scrollbar {
  width: 10px;
  background: rgb(255, 255, 255);
  border: 1px solid #e5e5e5;
  border-radius: 5px;
}
.slide::-webkit-scrollbar-thumb {
  background-color: #8dc73f;
  outline: 1px solid #8dc73f;
  border-radius: 3px;
}
.bg {
  background: url("@/assets/images/shape.png");
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
