<!-- Cadastro de Evento -->
<template>
  <div class="main_create_event" id="">
    <div class="main_create_event_content content">
      <h1>Cadastrar Evento</h1>
      <div class="trigger trigger-success radius icon-success" v-if="this.triggerSuccess != ''">{{ triggerSuccess }}</div>

      <div class="main_create_event_content_form">
        <form class="flex" method="post" @submit.prevent="">
          <div class="flex-1">
              <label>Selecione o Cliente</label>
              <select v-model="selected">
                <option disabled value="">Selecione o local do evento</option>
                <option v-for="customer in customers" v-bind:value="customer.customer_id" :key="customer.id">{{ customer.customer_name }}</option>
              </select>
          </div>
          <div class="flex-1">
            <label>Nome do Evento:</label>
            <input class="transition radius" type="text" value="" v-model.lazy="evento.event_name" placeholder="Informe o nome do evento" required />
          </div>

          <div class="flex-1">
            <label>Informe o local do evento:</label>
            <input class="transition radius" type="text" value="" v-model.lazy="evento.event_local" placeholder="Informe o local do evento" required />
          </div>

          <div class="flex-1">
            <label>Informe da data do evento:</label>
            <input class="transition radius" type="text" v-mask="'####-##-##'" v-model.lazy="evento.event_date" placeholder="Informe a data do evento" required />
          </div>

          <div class="flex-1">
            <label>Informe a quantidade de mesas:</label>
            <input class="transition radius" type="number" value="" v-model.lazy="evento.event_quant_mesas" placeholder="Informe a quantidade de mesas (apenas números)" required />
          </div>

          <div class="flex-1">
            <button class="btn btn-green transition radius" type="button" name="button" alt="[Cadastrar Evento]" title="Cadastrar Evento" v-on:click="post">Cadastrar Evento</button>
          </div>
        </form>
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
      triggerSuccess: '',
      customers: {},
      evento: {
        customer_id: '',
        event_name: '',
        event_local: '',
        event_date: '',
        event_quant_mesas: ''
      }
    }
  },
  methods: {
    get: function () {
      this.endPoint = '/customers'
      this.$http.get(this.service + this.endPoint, this.evento).then(response => {
        if (response.body) {
          this.customers = response.body
        }
      })
    },
    post: function () {
      this.endPoint = '/events'
      this.evento.customer_id = this.selected
      this.$http.post(this.service + this.endPoint, this.evento).then(response => {
        if (this.response.body.success) {
          this.triggerSuccess = this.response.body.success
        }
      })
    }
  },
  created () {
    this.get()
  }
}
</script>
