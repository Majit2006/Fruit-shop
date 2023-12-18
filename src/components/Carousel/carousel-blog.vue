<template>
  <swiper
    :slidesPerView="3"
    :spaceBetween="20"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="blog in $store.state.blogitem" :key="blog">
      <div>
      <div class="card d-flex justify-content-between border-0 m-1 text-center overflow-hidden">
        <img src="@/assets/images/blog-img.jpg" alt="" />
        <div class="card-body">
          <h5 class="card-title">
            {{blog.blogtitle}}
          </h5>
          <div>
            <ul class="list-inline-block post-comment-date">
              <li><span class="text-green"> 26 January , 2018 </span></li>
            </ul>
          </div>
          <p class="card-text">
            We applaud their efforts, but you don’t have to commit to
            dumpster-diving to live a foraging-friendly lifestyle. One of the
            best ways to incorporat...
          </p>
          <a
            href="#"
            class="btn btn-success btn-block text-light border-0 shadow-none"
            >Read more</a
          >
        </div>
      </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import { Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    blogitem() {
      return this.$store.getters.blogitem;
    },
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>
