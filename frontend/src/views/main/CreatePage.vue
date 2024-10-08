<template>
  <div class="main">
    <TopNav class="topBar" />
    <ContentCreate />
  </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue';
import ContentCreate from '@/components/ContentCreate.vue';

import '@/assets/css/contentCreate.css';


export default {
  components: {
    TopNav,
    ContentCreate,
  },
};
</script>

<style scoped></style>