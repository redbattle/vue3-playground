<template>
  <div>
    <h1>Page</h1>
    <van-button type="primary" @click="getWeatherInfo">获取天气</van-button>
    <!--loading-->
    <van-button type="primary" @click="loading = true">开启加载动画</van-button>
    <div v-if="loading" class="loading-spinner">
      <svg viewBox="25 25 50 50" class="circular">
        <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
      </svg>
    </div>
    <!--flex-->
    <div class="box">
      <div class="flex-basis">我设置了flex-basis</div>
      <div class="width">我设置了width</div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { getWeather } from '@/api/home'

export default {
  setup(){
    const loading = ref(false)
    return {
      loading
    }
  },
  methods: {
    getWeatherInfo() {
      getWeather({
        city: 420000,
        key: '',
      })
    },
  },
}
</script>

<style lang="less" scoped>
.box {
  display: flex;
}
.flex-basis {
  padding: 1em;
  border: 1em solid deepskyblue;
  color: deepskyblue;
  flex-basis: auto;
  box-sizing: border-box;
  word-break: break-all;
}
.width {
  padding: 1em;
  border: 1em solid deepskyblue;
  color: deepskyblue;
  width: 100px;
  box-sizing: border-box;
  word-break: break-all;
}
.loading-spinner {
  position: absolute;
  z-index: 2000;
  background-color: hsla(0, 0%, 100%, 0.9);
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: opacity 0.3s;
  .path {
    animation: loading-dash 1.5s ease-in-out infinite;
    stroke-dasharray: 90, 150;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #409eff;
    stroke-linecap: round;
  }
  .circular {
    height: 42px;
    width: 42px;
    animation: loading-rotate 2s linear infinite;
    position: absolute;
    top: 50%;
    margin-top: -21px;
    width: 100%;
    text-align: center;
    position: absolute;
  }
}
@keyframes loading-rotate {
  100% {
    transform: rotate(1turn);
  }
}
</style>
