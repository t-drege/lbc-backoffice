<template>
  <div class="container">
    <SubHeaderButtons :buttonsRight="buttonsRight"/>
    <div class="container card py-3 mt-4">
      <div class="row justify-content-center">
        <client-only>
          <ImageCard class="col-sm-auto" v-for="newspaper in newspapers" :element-id="newspaper.id"
                     :imageUrl="(newspaper.media) ? `${images}${newspaper.media.name}` : require('@/static/no-image.png')"
                     :title="`LBC ${newspaper.number}`"
                     :description="newspaper.principalTheme"
                     :date="(newspaper.publishedAt) ? $moment(new Date(newspaper.publishedAt).toISOString().slice(0, 19).replace('T', ' ')).format('DD MMMM YYYY') : 'date de publication à venir'"
                     :icon-buttons="iconButtons"
                     :newspaper-status="newspaper.newspaperStatus.value"
                     :newspaper-status-id="newspaper.newspaperStatus.id"
                     :elements-right="elementsRight"
                     :author="`${newspaper.User.lastname} ${newspaper.User.firstname}`"/>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
  import SubHeaderButtons from "@/components/SubHeader/SubHeaderButtons";
  import ButtonCallModal from "@/components/Button/ButtonCallModal";
  import IconButtonModal from "~/components/Icon/IconButtonModal";
  import Create from "@/components/Modal/Newspaper/Create";
  import ImageCard from "@/components/Image/ImageCard";
  import IconLink from "@/components/Icon/IconLink";
  import TextInfo from "@/components/Text/TextInfo";
  import axios from "@/plugins/axios";
  import ButtonNavigationImage from "../../../components/Button/ButtonNavigationImage";
  import ButtonNavigation from "@/components/Button/ButtonNavigation";
  /*if (process.browser) {
   Editor = require('@/plugins/ckeditor5/build/ckeditor')
  }*/
  export default {
    name: "theme",
    components: {ImageCard, SubHeaderButtons},
    data() {
      return {
        newspapers: [],
        page: 1,
        limit: 10,
        buttonsRight: [],
        buttonsLeft: [],
        iconButtons: [],
        elementsRight: [],
        images: (process.client) ? process.env.URL_IMAGE : null
      }
    },
    mounted() {
      this.getSubButtons();
      this.getIconButtons();
      this.getElementsRight()
      this.getListNewspaper()
    },
    methods: {
      getListNewspaper: function () {
        const self = this;
        axios.get(`/newspapers?page=${this.page}&limit=${this.limit}`).then(function (response) {
          self.newspapers = response.data.rows
        })
      },
      getSubButtons: function () {
        this.buttonsRight.push(
          {
            component: ButtonNavigation,
            props: {
              text: "Ajouter Journal",
              rights: true,
              colorBackground: 'bg-primary',
              url:'/journaux/creer'
            }
          })
      },
      getIconButtons: function () {
        this.iconButtons.push({
            component: IconLink,
            props: {
              icon: 'train',
              color: 'text-secondary',
              rights: true,
              url: '/journaux/:id/chemin-de-fer'
            }
          }, {
            component: IconButtonModal,
            props: {
              modalId: 'modal-delete-newspaper',
              icon: 'pen',
              color: 'text-secondary',
              rights: true
            }
          },
          {
            component: IconButtonModal,
            props: {
              modalId: 'modal-edit-newspaper',
              icon: 'trash',
              color: 'text-danger',
              rights: true
            }
          })
      },
      getElementsRight: function () {
        this.elementsRight.push({
          component: TextInfo,
          props: {
            text: 'publié',
            hasValuesCompare: true,
            valuesCompare: [
              {
                'id': 1,
                'color': 'text-danger'
              }, {
                'id': 2,
                'color': 'text-primary'
              }, {
                'id': 3,
                'color': 'text-success'
              }
            ],
            color: 'text-danger',
            rights: true,
          }
        })
      },
    }
  }
</script>

<style scoped>
  .content {
    width: 50%;
  }
</style>

<router>
  {
  path: '/newspapers',
  alias: [
  '/journaux'
  ]
  }
</router>

/*await Editor.create(document.querySelector('#editor'), {
wordCount: {
onUpdate: stats => {
console.log(`Characters: ${stats.characters}`);
}
},
})*/
