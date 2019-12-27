<template>
  <nav class="navbar navbar-expand-lg navbar-light nav-custom">
    <div class="container">
      <nuxt-link class="navbar-brand" to="/">KenLee</nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <nuxt-link class="nav-link" to="/">HOME</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/about" data-toggle="collapse" data-target=".navbar-collapse.show">ABOUT</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/works" data-toggle="collapse" data-target=".navbar-collapse.show">WORKS</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/experience" data-toggle="collapse" data-target=".navbar-collapse.show">EXPERIENCE</nuxt-link>
          </li>
          <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <a
              class="nav-link"
              href="https://ken551113.github.io"
              target="blank"
              >BLOG</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.nav-custom {
  background-color: #fff;
  padding: 20px 0px;
}

.nav-item {
  font-weight: 600;
  text-align: center;
}

@media (max-width: 576px){
  .navbar>.container{
    margin-right: 10px;
    margin-left: 10px;
  }
}
</style>
