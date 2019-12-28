<template>
  <div class="about container">
    <div class="row">
      <div class="col-xs-12 col-md-6">
        <div class="about-content">
          <h1>李建億 KenLee</h1>
          <p>
            過去任職於互動設計公司擔任軟體工程師，因為是接案性質因此需要不斷精進並整合不同技術，包括前後端開發、軟硬體整合、硬體開發……等等。對前端領域有強烈的熱情，除了完成工作上的專案以外，常常利用下班時間學習、進修新的前後端技術與參加聚會，也會利用閒暇時間將過去工作所使用的技術與前後端進行整合的slide
            project以求不斷充實並精進自己。
            過去在工作上，時常需要直接與業主、設計師、工程師溝通，討論需求與系統規劃，對於不同領域間的溝通以及時程掌握有一定的熟悉度。
            希望未來可以在前端領域持續深耕並且瞭解大團隊合作下的開發流程與溝通技巧，開發讓使用者有良好體驗的專案。
          </p>
          <div class="row">
            <div class="col-sm-6">
              <ul class="inform-list">
                <li>
                  <span><i class="fa fa-envelope"></i> Email：</span
                  >ken551113@gmail.com
                </li>
              </ul>
            </div>
            <div class="col-sm-6">
              <ul class="inform-list">
                <li>
                  <span><i class="fas fa-phone"></i> phone：</span>0972283200
                </li>
              </ul>
            </div>
          </div>
          <ul class="social-list">
            <li>
              <a
                href="https://www.facebook.com/ken.lee.522"
                class="social-icon"
                target="blank"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ken551113"
                class="social-icon"
                target="blank"
              >
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/kenlee_626/"
                class="social-icon"
                target="blank"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://ken551113.github.io/"
                class="social-icon"
                target="blank"
              >
                <i class="fas fa-blog"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-xs-12 col-md-6 test">
        <div class="skills-content">
          <h1>前端工程</h1>
          <ul>
            <li>使用 Vue Cli 3進行開發</li>
            <li>使用 Vue 開發 Component 管理重複結構</li>
            <li>使用 Nuxt 框架進行 SSR 架構網站開發</li>
            <li>結合 Vue 與 LIFF 在 Line 上進行開發</li>
            <li>jQuery、AJAX 使用經驗</li>
            <li>使用 Bootstrap4 與格線系統進行開發</li>
            <li>利用 Socket.io 進行網路通訊</li>
            <li>有 FB Login、Google Map API 使用經驗</li>
          </ul>
          <h1>後端工程</h1>
          <ul>
            <li>使用Node.js框架Express撰寫後端</li>
            <li>Mongodb建立資料庫</li>
            <li>使用JWT開發會員登錄系統</li>
            <li>建立Socket.io 服務與網頁、unity、物聯網裝置溝通</li>
            <li>建立Linux主機進行服務架設</li>
            <li>使用Nginx反向代理網路服務</li>
            <li>使用PM2進行Node.js服務管理</li>
            <li>LineBot開發經驗</li>
          </ul>
          <!-- <h1>other</h1> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about {
  min-height: calc(100vh - 160px);
  padding: 100px 15px;
  font-size: 14px;
}
.about-content {
  padding-right: 30px;
  p {
    line-height: 26px;
  }
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

.social-list {
  margin: 20px 0px;
  li {
    display: inline-block;
    height: 36px;
    width: 36px;
    border-radius: 50%;
    border: solid 1px #888;
    text-align: center;
    /* position: relative; */
    line-height: 36px;
    transition: 0.8s;
    &:hover {
      background-color: #000;
      .social-icon {
        color: #fff;
      }
    }
  }
  .social-icon {
    color: #000;
    text-align: center;
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%); */
  }
}

.skills-content {
  h1 {
    font-size: 21px;
  }
  ul {
    color: #484848;
  }
  li {
    padding-bottom: 3px;
  }
}
</style>
