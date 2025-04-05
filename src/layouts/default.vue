<template>
  <v-app>
    <v-layout>
      <AppHeader />

      <v-main class="mt-15">
        <router-view />
      </v-main>

      <AppFooter />
    </v-layout>
  </v-app>
</template>

<script lang="ts" setup>
  //
</script>

<style>
.v-main {
  padding-top: 64px !important; /* Adjust based on your header height */
}

@media (max-width: 600px) {
  .v-main {
    padding-top: 56px !important; /* Smaller padding for mobile */
  }
}
</style>
