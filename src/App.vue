<template>
  <div id ="root">
    <LeftMenuComponentsVue @isMenuOpen="onUpdates"></LeftMenuComponentsVue>
    <MainComponentsVue :menu-open="menuOpen">
    </MainComponentsVue>
  </div>
</template>

<script setup>
import { ref } from "vue";
import LeftMenuComponentsVue from "./views/Main/LeftMenuComponents.vue";
import MainComponentsVue from "./views/Main/MainComponents.vue";

const menuOpen = ref(false);

const onUpdates = (data) => {
  menuOpen.value = data;
  console.log("menuOpen.value : "+menuOpen.value);
}
</script>


<style>

</style>