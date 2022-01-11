<template>
  <div>{{newspaper.id}}</div>
</template>

<script>
export default {
  name: "index",
  data () {
    return {
      newspaper: this.$route.params.newspaper
    }
  },
  mounted() {
    console.log(this.newspaper)
  }
}
</script>

<style scoped>

</style>
