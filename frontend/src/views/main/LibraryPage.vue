<template>
    <div class="main">
        
      <TopNav />
      <div class="contentMain">
        <LeftNav />
        <LibraryContainer />
      </div>
  
    </div>
  </template>
  
  <script>
  import TopNav from '@/components/TopNav.vue';
  import LibraryContainer from '@/components/LibraryContainer.vue';
  import LeftNav from '@/components/LeftNav.vue';
  
  export default {
    components: {
      TopNav,
      LeftNav,
      LibraryContainer,
    },
  };
  </script>
  
  <style scoped>
  /* Thêm CSS nếu cần */
  </style>