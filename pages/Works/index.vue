
<template>
  <div class="container works">
    <nav class="navbar navbar-expand navbar-light" >
      <div class="navbar-collapse" id="navbarNav">
        <ul class="navbar-nav nav-wrap">
          <li class="nav-item">
            <p
              class="nav-link"
              :class="{'active': visibility === 'all'}"
              @click="visibility = 'all'"
            >all</p>
          </li>
          <li class="nav-item">
            <p
              class="nav-link"
              :class="{'active': visibility === 'Web'}"
              @click="visibility = 'Web'"
            >Web</p>
          </li>
          <li class="nav-item last-item">
            <p
              class="nav-link"
              :class="{'active': visibility === 'Interaction'}"
              @click="visibility = 'Interaction'"
            >Interaction</p>
          </li>
          <li class="nav-item last-item">
            <p
              class="nav-link"
              :class="{'active': visibility === 'App'}"
              @click="visibility = 'App'"
            >App</p>
          </li>
          <li class="nav-item last-item">
            <p
              class="nav-link"
              :class="{'active': visibility === 'other'}"
              @click="visibility = 'other'"
            >other</p>
          </li>
        </ul>
      </div>
    </nav>
      <div class="row mt-5 justify-content-start">
        <Card v-for="post in filteredWorks" :post="post" :key="post.id"/>
      </div>
  </div>
</template>

<script>
import Card from "~/components/Card";

export default {
  head() {
    return {
        title: "Works | Ken Lee",
        meta: [
        {
          hid:'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid:'og:url',
          property: 'og:url',
          content: `https://kenlee.com.tw/${this.$route.path}`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: "Works | Ken Lee",
        }, 
        {
          hid:'og:description',
          property: 'og:description',
          content: "I'm KenLee"
        }, 
        {
          hid:'og:image',
          property: 'og:image',
          content: "https://kenlee.com.tw/avatar.jpg"
        },
        {
          hid:'twitter:url',
          property: 'twitter:url',
          content: `https://kenlee.com.tw/${this.$route.path}`,
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: "Works | Ken Lee",
        }, 
        {
          hid:'twitter:description',
          property: 'twitter:description',
          content: "I'm KenLee"
        }, 
        {
          hid:'twitter:image',
          property: 'twitter:image',
          content: "https://kenlee.com.tw/avatar.jpg"
        }
        ]
    };
  },
  data() {
    return {
      posts: [],
      visibility: "all",
      isLoading: false
    };
  },
  asyncData({$axios}) {
    const api =
        "https://wpadmin.kenlee.com.tw/wp-json/wp/v2/posts?categories=6&&_embed&per_page=100";
        
    return $axios.get(api).then(response =>{
        let posts = response.data;
        posts.forEach(post => {
          post.imageUrl =
            post._embedded["wp:featuredmedia"][0].media_details.sizes[
              "medium"
            ].source_url;
          post.url = `works/${post.id}`;
        });
        return{posts}
    })
  },
  methods: {
    getPosts() {
      const vm = this;
      const api =
        "https://wpadmin.kenlee.com.tw/wp-json/wp/v2/posts?categories=6&&_embed&per_page=100";

      vm.isLoading = true;
      vm.$http.get(api).then(response => {
        // console.log(response.data);
        // console.log(response.data[0]._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url)
        vm.posts = response.data;
        vm.posts.forEach(post => {
          vm.isLoading = false;
          // post.imageUrl =
          //   post._embedded[
          //     "wp:featuredmedia"
          //   ][0].media_details.sizes.medium.source_url;
          post.imageUrl =
            post._embedded["wp:featuredmedia"][0].media_details.sizes[
              "medium"
            ].source_url;
          post.url = `works/${post.id}`;
        });
        // vm.posts = vm.posts.filter(post => {
        //   return post.categories.includes(5);
        // });
      });
    }
  },
  created() {
    // this.getPosts();
  },
  computed: {
    filteredWorks: function() {
      const vm = this;
      var newPost = [];
      if (vm.visibility === "all") {
        return vm.posts;
      } else if (vm.visibility === "App") {
        newPost = vm.posts.filter(post => {
          return post.tags.includes(7);
        });
        return newPost;
      } else if (vm.visibility === "Web") {
        newPost = vm.posts.filter(post => {
          return post.tags.includes(8);
        });
        return newPost;
      } else if (vm.visibility === "Interaction") {
        newPost = vm.posts.filter(post => {
          return post.tags.includes(9);
        });
        return newPost;
      } else if (vm.visibility === "other") {
        newPost = vm.posts.filter(post => {
          return post.tags.includes(10);
        });
        return newPost;
      } 
      return newPost;
    }
  },
  components: {
    Card
  }
};
</script>

<style lang="scss" scoped>

.works{
 margin-top: 30px;
 margin-bottom: 30px;
 min-height: calc(100vh - 220px);
}
.navbar-nav {
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 576px) {
  .navbar-nav {
    margin-right: 0px;
  }
}

@media (max-width: 576px) {
  .nav-wrap {
    flex-wrap: wrap;
    justify-content: center;
  }
  .nav-item {
    margin-top: 8px;
  }
}

.navbar {
  padding: 8px 0px;
}
.navbar-nav {
  .last-item {
    border-right: dotted 1px;
    margin-left: -1px;
  }
  .nav-item {
    border-left: dotted 1px;
    padding: 0px 8px;
    cursor: pointer;

    p {
      font-family: "Comfortaa", cursive;
      font-weight: 900;
      font-size: 12px;
      margin-bottom: 0px;
      transition: 0.5s;
      padding: 0px;
      &:hover {
        transform: translateY(-4px);
      }
    }
  }
}
</style>
