<template>
  <div class="container">
    <div class="main">
      <div class="text-center">
        <img class="avatar" src="../assets/images/avatar.jpg" alt="" />
        <h1>Ken Lee</h1>
        <vue-typed-js
          :strings="[`A Front-End Enginner`, `LET'S WORK TOGETHER`]"
          :typeSpeed="100"
          :loop="true"
          :startDelay="1000"
          :backSpeed="50"
          :stringsElement="'myId'"
          :showCursor="false"
        >
          <div class="typing"></div>
        </vue-typed-js>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss" scoped>
.main {
  min-height: calc(100vh - 160px);
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  font-size: 32px;
  margin: 25px 0px;
  font-weight: bold;
}
.avatar {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.3));
}
.typing {
  font-size: 21px;
  text-align: center;
  width: 100%;
  height: 48px;
  color: #bfbfbf;
  font-weight: 600;
}

footer {
  bottom: 0px;
}
</style>
