<template>
  <div class="container">
    <div class="map border p-4 mt-5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75993.22202938075!2d-2.2234628499999998!3d53.472245449999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2z0JzQsNC90YfQtdGB0YLQtdGALCDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3QuNGP!5e0!3m2!1sru!2sjp!4v1670401054283!5m2!1sru!2sjp"
        class="col-12"
        height="450"
        style="border: 0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div class="contact-info mt-4">
      <div class="row">
        <div class="col-md-4 col-sm-4 col-xs-12 text-center">
          <a href="#"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="text-success text-center pb-3 bi bi-phone"
              viewBox="0 0 16 16"
            >
              <path
                d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"
              />
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /></svg
          ></a>
          <h2 class="title18 text-upperrace font-bold">
            Hotline:
            <a href="#" class="text-dark text-decoration-none">080 900660</a>
          </h2>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-12 text-center">
          <a href="#"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="text-success text-center pb-3 bi bi-phone"
              viewBox="0 0 16 16"
            >
              <path
                d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"
              />
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /></svg
          ></a>
          <h2 class="title18 text-upperrace font-bold">
            Hotline:
            <a href="#" class="text-dark text-decoration-none">080 900660</a>
          </h2>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-12 text-center">
          <a href="#"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="text-success text-center pb-3 bi bi-phone"
              viewBox="0 0 16 16"
            >
              <path
                d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"
              />
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /></svg
          ></a>
          <h2 class="title18 text-upperrace font-bold">
            Hotline:
            <a href="#" class="text-dark text-decoration-none">080 900660</a>
          </h2>
        </div>
        <p class="m-3 text-center">
          If the supplier fails to ship your products on time or the product
          quality does not meet the standards set in your contract, Aloshop will
          <br />
          refund the covered amount of your payment.
        </p>
      </div>
    </div>
    <div class="contact-form input-group">
      <div class="col-md-4 col-sm-4 col-xs-12 p-3">
        <input type="text" class="name form-control" placeholder="name*" />
      </div>
      <div class="col-md-4 col-sm-4 col-xs-12 p-3">
        <input type="email" class="email form-control" placeholder="email*" />
      </div>
      <div class="col-md-4 col-sm-4 col-xs-12 p-3">
        <input type="text" class="website form-control" placeholder="Website" />
      </div>
      <div class="col-md-12 col-sm-12 col-xs-12">
        <textarea
          name="Comment"
          cols="30"
          rows="8"
          placeholder="Comment"
          class="form-control shadow-none border-secondary"
          id="exampleFormControlTextarea1"
        ></textarea>
        <!-- <input
          type="submit"
          value="Send"
          class="shadow-none btn btn-success col-1 mt-3 border-0 p-2"
        /> -->
        <button class="shadow-none btn btn-success  mt-3 border-0 p-2">
          Send
        </button>
      </div>
    </div>
  </div>
  <ShopifySectionFooter />
</template>

<script>
import ShopifySectionFooter from "@/components/footer/shopify-section-footer.vue";
export default {
  components: { ShopifySectionFooter },
};
</script>

<style>
.title18 {
  font-size: 18px;
}
</style>
