<script setup lang="ts">
const {data} = await useNuxtApp().$api('users/info')
</script>

<template>
data is {{data}}
</template>

<style scoped>

</style>