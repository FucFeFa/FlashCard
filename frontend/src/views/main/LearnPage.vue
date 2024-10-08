<template>
  <div class="main">

    <TopNav />
    <div class="contentMain">
      <LeftNav />
      <LearnContent />
    </div>

  </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue';
import LeftNav from '@/components/LeftNav.vue';
import LearnContent from '@/components/LearnContent.vue';

import '@/assets/css/contentCreate.css';


export default {
  components: {
    TopNav,
    LeftNav,
    LearnContent,
  },
};
</script>

<style scoped></style>