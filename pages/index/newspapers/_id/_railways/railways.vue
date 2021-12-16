<template>
  <div class="container py-5">
    <Table :exclude="exclude"
           :headers="headers"
           :datas="datas"
           :has-actions="true"
           :icon-buttons="iconButtons"
           :draggable="true"/>
  </div>
</template>

<script>
  import Table from "@/components/Table/Table";
  import IconLink from "@/components/Icon/IconLink";
  import IconButtonModal from "@/components/Icon/IconButtonModal";
  export default {
    name: "railways",
    components: {Table},
    data() {
      return {
        headers: [],
        datas: [],
        iconButtons:[],
        exclude:[]
      }
    },
    mounted() {
      this.getHeaders()
      this.getIconButtons()
      this.getExcluded()
    },
    methods: {
      getHeaders: function () {
        this.headers = ['titile', 'test', 'super']
        this.datas = [{
          "id": 'thomas',
          "username": 'td',
          'sf': 'sfq'
        }, {
          "name": 'thomas',
          "username": 'td',
          'sdfsdf': 'sfdqsdfqs'
        }]
      },
      getIconButtons: function () {
        this.iconButtons.push({
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
      getExcluded: function () {
          this.exclude = [
            'id'
          ]
      }
    }
  }
</script>

<style scoped>

</style>

<router>
  {
  path: '/newspapers/:id/railways',
  alias: [
  '/journaux/:id/chemin-de-fer'
  ]
  }
</router>
