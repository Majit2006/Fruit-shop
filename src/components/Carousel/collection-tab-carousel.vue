<template>
  <div>
    <div class="container">
      <div>
        <h2 class="text-center">New Arrivals</h2>
      </div>
      <CardProducts />
      <div class="d-flex justify-content-center text-center m-3">
        <button class="btn border-success text-success">VIEW MORE</button>
      </div>
      <CarouselBlog />
      <h2 class="text-center mt-5 mb-5 text-green">#PHOTO IN INSTAGRAM</h2>
    </div>
  </div>
</template>

<script>
import CardProducts from "@/components/card/card-products.vue";
import CarouselBlog from "@/components/Carousel/carousel-blog.vue";
export default { components: { CardProducts, CarouselBlog } };
</script>
