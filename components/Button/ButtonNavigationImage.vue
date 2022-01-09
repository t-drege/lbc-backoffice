<template>
  <div>
    <NuxtLink href="javascript:"
              :class="[color, size]"
              :disabled="this.rights !== true"
              :style="{ opacity: this.rights ? 1 : 0.5, 'pointer-events': this.rights ? '' : 'none'}"
              :to="urlBuilded">
      <font-awesome-icon :icon="icon"/>
    </NuxtLink>
  </div>
</template>

<script>
  import ReplaceParamsUrlLink from "@/utils/ReplaceParamsUrlLink";

  export default {
    name: "ButtonNavigationImage",
    props: {
      color: String,
      rights: Boolean,
      icon: String,
      parameters: Object,
      url: String,
      text: String,
      size:String
    },
    data() {
      return {
        urlBuilded: ''
      }
    },
    mounted() {
      this.getRigths()
      this.urlBuilded = this.getUrl()
    },
    methods: {
      getRigths: function () {
        this.rights = true;
      },
      getUrl: function () {
        let url = this.url;
        if (this.parameters != null) {
          return ReplaceParamsUrlLink.execute(url, this.parameters)
        } else {
          return url
        }
      }
    },
  }
</script>


<style scoped>

</style>
