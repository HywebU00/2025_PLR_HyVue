<template>
  <div class="wrapper">
    <div class="logo">
      <img src="~@/assets/images/h_logo.png" alt="" />
    </div>
    <div class="img">
      <img src="~@/assets/images/error.svg" alt="" />
    </div>
    <h1>Sorry</h1>
    <h2>抱歉！<br />系統維護中！</h2>
    <div class="error">
      <h3>
        網站正在進行維護，暫停服務。<br />
        造成不便，敬請見諒。<br />
        如有任何問題請與我們聯繫。
      </h3>
      <div class="">
        <ul>
          <li>諮詢電話：(04)2262-5100轉1402、1413</li>
          <li>諮詢信箱：plrservice@hyweb.com.tw</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.logo {
  display: flex;
  justify-content: center;
  margin: 2em 0;
}
.logo img {
  max-width: 300px;
  width: 100%;
}
.img {
  display: flex;
  justify-content: center;
}
.img img {
  background: #ffd648;
  width: 100%;
  max-width: 420px;
  padding: 2rem;
  border-radius: 50px;
}
.wrapper {
  width: 100%;
  max-width: 800px;
  margin: 0px auto;
  padding: 1em;
  margin-top: 2em;
}
.wrapper h1 {
  font-size: 5.25em;
  display: block;
  line-height: normal;
  float: left;
  width: 50%;
  text-align: right;
  margin: 10px 30px 15px 0;
  font-family: sans-serif;
}
.wrapper h2 {
  overflow: hidden;
  font-size: 2em;
  line-height: normal;
  padding-top: 1em;
}
.wrapper .error {
  clear: both;
  text-align: center;
}
.wrapper .error h3 {
  line-height: 1.5em;
  margin-bottom: 1em;
}
.wrapper .error .text {
  color: #4b4b4b;
  font-weight: 600;
  display: block;
  margin-bottom: 0.25rem;
}
.wrapper .error ul li {
  color: #4b4b4b;
}
.wrapper .error h3 small {
  display: block;
}
.btn_grp {
  clear: both;
  margin: 2em 0;
  text-align: center;
}

@media screen and (max-width: 767px) {
  .wrapper h1 {
    float: none;
    margin: 10px 0 5px;
    line-height: 1;
    text-align: center;
    width: 100%;
    font-size: 5em;
  }
  .wrapper h2 {
    clear: both;
    text-align: center;
    margin: 0;

    padding: 0;
  }
  .wrapper .error {
    margin-top: 1em;
  }
}
</style>

<script>
export default {
  data: () => ({
    visible: false,
    checkbox: false,
    theme: "",
    dark: false,
  }),
};
</script>
