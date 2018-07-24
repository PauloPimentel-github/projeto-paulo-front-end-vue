<!-- Report (relatório de mesas) -->
<template>
  <div class="main_release" id="">
    <div class="main_report_content content">
      <h1>Relatório de mesas</h1>

      <!-- report table -->
      <div class="main_report_content_table flex">
        <div class="flex-1">
          <div class="trigger trigger-success radius icon-success" v-if="this.trigger_success != ''">{{ trigger_success }}</div>

          <table>
            <thead>
              <tr>
                <th>Nome do Cliente</th>
                <th>Quantidade de Mesas</th>
                <th>Editar</th>
                <th>Excluir</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="report in reports" :key="report.id">
                <td>{{ report.customer_name }}</td>
                <td>{{ report.table_quant }}</td>
                <td><button class="btn btn-green transition radius" title="Editar" v-on:click="showModal(report.table_id)">Editar</button></td>
                <td><button class="btn btn-red transition radius" title="Excluir" v-on:click="deleteTable(report.table_id)">Excluir</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>

    <!-- MODAL REPORT TABLE -->
    <div v-bind:class="{ modal: isModal }">
      <div class="box_modal">
        <div class="box_modal_content radius">
          <header>
            <h1>Editar Quantidade de Mesas</h1>
            <p>Informe a quantida de mesas que deseja lançar.</p>
          </header>
          <form @submit.prevent="" method="post">
            <input class="radius" type="number" min="1" placeholder="Quantidade: (somente números)" v-model.lazy="table.table_quant"  required />
            <button class="btn btn-yellow transition radius" alt="[Atualizar Mesas]" title="Atualizar Mesas" v-on:click="updateTable(table.table_id, table.table_quant)">Atualizar Mesas</button>
            <span class="btn btn-red radius transition" title="Fechar Modal" v-on:click="showModal">Close</span>
          </form>
        </div>
      </div>
    </div>

  </div>

</template>

<script>

export default {

  data () {
    return {
      service: 'https://projeto-paulo-back-end.herokuapp.com/api',
      endPoint: '/report-tables',
      reports: {},
      isModal: true,
      table: {
        table_id: '',
        table_quant: ''
      },
      trigger_success: ''
    }
  },
  methods: {
    getReportTables: function () {
      const url = this.service + this.endPoint

      this.$http.get(url).then(response => {
        this.reports = response.body
      }, response => {
      })
    },
    updateTable: function (tableId, tableQuant) {
      const url = this.service + this.endPoint + '/' + tableId

      this.$http.put(url, this.table).then(response => {
        this.getReportTables()
        this.showModal()
        this.trigger_success = response.body.success
        this.table.table_quant = ''
      })
    },
    deleteTable: function (tableId) {
      const url = this.service + this.endPoint + '/' + tableId

      this.$http.delete(url).then(response => {
        this.trigger_success = response.body.success
        this.getReportTables()
      }, response => {

      })
    },
    showModal: function (tableId) {
      this.isModal = !this.isModal
      this.table.table_id = tableId
    }
  },
  created () {
    this.getReportTables()
  }
}
</script>
