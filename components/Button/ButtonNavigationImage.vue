<template>
  <div>
    <NuxtLink href="javascript:"
              tag="img"
              :src="require('@/static/'+imageUrl+'')"
              :class="[color]"
              :disabled="this.rights !== true"
              :style="{ opacity: this.rights ? 1 : 0.5, 'pointer-events': this.rights ? '' : 'none', width:'40px' }"
              :to="urlBuilded">
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
      imageUrl: String,
      parameters: Object,
      url: String,
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
