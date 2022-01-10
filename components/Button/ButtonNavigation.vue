<template>
  <NuxtLink href="javascript:"
            :class="['btn',colorText|| 'text-light', colorBackground || 'bg-primary', size]"
            :disabled="this.rights !== true"
            :style="{ opacity: this.rights ? 1 : 0.5, 'pointer-events': this.rights ? '' : 'none'}"
            :to="urlBuilded">
    {{ text }}
  </NuxtLink>
</template>

<script>
import ReplaceParamsUrlLink from "@/utils/ReplaceParamsUrlLink";

export default {
  name: "ButtonNavigation",
  props: {
    text: String,
    rights: Boolean,
    colorBackground: String,
    colorText: String,
    size: String,
    url: String,
    parameters: Object
  }, data() {
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
