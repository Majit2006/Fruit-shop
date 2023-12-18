<template>
  <div>
    <header class="sticky-top">
      <nav class="navbar navbar-expand-lg bg-green">
        <div class="container-fluid">
          <router-link to="/">
            <img class="navbar-brand" src="@/assets/images/h2_logo1.png" />
          </router-link>
          <button
            class="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="bi-text-right"> </span>
            <!-- <i class="bi bi-text-right"></i> -->
          </button>
          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarTogglerDemo02"
          >
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link
                  class="nav-link text-light"
                  aria-current="page"
                  alt="majit"
                  to="/"
                  >Home</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-light" aria-current="page" to="/fruits"
                  >Fruits</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-light" aria-current="page" to="/Shop"
                  >Shop</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-light" aria-current="page" to="blog"
                  >Blog</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-light" aria-current="page" to="/about"
                  >About</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-light" aria-current="page" to="/content"
                  >Content</router-link
                >
              </li>
            </ul>
            <div class="d-flex">
              <div class="input-group d-flex">
                <div class="form-outline border-bottom border border-light">
                  <input type="search" id="form1" class="form-control text-light" />
                  <label class="form-label text-light" for="form1">Search</label>
                </div>
                <button type="button" class="btn shadow-none btn-light me-2">
                  <i class="bi bi-search text-success"></i>
                </button>
                <div class="dropdown">
                  <button
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    class="btn btn-light rounded-5 shadow-none dropdown-toggle mt-1"
                  >
                    <!-- <i class="bi bi-basket text-success"></i> -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mb-1 bi bi-cart2" viewBox="0 0 16 16">
                      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                    </svg>
                    2 item - $461.99
                  </button>
                  <!-- <div class="dropdown-menu overflow-hidden">Product item</div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<style scoped>
@import url("@/assets/css/mdb.min.css");
@import url("@/assets/css/bootstrap.css");
.bi-text-right {
  font-size: 25px !important;
}
</style>
