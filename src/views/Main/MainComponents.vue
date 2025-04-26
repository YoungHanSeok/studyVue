<template>
  <main :class="['main-content', { shifted: menuOpen }]">
    <div class="container">
      <h2>TO-DO LIST</h2>
      <input class="form-control" placeholder="Search"
             type="text" v-model="searchText">
<!--      <button @click="doSearch">검색</button>-->
      <hr/>
      <TodoSimpleForm @add-todo="addTodo"></TodoSimpleForm>
      <div style="color:red">{{error}}</div>
    <div v-if="!todos.length">
      추가된 Todo가 없습니다.
    </div>
      <TodoList
                :todos="filterTodos"
                @toggle-todo="toogleTodo"
                @delete-todo="deleteTodo"/>
    </div>
  </main>
</template>

<script setup>
import {ref,reactive,computed} from 'vue';
import TodoSimpleForm from "@/views/Main/TodoSimpleForm.vue";
import TodoList from "@/views/Main/TodoList.vue";
import axios from "axios";

const todos = ref([
]);
const toggle = ref(false);
const searchText = ref('');
const searchKeywork = ref('');
const error = ref('');

const filterTodos = computed(() => {
  if (searchText.value){
    return todos.value.filter(todo => {
      return todo.subject.includes(searchText.value);
    });
  }
  return todos.value;
})

const doSearch = () => {
  searchKeywork.value = searchText.value;
}

const deleteTodo = (index) =>{
  console.log("Delete Todo");
  todos.value.splice(index,1);
}

const toogleTodo = (index) => {
  todos.value[index].completed = !todos.value[index].completed;
}

const addTodo = (todo) => {
  // 데이터베이스에 저장
  error.value= '';
  axios.post("http://localhost:3000/todos",{
    subject : todo.subject,
    completed : todo.completed
  }).then(res => {
    console.log(res);
    todos.value.push(todo);
  }).catch(err => {
    console.log(err);
    error.value = 'Something went wrong';
  })

}
defineProps({
  menuOpen: Boolean
})
</script>

<style scoped>
.todo{
  color:gray;
  text-decoration: line-through;
}
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