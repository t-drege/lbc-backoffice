<template>
  <div>
    <button v-if="getRigths" class="btn btn-primary" @click="$bvModal.show(modalId)">{{ this.title }}</button>
  </div>
</template>

<script>
    export default {
        name: "ButtonNavigation"
    }
</script>

<style scoped>

</style>
