<template>
  <div>
    <div class="text-light mt-5">
      <footer class="footer bg-dark p-5">
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <h4>about us</h4>
              <div class="about-footer">
                <a href="#">
                  <img
                    src="https://cdn.shopify.com/s/files/1/2644/1682/files/about_large.png?v=1613704306"
                    class="img-fluid"
                  />
                </a>
              </div>
              <p class="lh-1 mt-1 text-secondary mt-2">
                With more than 15 years of experience we can proudly say that we
                are one of the best in business, a trusted supplier for more
                than 1000 companies...
              </p>
            </div>
            <div class="col d-flex flex-column align-items-start">
              <h4 class="mx-4">Infomation</h4>
              <div class="menu-footer">
                <ul class="d-flex align-items-start flex-column">
                  <li>Home</li>
                  <li>Fruits</li>
                  <li>Shop</li>
                  <li>Blog</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
            <div class="col">
              <h4>Contact us</h4>
              <ul class="contact-icons">
                <li class="mt-2">
                  <span
                    ><i class="bi bi-house-door-fill text-green"></i
                  ></span>
                  Our business address is 1063 Freelon Street, San Francisco
                </li>
                <li class="mt-2">
                  <span><i class="bi bi-phone text-green"></i></span> +
                  020.566.6666
                </li>
                <li class="mt-2">
                  <span><i class="bi bi-envelope-fill text-green"></i></span>
                  Our business address is 1063 Freelon Street, San Francisco
                </li>
                <li class="mt-2">
                  For Product Registration and general enquires please contact
                  us
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="container d-flex justify-content-between border-top border-1 border-secondary p-3"
        >
          <div class="d-flex flex-wrap">
            <h3>Get It Touch</h3>
            <div class="sosial mt-1">
              <img src="@/assets/images/f_social1_icon.png" class="mx-1" />
              <img src="@/assets/images/f_social2_icon.png" class="mx-1" />
              <img src="@/assets/images/f_social3_icon.png" class="mx-1" />
              <img src="@/assets/images/f_social4_icon.png" class="mx-1" />
              <img src="@/assets/images/f_social5_icon.png" class="mx-1" />
            </div>
          </div>
          <div class="d-flex">
            <h3>Payment method</h3>
            <div class="payment-method">
              <img
                src="@/assets/images/f_payment1_icon.png"
                class="mx-1 mt-2"
              />
              <img
                src="@/assets/images/f_payment2_icon.png"
                class="mx-1 mt-2"
              />
              <img
                src="@/assets/images/f_payment3_icon.png"
                class="mx-1 mt-2"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.footer-bg {
  background: #2c2c2c;
  margin-top: 50px;
}
ul li a {
  color: #fff !important;
}
.footer-bg p {
  color: #999 !important;
}
</style>
