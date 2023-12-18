<template>
  <div>
    <div class="container mt-5">
      <div
        class="about-client d-flex flex-column justify-content-center text-center align-items-center"
      >
        <div class="col">
          <p class="fs-6">What People Say</p>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/2644/1682/t/29/assets/av2.png?v=157285554261497669291517280050"
              class="border border-success rounded-circle p-3"
            />
          </div>
          <p class="text-center">
            I rarely write reviews for products but with the EngoCreative, I am
            more than grateful. The site is fully customizable and you can
            really feel like playing while designing the site! Thanks again for
            having made such a convenient, yet fully-functional theme.
          </p>
        </div>
        <div class="col mt-4">
          <h3>ONATHAN VANCE</h3>
          <span class="text-success">CEO & Founder</span>
        </div>
      </div>
    </div>
    <div class="container overflow-x-auto">
      <h3 class="text-center fw-bold m-4">Dedicated Farmer</h3>
      <div class="CardSlide d-flex overflow-x-auto m-2">
        <div class="card col-4 border-success p-42 m-2"  v-for="i in 3" :key="i">
          <div class="card-body">
            <div class="card-title fw-bold h5">Jonathan</div>
            <span class="text-success fs-5">sale</span>
            <div class="card-text text-pre lh-2 mt-2">
              Meet the maker of our bread – our fabulous baker boy alberto
              Trombin. He creates superb bread in their Melbourne-based
              bread-quarters.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>