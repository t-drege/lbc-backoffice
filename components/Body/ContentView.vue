<template>
    <div class="content-component container-fluid">
      <NuxtChild/>
    </div>
</template>

<script>
    export default {
        name: "ContentView"
    }
</script>

<style scoped>
  .content-component {
    background-color: #F5F5F5;
    padding: 4%;
  }
</style>
