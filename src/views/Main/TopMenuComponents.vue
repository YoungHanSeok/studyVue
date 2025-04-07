<template>
  <header class="top-menu">
    <h1>My App</h1>
    <nav>
      <ul>
        <li><a href="#">대시보드</a></li>
        <li><a href="#">설정</a></li>
        <li><a href="#">로그아웃</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
</script>

<style scoped>
.top-menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #333;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 1002;
}

.top-menu ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.top-menu a {
  color: white;
  text-decoration: none;
}
</style>
