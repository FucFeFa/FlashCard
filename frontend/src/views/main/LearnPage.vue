<template>
    <div class="main">
      <TopNav />
      <div class="contentCreate" style="display: flex; justify-content: space-between;">
            <LeftBar />
            <LearnContent />
      </div>
    </div>
</template>
  
<script>
import TopNav from '@/components/TopNav.vue';
import LeftBar from '@/components/LeftBar.vue';
import LearnContent from '@/components/LearnContent.vue';

import '@/assets/css/contentCreate.css';

  
export default {
  components: {
    TopNav,
    LeftBar,
    LearnContent,
  },
};
</script>
  
  <style scoped>
  
  
  </style>
  