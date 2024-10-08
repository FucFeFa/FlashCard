<script>

  export default {
    data() {
      return {
        isUserMenuVisible: false,
      };
    },

    mounted() {
        this.userInfo();
    },

    methods: {

        toggleUserMenu() {
            this.isUserMenuVisible = !this.isUserMenuVisible;
            console.log(this.isUserMenuVisible);
        },

        async userInfo() {
            const response = await fetch('http://localhost:3000/api/v1/users',{
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                },
                credentials: 'include',
  
            })

            const data = await response.json();
            const user = data.user
            const avatar = user.user_avatar
            const name = user.user_fullname
            document.querySelector('.header__navbar-user-img').src = require(`../assets/img/${avatar}`)
            document.querySelector('.header__navbar-user--name').innerHTML = name
            
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
                
                <router-link to="/createpage">
                    <div class="topNav-create">
                        <i class="fa-solid fa-square-plus"></i>
                    </div>
                </router-link>
                
    
                <div @click="toggleUserMenu()" class="topNav-user">
                    <li class="header__navbar-item header__navbar-user">
                        <img src="" alt="" class="header__navbar-user-img">
                        <span class="header__navbar-user--name"></span>
    
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
  


  