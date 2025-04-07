<template>
  <main :class="['main-content', { shifted: menuOpen }]">
    <h1>메인 콘텐츠 영역</h1>
    <p>여기에 실제 페이지 내용이 들어갑니다.</p>
  </main>
</template>

<script setup>
defineProps({
  menuOpen: Boolean
})
</script>

<style scope>
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