<template>
  <div class="container-fluid">
    <SubHeaderButtons :buttonsLeft="buttonsLeft"/>
    <div class="card p-4 mt-4 ju">
      <div class="row justify-content-center">
        <div class="title-form mb-4 w-75 font-weight-bold">AJOUTER UN JOURNAL</div>
      </div>
      <div class="row justify-content-center">
        <form class="w-75">
          <div class="form-group">
            <InputNumber :placeholder="'Numéro du journal (ex: 49)'" :size="'lg'" ref="lastname"/>
          </div>
          <div class="form-group">
            <InputText :is-required="true" :placeholder="'Dossier'" :size="'lg'" ref="name"/>
          </div>
          <div class="form-group">
            <InputText :placeholder="'Prénom'" :size="'lg'" ref="lastname"/>
          </div>
          <div class="form-group">
            <InputText :placeholder="'Prénom'" :size="'lg'" ref="lastname"/>
          </div>
          <div class="form-group">
            <div class="row p-3">
              <div class="mr-2">
                <input type="file" name="file" class="form-control col-6" id="file" @change="getFilePath"/>
              </div>
              <div></div>
              <img class="img-thumbnail col-6" :src="image" alt="image-upload"/>
            </div>
          </div>
          <div class="row justify-content-end mr-0">
            <button type="submit" class="btn btn-primary">Enregistrer</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import InputText from "@/components/Input/InputText";
import SubHeaderButtons from "@/components/SubHeader/SubHeaderButtons";
import InputNumber from "@/components/Input/InputNumber";
import ButtonNavigationImage from "@/components/Button/ButtonNavigationImage";

export default {
  name: "create",
  comments: [SubHeaderButtons, InputText, InputNumber],
  data() {
    return {
      buttonsLeft: [],
      file: null,
      image: null
    }
  },
  mounted() {
    this.buttonsLeft.push({
      component: ButtonNavigationImage,
      props: {
        icon: 'arrow-left',
        size: 'fa-2x',
        color: 'text-secondary',
        rights: true,
        url: '/journaux',
        parameters: null
      }
    })
  },
  methods: {
    getFilePath(event) {
      this.file = event.target.files[0]
      this.image = URL.createObjectURL(event.target.files[0])
    }
  }
}
</script>

<style scoped>
.title-form {
  font-size: x-large;
}
</style>

<router>
{
path: '/newspapers/create',
alias: [
'journaux/creer'
]
}
</router>
