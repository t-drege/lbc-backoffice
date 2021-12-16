<template>
  <ContentView/>
</template>
<script lang="ts">

  import Vue from 'vue'
  import ContentView from "~/components/Body/ContentView.vue";

  export default Vue.extend({
    name: 'IndexPage',
    components: {ContentView},
    layout: ({isMobile}) => isMobile ? 'mobile' : 'default',
  })
</script>

<style>
  body {
    background-color: #F5F5F5;
    height: 100vh;
  }
</style>
