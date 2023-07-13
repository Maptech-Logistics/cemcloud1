<script setup lang="ts">
import { ref } from 'vue'
import MenuLinks from './MenuLinks.vue'
import SvgIconLeftArrow from '@/components/icons/LeftArrow.vue'
import SvgIconRightArrow from '@/components/icons/RightArrow.vue'
import SvgIconLogout from '@/components/icons/LogoutIcon.vue'
import { navLinks } from './NavLinks'

const isExtended = ref(localStorage.getItem('isExtended') === 'true')

const extendMenu = () => {
  isExtended.value = !isExtended.value
  localStorage.setItem('isExtended', `${isExtended.value}`)
}
</script>

<template lang="">
  <aside :class="`${isExtended ? 'is_extended' : ' '}`">
    
    <div class="logo">
      <img src="@/assets/logo.png" alt="Vue" />
    </div>
    <div class="toggle__wrapper">
      <button class="toggle" @click="extendMenu">
        <span class="icons">
          <!-- Display left or right arrow icon based on isExtended value -->
          <SvgIconLeftArrow v-if="isExtended" />
          <SvgIconRightArrow v-else />
        </span>
      </button>
    </div>
    <MenuLinks :links="navLinks" />
    <div class="flex"></div>

    <div class="menu">
      <router-link to="/logout" class="button">
        <span class="icons">
          <SvgIconLogout />
        </span>
        <span class="text">Logout</span>
      </router-link>
    </div>
  </aside>
</template>

<style lang="scss">
@import './SideBar.module.scss';
</style>
