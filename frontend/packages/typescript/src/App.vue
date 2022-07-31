<template>
  <!-- Header -->
  <!-- 头部 -->
  <!-- <div class="header" data-wails-drag> -->
    <!-- navigation -->
    <!-- 导航 -->
    <!-- <div class="nav" data-wails-no-drag>
      <router-link to="/">{{ t("nav.home") }}</router-link>
      <router-link to="/about">{{ t("nav.about") }}</router-link>
    </div>
    <div class="menu" data-wails-no-drag>
      <div class="language">
        <div v-for="item in languages" :key="item" :class="{ active: item === locale }"
          @click="onclickLanguageHandle(item)" class="lang-item">
          {{ t("languages." + item) }}
        </div>
      </div>
      <div class="bar">
        <div class="bar-btn" @click="onclickMinimise">
          {{ t("topbar.minimise") }}
        </div>
        <div class="bar-btn" @click="onclickQuit">{{ t("topbar.quit") }}</div>
      </div>
    </div> -->
  <!-- </div> -->
  <!-- Page -->
  <!-- 页面 -->
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import { WindowMinimise, Quit } from "../../../wailsjs/runtime";

export default defineComponent({
  setup() {




    // const onclickMinimise = () => {
    //   WindowMinimise();
    // };
    // const onclickQuit = () => {
    //   Quit();
    // };

    return {

      // onclickMinimise,
      // onclickQuit,
    };
  },
});
</script>

<style lang="scss">
@import url("./assets/css/reset.css");
@import url("./assets/css/font.css");

html {
  width: 100%;
  height: 100%;
}

body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: "JetBrainsMono";
  background-color: transparent;
}

#app {
  position: relative;
  // width: 900px;
  // height: 520px;
  height: 100%;
  background-color: rgba(206, 206, 206, 0.9);
  overflow: hidden;
}
</style>
