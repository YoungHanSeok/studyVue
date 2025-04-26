<template>
  <div v-for="(todo,index) in todos"
       :key="todo.id"
       class="card mt-2">
    <div class="card-body p-2 d-flex align-items-center">
      <div class="form-check flex-grow-1">
        <input type="checkbox" class="form-check-input"
               :value="todo.completed"
              @change="toggleTodo(index)">
        <label class ="form-check-label" :class="{todo : todo.completed}">
          {{todo.subject}}
        </label>
      </div>
      <button class="btn btn-danger btn-sm"
              @click="deleteTodo(index)">Delete</button>
    </div>
  </div>
</template>

<script setup>
  const emit = defineEmits(['toggleTodo','deleteTodo'])
  defineProps({
    todos: Array,
    require:true,
  });

  const toggleTodo = (index) => {
    emit("toggleTodo", index);
  }

  const deleteTodo = (index) => {
    emit("deleteTodo",index);
  }


</script>

<style scoped>

</style>