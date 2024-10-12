<script setup lang="ts">
const email = ref('')
const password = ref('')
const login = async () => {
  await authService.signIn(email.value, password.value)
}
</script>

<template>

</template>

<style scoped>

</style>