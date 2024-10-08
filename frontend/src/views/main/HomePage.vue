<template>
  <div class="main">

    <TopNav />
    <div class="contentMain">
      <LeftNav />
      <ContentContainer />
    </div>

  </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue';
import ContentContainer from '@/components/ContentContainer.vue';
import LeftNav from '@/components/LeftNav.vue';

export default {
  components: {
    TopNav,
    LeftNav,
    ContentContainer,
  },
};
</script>

<style scoped>
/* Thêm CSS nếu cần */
</style>