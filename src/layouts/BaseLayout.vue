<template>

  <!-- App Bar -->
  <v-app-bar app color="primary" dark>
    <v-app-bar-nav-icon @click="drawer = !drawer" />

    <v-toolbar-title class="ml-2">
      My Application
    </v-toolbar-title>

    <v-spacer />

    <!-- Nav Links for desktop -->
    <v-btn text v-for="item in navItems" :key="item.title" :to="item.route">
      <p>Dummy</p>
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
    <h1>Dummy list</h1>
  </v-navigation-drawer>

  <!-- Main Content -->
  <v-main>
    <v-container fluid>
      <router-view />
    </v-container>
  </v-main>

  <!-- Footer -->
  <AppFooter />

</template>

<script setup lang="ts">
import { ref } from 'vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import AppFooter from '@/components/AppFooter.vue'

const drawer = ref(false)

const navItems = [
  { title: 'Home', route: '/' },
  { title: 'About', route: '/about' },
  // add additional nav items as needed
]
</script>
