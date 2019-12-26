<template>
  <div class="col-6 col-sm-6 col-md-3 col-lg-2 mb-4 d-flex">
    <div class="card border-0 shadow-none flex-fill">
      <nuxt-link :to="post.url">
        <div class="img">
          <img class="card-img-top" :src="post.imageUrl" alt="Card image cap">
        </div>
      </nuxt-link>
      <div class="card-body">
        <h5 class="card-title">
          <nuxt-link :to="post.url" class="text-dark">{{post.title.rendered}}</nuxt-link>
        </h5>
        <p class="card-text" v-html="post.excerpt.rendered"></p>
        <div class="d-flex justify-content-between align-posts-baseline"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",

  props: {
    post: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>

.card-body {
  padding: 0px;
  padding-top: 20px;
}
.img {
  overflow: hidden;
  border-radius: 8px;
}
.card-title {
  font-size: 12px;
  text-align: left;
  word-break: break-all;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 2px;
}
p {
  font-size: 11px;
  text-align: left;
  word-break: break-all;
  color: #666666;
  line-height: 1.4;
}

.card-img-top {
  transition: 0.2s;
  &:hover {
    transform: scale(1.1);
  }
}
</style>
