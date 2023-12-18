<template>
  <div>
    <div class="d-flex flex-wrap justify-content-around">
      <div
        class="card mb-3"
        style="max-width: 540px"
        v-for="product in 4 && $store.state.products "
        :key="product.products"
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img :src="product.imageSrc" class="img-fluid rounded-start" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-text text-success-color">{{ product.price }}</h5>
              <p class="card-title pb-2 border-bottom">{{ product.title }}</p>
              <button class="btn btn-sm btn-success border-0 shadow-none">
                ADD TO CART
              </button>
              <nav class="mt-4">
                <ul class="nav d-flex">
                  <li class="nav-item item">
                    <a class="nav-link text-dark" href="#">All</a>
                  </li>
                  <li class="nav-item item">
                    <a class="nav-link text-dark" href="#"
                      >Dried Products fruit</a
                    >
                  </li>
                  <li class="nav-item item">
                    <a class="nav-link text-dark" href="#">fruit</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
     return{
          product_item :[] 
     }
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
};
</script>
