<template>
  <div class="container-fluid">
    <div class="container-fluid mt-4">
      <InputMail :is-required="true" :placeholder="'email'" :size="'lg'" ref="email"/>
      <InputText :is-required="true" :placeholder="'Nom'" :size="'lg'" ref="name"/>
      <InputText :placeholder="'Prénom'" :size="'lg'" ref="lastname"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "articles"
  }
</script>

<style scoped>

</style>

<router>
  {
  path: '/articles',
  alias: [
  '/articles'
  ]
  }
</router>
