<template>
  <div id ="root">
    <TopComponents>

    </TopComponents>
    <LeftMenuComponentsVue @isMenuOpen="onUpdates"></LeftMenuComponentsVue>
    <MainComponentsVue :menu-open="menuOpen">
    </MainComponentsVue>
    <div id="test1">
      <h1>큰화면</h1>
    </div>
    <div id="test2">
      <h1>작은화면</h1>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import LeftMenuComponentsVue from "./views/Main/LeftMenuComponents.vue";
import MainComponentsVue from "./views/Main/MainComponents.vue";
import TopComponents from "@/views/Main/TopMenuComponents.vue";
import {useWindowSize} from "@/composables/useWindowSize.js";

const menuOpen = ref(false);

// const { windowWidth, isSmallScreen} = useWindowSize(1200);

const onUpdates = (data) => {
  menuOpen.value = data;
}
</script>


<style lang="scss">
@use '@/assets/test.scss';
#root {
  padding-top: 60px; /* 상단 메뉴 높이만큼 밀어주기 */
}
</style>