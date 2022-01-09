<template>
  <div class="container-fluid bd-highlight rounded-3 bg-white card p-3">
    <div class="row px-2">
      <div class="col-sm-6">
        <div v-for="buttonLeft in buttonsLeft">
          <component :is="buttonLeft.component" v-bind="buttonLeft.props"/>
        </div>
      </div>
      <div class="col-sm-6 d-flex justify-content-end">
      <div v-for="buttonRight in buttonsRight">
        <component :is="buttonRight.component" v-bind="buttonRight.props"/>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SubHeaderButtons",
    props: {
      buttonsRight: Array,
      buttonsLeft: Array
    },
  }
</script>

<style scoped>

</style>
