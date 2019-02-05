<template>
  <div class="app ">
      <div class="container">
          <transition name='fade'  >
              <router-view></router-view>
          </transition>
      </div>  
  </div>
</template>

<style>
  body {
    background-size: cover;
    background-attachment: fixed;
    background-image: url("/public/images/look.com.ua-53048.jpg");
  }
  .container {
    padding: 30px;
  }
  .app {
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: none;
    padding: 0;
    align-content: stretch;
  }
</style>