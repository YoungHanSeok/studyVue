<template>
  <main :class="['main-content', { shifted: menuOpen }]">
    <div>
      <h2>TO-DO LIST</h2>
      <form action="">
        <div>
          {{ name }}
        </div>
        <input type="text" v-model="name" @input="updateName(name)">
        <button @click="changeName">이름 바꾸기</button>
      </form>
    </div>
  </main>
</template>

<script setup>
import {ref,reactive} from 'vue';


let name = ref('');

const updateName = (data) => {
  
}

const changeName = () => {

}

defineProps({
  menuOpen: Boolean
})
</script>

<style scoped>
.main-content {
  margin-left: 0;
  padding: 2rem;
  flex-grow: 1;
  margin-left: 0;
  transition: margin-left 0.3s ease;
}

.main-content.shifted {
  margin-left: 250px;
}
</style>