<template>
  <div>
    <button v-if="getRigths" class="btn btn-primary" @click="$bvModal.show(modalId)">{{ this.title }}</button>
    <ModalBase :id="modalId"
               :header-title="modalTitle"
               :component="modalTarget"
               :title-validation="modalValidationButton"
               :title-cancel="modalCancelButton"
               :color-validation="modalColorValidation"
               :color-cancel="modalColorCancel"/>
  </div>
</template>

<script>
import ModalBase from "../Modal/ModalBase";

export default {
  name: "ButtonCallModal",
  components: {ModalBase},
  props: {
    modalId: String,
    title: String,
    rights: Boolean,
    modalTarget: Object,
    modalTitle: String,
    modalValidationButton: String,
    modalCancelButton: String,
    modalColorValidation: String,
    modalColorCancel: String
  },
  methods: {
    getRigths: function () {
      this.rights = true;
    }
  }
}
</script>

<style scoped>

</style>
