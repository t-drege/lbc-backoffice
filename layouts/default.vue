<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="px-0 col-md-2 fixed-top h-100">
        <SideBar/>
      </div>
      <div class="px-0 col-md-10 offset-2">
        <Header/>
        <Nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "../components/Body/Header";
  import SideBar from "../components/Body/SideBar";

  export default {
    name: "default",
    components: {SideBar, Header}
  }
</script>

<style scoped>

</style>
