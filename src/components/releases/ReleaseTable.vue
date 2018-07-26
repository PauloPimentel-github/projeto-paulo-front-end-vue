<!-- Releases (lançamento de mesas) -->
<template>
  <div class="main_release" id="">
    <div class="main_release_content content">
      <h1>Lançamento de mesas</h1>

      <div class="main_release_content_form">
        <form class="flex" @submit.prevent="" method="post">
          <div class="flex-1">
            <label>Selecione o local do evento</label>
            <select v-model="selected">
              <option disabled value="">Selecione o local do evento</option>
              <option v-for="evento in events" :key="evento.id" v-bind:value="evento.customer_id">{{ evento.event_local }}</option>
            </select>
            <button class="btn btn-green transition radius" v-bind:style="{ backgroundColor: activeColor }" :disabled="isDisabled(this.selected)" v-on:click.prevent="getEventCustomer" alt="[Buscar]" title="Buscar">Buscar</button>
          </div>
        </form>
      </div>

      <!-- release Table -->
      <div class="main_release_content_table flex">
        <div class="flex-1">
          <div class="trigger trigger-success radius icon-success" v-if="this.triggerSuccess != ''">{{ triggerSuccess }}</div>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Cliente</th>
                <th>Evento</th>
                <th>Mesas</th>
                <th>Editar</th>
                <th>Excluir</th>
                <th>Lançar Mesas</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="release in releases" :key="release.id">
                <td>{{ release.customer_id }}</td>
                <td>{{ release.customer_name }}</td>
                <td>{{ release.event_name }}</td>
                <td>{{ release.event_quant_mesas }}</td>
                <td><button class="btn btn-green transition radius" title="Editar">Editar</button></td>
                <td><button class="btn btn-red transition radius" title="Excluir">Excluir</button></td>
                <td>
                  <span class="btn btn-yellow radius transition" title="Lançar Mesas" v-on:click="showModal(release.event_id)">Lançar</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>

    <!-- MODAL RELEASE TABLE -->
    <div v-bind:class="{ modal: isModal }">
      <div class="box_modal">

        <div class="box_modal_content radius">
          <header>
            <h1>Lançar Mesas</h1>
            <p>Informe a quantida de mesas que deseja lançar.</p>
          </header>
          <div class="trigger trigger-info radius icon-info" v-if="this.triggerInfo != ''">{{ triggerInfo }}</div>
          <form @submit.prevent="" method="post">
            <input class="radius" type="number" min="1" placeholder="Quantidade: (somente números)" v-model.lazy="table.table_quant"  required />
            <button class="btn btn-green transition radius icon-success" alt="[Cadastrar]" title="Cadastrar" v-on:click="postTables">Cadastrar</button>
            <span class="btn btn-red radius transition" title="Fechar Modal" v-on:click="closeModal">Close</span>
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
      endPoint: '',
      selected: '',
      activeColor: 'red',
      events: {},
      releases: {},
      isModal: true,
      table: {
        customer_id: '',
        event_quant_mesas: '',
        table_quant: ''
      },
      triggerSuccess: '',
      triggerInfo: ''
    }
  },
  methods: {
    isDisabled: function (selected) {
      selected = (selected == '' ? true : false)
      this.activeColor = (selected === true ? 'rgba(0,0,0,0.3)' : '')
      return selected
    },
    getEvents: function () {
      this.endPoint = '/release-tables'
      const url = this.service + this.endPoint
      this.$http.get(url).then(response => {
        this.events = response.body
      })
    },
    getEventCustomer: function () {
      this.endPoint = '/release-tables/' + this.selected
      const url = this.service + this.endPoint
      this.$http.get(url).then(response => {
        this.releases = response.body
      })
    },
    postTables: function () {
      this.endPoint = '/release-tables'
      const url = this.service + this.endPoint
      if (this.table.table_quant > this.table.event_quant_mesas) {
        this.triggerInfo = 'Indisponível, total disponível no momento: ' + this.table.event_quant_mesas
        this.table.table_quant = ''
      } else {
        this.$http.post(url, this.table).then(response => {
          this.releases = response.body
          this.triggerSuccess = response.body.success
          this.showModal()
        })
      }
    },
    getEventQuantTable: function (eventId) {
      this.endPoint = '/events-quant-tables/' + eventId
      const url = this.service + this.endPoint
      this.$http.get(url).then(response => {
        this.table.event_quant_mesas = response.body[0].event_quant_mesas
      })
    },
    showModal: function (customerId) {
      this.isModal = !this.isModal
      this.table.customer_id = customerId
      this.getEventQuantTable(customerId)
    },
    closeModal: function () {
      this.isModal = !this.isModal
    }
  },
  created () {
    this.isDisabled()
    this.getEvents()
  }
}
</script>
