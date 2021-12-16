<template>
  <div>
    <b-link v-b-tooltip.hover
            href="javascript:"
            :title="tooltip"
            :class="[color]"
            :disabled="this.rights !== true"
            :style="{ opacity: this.rights ? 1 : 0.5, 'pointer-events': this.rights ? '' : 'none' }"
            @click="$bvModal.show(modalId)">
      <font-awesome-icon :icon="icon"/>
    </b-link>
    <ModalBase :id="modalId"
               :element-id="elementId"
               :header-title="modalTitle"
               :component="modalTarget"
               :title-validation="modalValidationButton"
               :title-cancel="modalCancelButton"
               :color-validation="modalColorValidation"
               :color-cancel="modalColorCancel"/>
  </div>
</template>

<script>
export default {
  name: "IconButtonModal",
  props: {
    elementId:Number,
    tooltip: String,
    color: String,
    icon: String,
    modalId: String,
    modalTarget: Object,
    modalTitle: String,
    modalValidationButton: String,
    modalCancelButton: String,
    modalColorValidation: String,
    modalColorCancel: String
  },
  data(){
    return {
      rights: true
    }
  },
  mounted() {
    this.getRigths()
  },
  methods: {
    getRigths: function () {
     this.rights = true;
    },
  },
}
</script>

<style scoped>
.tooltip {
  top: 0;
}
</style>
