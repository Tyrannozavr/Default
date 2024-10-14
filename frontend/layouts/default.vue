<script setup lang="ts">

</script>

<template>
  <template>
    <v-app>
      <v-layout ref="app" class="rounded-md">
        <v-app-bar color="grey-lighten-2 justify-end" name="app-bar">
          <v-spacer></v-spacer>
          <NuxtLink to="/login"
                    class="flex items-center justify-center px-5 mr-4 rounded-2xl h-8 bg-amber-200 hover:bg-amber-700">
            Profile
          </NuxtLink>
        </v-app-bar>
        <v-navigation-drawer
            color="grey-darken-2"
            location="end"
            name="drawer"
            permanent
        >
          <div class="d-flex justify-center align-center h-100">
            <v-btn @click="print('drawer')">Get data</v-btn>
          </div>

        </v-navigation-drawer>

        <v-main class="d-flex flex-column align-center justify-center" style="min-height: 300px;">
          <NuxtPage/>
        </v-main>

        <v-footer
            name="footer"
            app
        >
        </v-footer>
      </v-layout>
    </v-app>
  </template>

</template>

<style scoped>

</style>
