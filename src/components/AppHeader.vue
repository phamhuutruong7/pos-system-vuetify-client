<template>
  <v-app-bar class="position-fixed" color="primary" dark >
    <v-app-bar-nav-icon @click="drawer = !drawer" />

    <v-toolbar-title class="ml-2">
      My Application
    </v-toolbar-title>

    <v-spacer />

    <!-- Nav Links for desktop -->
    <v-btn text v-for="item in navItems" :key="item.title" :to="item.route">
      <p>{{ item.title }}</p>
    </v-btn>

    <!-- Language Switcher in Nav Bar -->
    <LanguageSwitcher />
  </v-app-bar>

  <!-- Navigation Drawer for Mobile -->
  <v-navigation-drawer v-model="drawer" app temporary>
    <v-list>
      <v-list-item v-for="item in navItems" :key="item.title" :to="item.route" @click="drawer = false">
        <v-list-item-title><p>Item title</p></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

const drawer = ref(false)

const navItems = [
  { title: 'Home', route: '/' },
  { title: 'About', route: '/about' },
  // add additional nav items as needed
]
</script>

<style>
.v-app-bar {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
}
</style>