<template>
  <div class="header-lbc bg-white shadow-sm">
    <div class="container-fluid pt-4">
      <div class="row">
        <div class="col-6">
          <h2 class="fw-bold mt-2 ml-5">{{this.title}}</h2>
        </div>
        <div class="col-6 my-auto d-flex justify-content-end pr-3">
          <b-dropdown id="dropdown" class="mr-5">
            <template v-slot:button-content>
              <font-awesome-icon :icon="'user-circle'" class="mx-1"/> Compte
            </template>
            <b-dropdown-item>First Action</b-dropdown-item>
            <b-dropdown-item>Second Action</b-dropdown-item>
            <b-dropdown-item @click="logout" >Se déconnecter</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        title: "Accueil"
      }
    },
    mounted() {
      let self = this
      this.$root.$on("receivedName", function (name) {
        self.title = name.toString()
      })
    },
    methods: {
      logout: function () {
        localStorage.removeItem('token')
        localStorage.removeItem('refreshToken')
        //router.push('/')
      }
    }
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Quicksand');

  .header-lbc {
    height: 102px;
  }
</style>
