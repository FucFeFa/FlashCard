<template>
    <div class="main">
      <TopNav />
      <ContentContainer />
    </div>
  </template>
  
  <script>
import TopNav from '@/components/TopNav.vue';
import ContentContainer from '@/components/ContentContainer.vue';

  
export default {
  components: {
    TopNav,
    ContentContainer,
  },
};
  </script>
  
  <style scoped>
  /* Thêm CSS nếu cần */
  </style>
  