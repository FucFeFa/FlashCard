<script>

  export default {
    data() {
      return {
        isUserMenuVisible: false,
      };
    },
    methods: {

        toggleUserMenu() {
            this.isUserMenuVisible = !this.isUserMenuVisible;
            console.log(this.isUserMenuVisible)
        },
    },

    
  };


</script>

<template>
    <div class="topNav">
            <div class="topNav-left">
                <i class="topNav-icon"><img src="@/assets/img/flashcard.png" alt="" /></i>
                <h2 class="topNav-text">
                    Flashcards
                </h2>
            </div>

            <div class="topNav-search">
                <div>
                    <form action="search"><i class="topNav-icon-search fa-solid fa-magnifying-glass"></i></form>
                </div>
                
                <div>
                    <input type="text" class="topNav-searchbar" placeholder="Flashcard set"> 
                </div>
            </div>
    
            <div class="topNav-right">
                
                <router-link to="/createpage"><div class="topNav-create">
                    <i class="fa-solid fa-square-plus"></i>
                </div></router-link>
                
    
                <div @click="toggleUserMenu()" class="topNav-user">
                    <li class="header__navbar-item header__navbar-user">
                        <img src="https://thicc.mywaifulist.moe/waifus/32703/9ff5f9810c5eb571975b112419613530607989e7b7a83014af1aabf721e3b8ad_thumb.png" alt="" class="header__navbar-user-img">
                        <span class="header__navbar-user--name">Paimon</span>
    
                        <ul id="js_user" v-show="isUserMenuVisible"  class="header__navbar-user--menu visible">
                            <div class="header__navbar-user--top">
                                <li class="navContent-item">
                                    <i class="fa-solid fa-trophy"></i>
                                    <a href="">Achievements</a>
                                </li>
                                <li class="navContent-item">
                                    <i class="fa-solid fa-gear"></i>
                                    <a href="">Settings</a>
                                </li>
                                <li class="navContent-item">
                                    <i class="fa-solid fa-moon"></i>
                                    <a href="">Dark mode</a>
                                </li>
                            </div>
                            
                            <div class="header__navbar-user--middle">
                                <li class="navContent-item">
                                    <router-link to="/sign-in-up">Log out</router-link>
                                </li>
                            </div>
    
                            <li class="navContent-item">
                                <a href="">Privacy policy</a>
                            </li>
                            <li class="navContent-item">
                                <a href="">Help and feedback</a>
                            </li>
                        </ul>
                    </li>
                </div>
            </div>
    </div>
</template>
  


  