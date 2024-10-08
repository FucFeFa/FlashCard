<template>

  <div class="content-container">

    <div class="content-container-recent">
      <router-link to="/learnpage">
        <ul class="content-container-flashcard">
          <li>
            <h3>NameFlashCard</h3>
          </li>
          <li class="terms">1021 terms</li>
          <li class="makeby">
            <img src="@/assets/img/lumine.jpg" alt="" class="header__navbar-user-img">
            <span class="header__navbar-user--name">Paimon</span>
          </li>
        </ul>
      </router-link>

    </div>

    <div class="content-container-recent">
      <router-link to="/learnpage">
        <ul class="content-container-flashcard">
          <li>
            <h3>NameFlashCard</h3>
          </li>
          <li class="terms">1021 terms</li>
          <li class="makeby">
            <img src="@/assets/img/lumine.jpg" alt="" class="header__navbar-user-img">
            <span class="header__navbar-user--name">Paimon</span>
          </li>
        </ul>
      </router-link>

    </div>

    <div class="content-container-recent">
      <router-link to="/learnpage">
        <ul class="content-container-flashcard">
          <li>
            <h3>NameFlashCard</h3>
          </li>
          <li class="terms">1021 terms</li>
          <li class="makeby">
            <img src="@/assets/img/lumine.jpg" alt="" class="header__navbar-user-img">
            <span class="header__navbar-user--name">Paimon</span>
          </li>
        </ul>
      </router-link>

    </div>



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