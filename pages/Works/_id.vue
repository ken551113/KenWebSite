<template>
  <div class="mt-5 mb-5 project container">
    <div class="row" v-show="show">
      <div class="col-md-4 col-lg-4 post post1">
        <div
          class="postcontent"
          :style="{ transform: 'translateY(' + test + 'px)' }"
        >
          <div class="title">{{ title }}</div>
          <div class="content" v-html="post1"></div>
          <div class="back-btn" @click="$router.go(-1)">
            Back
          </div>
        </div>
      </div>
      <div class="col-md-8 col-lg-8 post" v-html="post2"></div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "og:type",
          property: "og:type",
          content: "article"
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.title
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `https://kenlee.com/${this.$route.path}`
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.description
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.featuredmedia2
        },
        {
          hid: "twitter:title",
          property: "twitter:title",
          content: this.title
        },
        {
          hid: "twitter:url",
          property: "twitter:url",
          content: `https://kenlee.com.tw/${this.$route.path}`
        },
        {
          hid: "twitter:description",
          property: "twitter:description",
          content: this.description
        },
        {
          hid: "twitter:image",
          property: "twitter:image",
          content: this.featuredmedia2
        }
      ]
    };
  },
  data() {
    return {
      title: {},
      post1: {},
      post2: {},
      isLoading: false,
      show: false,
      test: 0,
      isfixed: false
    };
  },
  asyncData({ $axios, route }) {
    const api = `https://wpadmin.kenlee.com.tw/wp-json/wp/v2/posts/${route.params.id}?_embed`;
    return $axios.get(api).then(respons => {
      let str = respons.data.content.rendered.split("<p>postsplit</p>");
      let title = respons.data.title.rendered;
      let lastdescription = respons.data.excerpt.rendered;
      let regEx = /<[^>]*>/g;
      let description = lastdescription.replace(regEx, "");
      let post1 = str[0];
      let post2 = str[1];
      let isLoading = false;
      let show = true;
      let featuredmedia =
        respons.data._embedded["wp:featuredmedia"][0].media_details.sizes[
          "medium"
        ].source_url;
      let featuredmedia2 =
        respons.data._embedded["wp:featuredmedia"][0].media_details.sizes[
          "full"
        ].source_url;
      return {
        title,
        post1,
        post2,
        show,
        featuredmedia,
        featuredmedia2,
        description
      };
    });
  },
  methods: {
    getProject() {
      const vm = this;
      const api = `https://wpadmin.kenlee.com.tw/wp-json/wp/v2/posts/${vm.$route.params.id}`;
      // const api = `http://localhost:8888/wp-json/wp/v2/posts/${
      //   vm.$route.params.id
      // }`;
      vm.isLoading = true;
      vm.$http.get(api).then(respons => {
        var str = respons.data.content.rendered.split("<p>postsplit</p>");
        console.log(respons.data);
        vm.title = respons.data.title.rendered;
        vm.post1 = str[0];
        vm.post2 = str[1];
        vm.isLoading = false;
        vm.show = true;
      });
    },
    handleScroll() {
      var scrollTop = document.documentElement.scrollTop;
      // var offsetTop = document.querySelector(".post1").offsetTop;
      const vm = this;
      if (scrollTop > 120 && window.screen.width > 768) {
        vm.test = scrollTop - 100;
      } else {
        vm.test = 0;
      }
      // var offsetTop = document.querySelector('.post1').offsetTop
      //console.log(window.screen.width);
    }
  },
  created() {
    // this.getProject();
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Noto+Serif+TC:400,500,600,700,900");

.project{
    min-height: calc(100vh - 160px);

}

.back-btn{
  color: #484848;
  cursor: pointer;
  transition: 0.3s;
  &:hover{
    color:#000000;
  }
}

* {
  font-family: "Noto Serif TC", serif;
  text-align: left;
}
.post1 {
  padding-right: 54px;
  // transition: 10s;
}

.title {
  font-size: 14px;
  font-weight: 900;
}
.content {
  margin-top: 10px;
}
.post/deep/p {
  font-size: 12px;
  line-height: 20px;
  word-break: break-all;
}

.post/deep/img {
  max-width: 100%;
  height: auto;
}
.post/deep/em {
  font-size: 12px;
}
.postcontent {
  transition: 0.5s;
}
</style>
