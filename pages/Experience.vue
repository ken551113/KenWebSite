<template>
  <div class="experience container">
    <div class="row">
      <div class="col-xs-12 col-md-6 post" v-html="post1"></div>
      <div class="col-xs-12 col-md-6 post" v-html="post2"></div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
        title: "Experience | Ken Lee",
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
          content: "Experience | Ken Lee",
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
          content: "Experience | Ken Lee",
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
  data(){
    return{
      post1:{},
      post2:{}
    }
  },
   asyncData({$axios}) {
    const api =
        "https://wpadmin.kenlee.com.tw/wp-json/wp/v2/pages/149";
    return $axios.get(api).then(response =>{
        let str = response.data.content.rendered.split("<p>postsplit</p>");
        
        let post1 = str[0];
        let post2 = str[1];
        return{post1,post2};
    })
  },


};
</script>

<style lang="scss" scoped>
.experience {
  min-height: calc(100vh - 160px);
  padding: 100px 15px;
  font-size: 14px;
}

p {
  color: #484848;
}
h1 {
  font-size: 26px;
  margin: 15px 0px 25px 0px;
}
ul {
  list-style: none;
  padding: 0px;
}

.inform-list {
  font-size: 14px;
  span {
    font-size: 16px;
  }
  li {
    margin-top: 8px;
    color: #484848;
  }
}

.post{
  color: #484848;
}
.post/deep/ul {
  list-style: none;
  padding-left: 10px;
}

.post/deep/.company {
  margin-bottom: 4px;
}

</style>
