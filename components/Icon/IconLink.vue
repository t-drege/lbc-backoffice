<template>
  <div>
    <NuxtLink v-b-tooltip.hover
              href="javascript:"
              :title="tooltip"
              :class="[color]"
              :disabled="this.rights !== true"
              :style="{ opacity: this.rights ? 1 : 0.5, 'pointer-events': this.rights ? '' : 'none' }"
              :to="urlBuilded">
      <font-awesome-icon :icon="icon"/>
    </NuxtLink>
  </div>
</template>

<script>
  import ReplaceParamsUrlLink from "../../utils/ReplaceParamsUrlLink";

  export default {
    name: "IconLink",
    props: {
      elementId: Number,
      tooltip: String,
      color: String,
      icon: String,
      rights: Boolean,
      url: String,
      parameters: Object,
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
        return ReplaceParamsUrlLink.execute(url, this.parameters)
      }
    },
  }
</script>

<style scoped>
  .tooltip {
    top: 0;
  }
</style>
