<template>
  Todo Simple Form
  <form @submit.prevent="changeName">
    <div class="d-flex">
      <div class="flex-grow-1 mr-2">
        <input class="form-control" placeholder="Type new to-do"
               type="text" v-model="todo">

      </div>
      <div>
        <button :class="'btn btn-primary'"  type="submit">Add</button>
      </div>
    </div>
    <div v-show="hasError" style="color:red">
      This Field cannot be empty
    </div>
  </form>
</template>

<script setup>
import {ref} from "vue";

const emits = defineEmits(["add-todo"])
const hasError = ref(false);
let todo = ref('');

const changeName = () => {
  if(todo.value === ''){
    hasError.value = true;
  }else{
    emits("add-todo",{
      id : Date.now(),
      subject : todo.value,
      completed : false
    });
    /*
    todos.value.push({
      id : Date.now(),
      subject : todo.value,
      completed : false
    });
    */
    hasError.value = false;
    todo.value = '';
  }
}

</script>

<style scoped>

</style>