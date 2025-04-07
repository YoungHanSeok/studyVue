<template>
  <div id ="root">
    <TopComponents>

    </TopComponents>
    <LeftMenuComponentsVue @isMenuOpen="onUpdates"></LeftMenuComponentsVue>
    <MainComponentsVue :menu-open="menuOpen">
    </MainComponentsVue>
  </div>
</template>

<script setup>
import { ref } from "vue";
import LeftMenuComponentsVue from "./views/Main/LeftMenuComponents.vue";
import MainComponentsVue from "./views/Main/MainComponents.vue";
import TopComponents from "@/views/Main/TopMenuComponents.vue";

const menuOpen = ref(false);

const onUpdates = (data) => {
  menuOpen.value = data;
}
</script>


<style>
#root {
  padding-top: 60px; /* 상단 메뉴 높이만큼 밀어주기 */
}
</style>