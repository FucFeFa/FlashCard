<template>
  <div class="leftNav" id="sidebar">
    <ul class="leftNav-content">

      <router-link to='/'>
        <li id="item1" class="navContent-item navContent-itemInfor" @click="changeColor('item1')">
          <i class="fa-solid fa-star"></i>
          <a class="text">Home</a>
        </li>
      </router-link>

      <li id="item2" class="navContent-item" @click="changeColor('item2')">
        <i class="fa-regular fa-folder-open"></i>
        <a class="text">Your library</a>
      </li>
      <li id="item3" class="navContent-item" @click="changeColor('item3')">
        <i class="fa-solid fa-bell"></i>
        <a class="text">Notifications</a>
      </li>
      <div class="leftNav-content">
        <span class="study-with">Study with</span>
        <li id="item4" class="navContent-item" @click="changeColor('item4')">
          <i class="fa-solid fa-tags"></i>
          <a class="text">Flash card</a>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>



export default {
  data() {
    return {
      cards: [
        { name: 'NameFlashCard', terms: 102, user: 'Paimon', image: '@/assets/img/' },
        // Thêm các flashcard khác tại đây
      ],
    };
  },

  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    },
    changeColor(itemId) {
      const items = document.querySelectorAll('.navContent-item');
      items.forEach((item) => {
        item.classList.remove('clicked');
      });
      const selectedItem = document.getElementById(itemId);
      selectedItem.classList.add('clicked');
    },
  },
};
</script>

<style scoped>
/* Thêm CSS của content-container tại đây */
</style>