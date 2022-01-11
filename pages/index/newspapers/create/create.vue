<template>
  <div class="container">
    <SubHeaderButtons :buttonsLeft="buttonsLeft"/>
    <div class="card p-4 mt-4 ju">
      <div class="row justify-content-center">
        <div class="title-form mb-4 w-50 font-weight-bold">AJOUTER UN JOURNAL</div>
      </div>
      <div class="row justify-content-center">
        <form class="w-50" @submit.prevent="validation">
          <div class="form-group">
            <InputNumber :placeholder="'Numéro du journal (ex: 49)'" :size="'lg'" ref="number"
                         :error="'Veuillez ajouter un numéro au journal'" :is-required="true"/>
          </div>
          <div class="form-group">
            <InputText :placeholder="'Dossier'" :size="'lg'" :is-required="true" ref="principalTheme"/>
          </div>
          <div class="form-group">
            <InputText :placeholder="'Nom du dépot de fichier nextcloud (ex : LBC 36)'" :size="'lg'" ref="folderUpload"
                       :is-required="true"/>
          </div>
          <div class="form-group">
            <SelectForm :value="statusSelected" :models="modelSelect" :is-required="false"
                        ref="newspaperStatusId"/>
          </div>
          <FileImage :text="'Pas d\'image téléchargée'" :is-required="false" ref="file"/>
          <hr>
          <div class="row justify-content-end mr-0 mt-4">
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
import FileImage from "@/components/File/FileImage";
import axios from "@/plugins/axios";
import CheckElementForm from "@/utils/CheckElementForm";
import SelectForm from "@/components/Select/SelectForm";

const NOT_BEGINNING_STATUS = 1
export default {
  name: "create",
  comments: [SelectForm, SubHeaderButtons, InputText, InputNumber, FileImage],
  data() {
    return {
      buttonsLeft: [],
      file: null,
      image: null,
      modelSelect: [],
      statusSelected: NOT_BEGINNING_STATUS,
    }
  },
  mounted() {
    this.getAllNewspapersStatus()
    this.addButtonsLeft()
  },
  methods: {
    addButtonsLeft() {
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
    getAllNewspapersStatus() {
      axios.get('/newspapers-status').then((result) => this.modelSelect = result.data)
    },
    validation() {
      console.log( this.$refs.newspaperStatusId)
      if (!CheckElementForm.execute(this.$refs).includes(false)) {
        this.createNewspaper()
      }
    },
    createNewspaper() {

      const form = new FormData()
      form.append('number', this.$refs.number.text)
      form.append('principalTheme', this.$refs.principalTheme.text)
      form.append('folderUpload', this.$refs.folderUpload.text)
      form.append('newspaperStatusId', this.$refs.newspaperStatusId.value)
      form.append('file', this.$refs.file.file)
      axios.post('/newspapers', form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
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
