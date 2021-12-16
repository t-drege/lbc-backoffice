<template>
  <div class="d-flex flex-column p-3 side-menu">
    <ul class="nav nav-pills flex-column mx-2 mt-4 p-2">
      <span class="title text-center">
        <img src="@/static/le-bien-commun.png" width="180px">
      </span>
    </ul>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">

      <ButtonSideBar v-for="(item, index) in items" :key="item.category" :name="item.category" :url="item.path"
                     :index="index" :current-index="indexButton" :icon="item.icon"
                     @receivedIndex="ReceivedIndexMessage(index)"/>
    </ul>
  </div>
</template>

<script>
  import ButtonSideBar from "@/components/Button/ButtonSideBar";

  export default {
    name: "SideMenuComponent",
    components: {ButtonSideBar},
    fontawesome: {
      icons: {
        solid: ['faHome'],

      }
    },
    data() {
      return {
        indexButton: 0,
        items: [
          {category: 'Accueil', path: "/accueil", icon: "home"},
          {category: 'Journaux', path: "/journaux", icon: "newspaper"},
          {category: 'Articles', path: "/articles", icon: 'feather-alt'},
          {category: 'Produits', path: "/produits", icon: 'cart-arrow-down'},
          {category: 'Propositions', path: "/propositions", icon: 'box-open'},
          {category: 'Utilisateurs', path: "/utilisateurs", icon: 'users'},
        ]
      }
    },
    methods: {
      ReceivedIndexMessage(index) {
        this.indexButton = index
      }
    },
    created() {
      // library.add({faUsers, faHome, faNewspaper, faBoxOpen})
      let self = this;
      this.items.forEach(function (item, index) {
        let path = '/' + self.$route.fullPath.split('/')[1]
        if (item.path === path) {
          self.indexButton = index
        }
      })
    }
  }
</script>

<style type="scss" scoped>

  .side-menu {
    height: 100%;
    background-color: #152238;
    padding: 0 !important;
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    overflow-x: hidden; /* Disable horizontal scroll */
  }

  .title {
    top: 100%;
    max-width: 100%;
    max-height: 50%;
  }

  .container-title {
    height: 80px;
  }

  hr { display: block;
    height: 1px;
    border: 0;
    border-top: 1px
    solid #ccc;
    margin: 1em 0;
    padding: 0; }

</style>
