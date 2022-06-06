<template>
  <aside :class="`${is_expanded && 'is-expanded'}`">
      <div class="logo">
        <img src="../assets/logo.png" alt="vue">
      </div>

      <div class="menu-toggle-wrap">
        <button class="menu-toggle" @click="ToggleMenu">
          <span class="material-icons">keyboard_double_arrow_right</span>
        </button>
      </div>

      <h3>Menu</h3>
      <div class="menu">
        <router-link class="button" to="/">
          <span class="material-icons">home</span>
          <span class="text">Home</span>
        </router-link>
        <router-link class="button" to="/About">
          <span class="material-icons">account_circle</span>
          <span class="text">Introduce</span>
        </router-link>
        <router-link class="button" to="/Members">
          <span class="material-icons">group</span>
          <span class="text">Members</span>
        </router-link>
        <router-link class="button" to="/Research">
          <span class="material-icons">science</span>
          <span class="text">Research</span>
        </router-link>
        <router-link class="button" to="/News">
          <span class="material-icons">local_activity</span>
          <span class="text">News</span>
        </router-link>
        <router-link class="button" to="/Activity">
          <span class="material-icons">calendar_month</span>
          <span class="text">Activity</span>
        </router-link>
        <router-link class="button" to="/Contact">
          <span class="material-icons">pin_drop</span>
          <span class="text">Contact</span>
        </router-link>
      </div>

      <div class="flex"></div>

      <div class="menu">
        <router-link class="button" to="/Memo">
          <span class="material-icons">settings</span>
          <span class="text">Settings</span>
        </router-link>
      </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value

  localStorage.setItem("is_expanded", is_expanded.value)
}

</script>

<style lang="scss" scoped>
aside {
    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);   // 사이드바 (닫기 여백)
    min-height: 100vh;    // column 채우기
    overflow: hidden;
    padding: 1rem;    // 컨텐츠와 테두리 사이 여백 영역

    background-color: var(--dark);    // sidebar 배경
    color: var(--light);              // 글 색\Introduce

    transition: 0.2s ease-out;    // 부드럽게 닫기

    .flex {
      flex: 1 1 0;    // 
    }
    .logo{
      margin-bottom: 1rem;

      img {
        width: 2rem;
      }
    }

    .menu-toggle-wrap{    // 토글 버튼
      display: flex;
      justify-content: flex-end;    // icon right-aligned in main-Axis
      margin-bottom: 1rem;

      position: relative;   // icon benchmark
      top: 0;   // icon's up and down speed 
      transition: 0.2s ease-out;    // icon's up and down trans speed

      .menu-toggle {
        transition: 0.2s ease-out;  // icon trans speed

        .material-icons {
          font-size: 2rem;    // icon size
          color: var(--light);    // icon color
          transition: 0.2s ease-out;
        }

        &:hover {     // 토글버튼 잔상남기기
          .material-icons {
            color: var(--primary);
            transform: translatex(0.5rem);
          }
        }
      }
    }

    h3, .button .text {
      opacity: 0;
      transition: 0.3s ease-out;
    }

    h3 {        // 메뉴 태그
      color: var(--grey);
      font-size: 0.875rem;
      margin-bottom: 0.5rem;
      text-transform: uppercase;    // 대문자
    }

    .menu {
      margin: 0 -1rem;

      .button {     // 메뉴버튼 
        display: flex;
        align-items: center;    // flexbox is placed in the middle
        text-decoration: none;    // no underline 

        padding: 0.5rem 1rem; // upside leftside
        transition: 0.2s ease-out;

        .material-icons {
          font-size: 2rem;
          color: var(--light);
          margin-right: 1rem;     // when icon ease-out, str move right side 
          transition: 0.2s ease-out;
        }

        .text {
          color: var(--light);
          transition: 0.2 ease-out;
        }

        &:hover, &.router-link-exact-active {   // activate when the mouse pointer is over an elemnet
          background-color: var(--dark-alt);    // -alt : what?

          .material-icons, .text {    // icon's color change by hover tag
            color: var(--primary);
          }
        }

        &.router-link-exact-active {  // 메뉴 링크 활성화
          border-right: 5px solid var(--primary);   // color the border 
        }
      }
    }

    &.is-expanded {
      width: var(--sidebar-width);

      .menu-toggle-wrap {
        top: -3rem;     // toggle location
        .menu-toggle {
          transform: rotate(-180deg);
        }
      }

      h3, .button .text {
      opacity: 1;   // min 0 ~ max 1
      }

      .button {
          .material-icons {
            margin-right: 1rem;   
          }
      }
    }

    @media (max-width: 1250px) {
      position: fixed;
      z-index: 99;   
    }
}
</style>