<template>
  <div class="p-0">
    <b-button class="btn btn-primary d-inline" @click="$refs.file.click()" v-text="'Télécharger'">
      <input hidden type="file" name="file" class="form-control" ref="file" @change="getFilePath"/>
    </b-button>
    <b-button v-if="image!=null" class="btn btn-danger d-inline" @click="removeFile" v-text="'Retirer'">
      <input hidden type="file" name="file" class="form-control" ref="file" @change="getFilePath"/>
    </b-button>
    <div v-if="image == null">
      <div class="w-50 h-75 my-3 rounded border border-secondary text-center text-secondary">
        {{ text }}
      </div>
    </div>
    <div class="content-img" v-if="image != null">
      <img class="img-thumbnail my-3" :src="image" alt="image-upload"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "FileImage",
  props: {
    text: String,
    isRequired:Boolean
  },
  data() {
    return {
      image: null,
      file:null
    }
  },
  methods: {
    getFilePath(event) {
      this.file = event.target.files[0]
      this.image = URL.createObjectURL(event.target.files[0])
    },
    removeFile() {
      this.image = null
    },
    isValid() {

    }
  }
}
</script>

<style scoped>
.content-img {
  max-width: 300px;
}
</style>
