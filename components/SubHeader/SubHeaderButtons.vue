<template>
  <div class="d-flex flex-row-reverse bd-highlight rounded-3 bg-white shadow-sm p-3">
    <div v-for="button in buttons">
      <component :is="button.component" v-bind="button.props"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SubHeaderButtons",
    props: {
      buttons: Array
    },
  }
</script>

<style scoped>

</style>
