<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img alt="Vue logo" class="logo" src="/src/assets/logo.svg" width="50"
            height="50" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto my-0 me-3 mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
            </li>

            <li class="nav-item">
              <RouterLink class="nav-link" to="/about">About</RouterLink>
            </li>

            <li class="nav-item">
              <RouterLink class="nav-link" to="/service">Service</RouterLink>
            </li>

            <li class="nav-item">
              <RouterLink class="nav-link" to="/gallery">Gallery</RouterLink>
            </li>



            <!-- <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li> -->


            <li class="nav-item">
              <RouterLink class="nav-link" to="/news">News</RouterLink>
            </li>

            <li class="nav-item">
              <RouterLink class="nav-link" to="/contact">Contact Us</RouterLink>
            </li>


          </ul>

        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Test",
  created() { },
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>