<script setup lang="ts">
// const response = await useNuxtApp().$api('users/info/')
// console.log(response)
const store = useAuthStore()
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI5NDk0NjczLCJpYXQiOjE3Mjk0OTQzNzMsImp0aSI6IjAxODcyNDliMTBlMDQ2NzViMTcyOTBlZTEzMGRmNzM3IiwidXNlcl9pZCI6N30.FgQMVByeS2GNwGnHn2UYwtGWNtFIk557GWGJYhgnUv8'
// const {data: response} = await useFetch('http://localhost:8000/api/users/info', {
//     onRequest({ request, options }) {
//     // Set the request headers
//     // note that this relies on ofetch >= 1.4.0 - you may need to refresh your lockfile
//     options.headers.set('Authorization', `Bearer ${store.accessToken}`)
//   },
// })
// console.log('hello', response)
const {data: response} = await useNuxtApp().$api('/users/info')
</script>

<template>
data is {{response}}
</template>

<style scoped>

</style>