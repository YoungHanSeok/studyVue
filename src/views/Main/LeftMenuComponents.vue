<template>
  <div class="app-container">
    <!-- 메뉴 토글 버튼 -->
    <button class="menu-toggle" @click="toggleMenu">
      ☰
    </button>

    <!-- 사이드 메뉴 -->
    <aside :class="['sidebar', { open: isMenuOpen }]">
      <nav>
        <ul>
          <li><a href="#">홈</a></li>
          <li><a href="#">소개</a></li>
          <li><a href="#">서비스</a></li>
          <li><a href="#">연락처</a></li>
        </ul>
      </nav>
    </aside>

    <!-- 메인 콘텐츠 -->
  </div>
</template>

<script setup>
import { ref } from 'vue';

var isMenuOpen = ref(false);

const emits = defineEmits(['isMenuOpen']);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  emits('isMenuOpen',isMenuOpen.value);
}

</script>

<style scoped>
.app-container {
  display: flex;
}

.menu-toggle {
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 1001;
  background-color: #333;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.sidebar {
  width: 250px;
  height: 100vh;
  background-color: #222;
  color: white;
  position: fixed;
  top: 60px;
  left: -250px; /* 숨긴 상태 */
  transition: left 0.3s ease;
  z-index: 1000;
  padding-top: 4rem;
}

.sidebar.open {
  left: 0; /* 열린 상태 */
}

.sidebar nav ul {
  list-style: none;
  padding: 0;
}

.sidebar nav ul li {
  padding: 1rem;
}

.sidebar nav ul li a {
  color: white;
  text-decoration: none;
  display: block;
}

.sidebar.open {
  margin-left: 250px;
}
</style>
