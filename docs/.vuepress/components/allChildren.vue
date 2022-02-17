<template>
  <div class="allChildren">
    <div class="box">
      <h3>六个小孩一台戏</h3>
      <ul>
        <li>
          <img src="../public/images/children1.jpg" />
        </li>
        <li>
          <img src="../public/images/children2.jpg" />
        </li>
        <li>
          <img src="../public/images/children3.jpg" />
        </li>
        <li>
          <img src="../public/images/children4.jpg" />
        </li>
        <li>
          <img src="../public/images/children5.jpg" />
        </li>
        <li>
          <img src="../public/images/children6.jpg" />
        </li>
        <li>
          <img src="../public/images/children7.jpg" />
        </li>
        <li>
          <img src="../public/images/children8.jpg" />
        </li>
        <li>
          <img src="../public/images/children9.jpg" />
        </li>
        <li>
          <img src="../public/images/children10.jpg" />
        </li>
        <li>
          <img src="../public/images/children11.jpg" />
        </li>
        <li>
          <img src="../public/images/children12.jpg" />
        </li>
        <li>
          <img src="../public/images/children13.jpg" />
        </li>
        <li>
          <img src="../public/images/children14.jpg" />
        </li>
        <li>
          <img src="../public/images/children15.jpg" />
        </li>
        <li>
          <img src="../public/images/children16.jpg" />
        </li>
        <li>
          <img src="../public/images/children17.jpg" />
        </li>
        <li>
          <img src="../public/images/children18.jpg" />
        </li>
        <li>
          <img src="../public/images/children19.jpg" />
        </li>
        <li>
          <img src="../public/images/children20.jpg" />
        </li>
      </ul>
      <p>XHML CSS 508|Hover box by nothan</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "allChildren",
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.allChildren {
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
.box {
  height: 471px;
  width: 630px;
  margin: 50px auto;
}
h3 {
  height: 32px;
  text-align: center;
  line-height: 32px;
  color: #986db4;
  border-bottom: 1px dashed #cdcdcd;
}
ul {
  height: 402px;
  margin-top: 6px;
  list-style: none;
}
ul li {
  float: left;
  height: 75px;
  width: 100px;
  border: 6px solid #eeeeee;
  margin: 6px;
  padding: 1px;
}
li img {
  height: 75px;
  width: 100px;
}
ul li:hover img {
  height: 150px;
  width: 300px;
  position: relative;
  right: 0;
  bottom: 40px;
  border: 1px solid #000;
}
p {
  height: 28px;
  text-align: center;
  line-height: 28px;
}
</style>
