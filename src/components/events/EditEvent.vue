<!-- Cadastro de Evento -->
<template>
  <div class="main_create_event" id="">
    <div class="main_create_event_content content">
      <h1>Editar Evento (em desenvolvimento)</h1>
      <div class="trigger trigger-success radius icon-success" v-if="this.triggerSuccess != ''">{{ triggerSuccess }}</div>

      <div class="main_create_event_content_form">
        <form class="flex" method="post" @submit.prevent="">
          <div class="flex-1">
            <label>Selecione o Cliente</label>
            <select v-model="selected">
              <option disabled value="">Selecione o local do evento</option>
              <option v-for="customer in customers" :key="customer.id" v-bind:value="customer.customer_id">{{ customer.customer_name }}</option>
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
            <input class="transition radius" type="text" v-mask="'####-##-##'" v-model.lazy="evento.event_date" placeholder="Informe a data do evento (2018-07-24)" required />
          </div>

          <div class="flex-1">
            <label>Informe a quantidade de mesas:</label>
            <input class="transition radius" type="number" value="" v-model.lazy="evento.event_quant_mesas" placeholder="Informe a quantidade de mesas (apenas números)" required />
          </div>

          <div class="flex-1">
            <button class="btn btn-green transition radius" type="button" name="button" alt="[Editar Evento]" title="Editar Evento" v-on:click="put">Cadastrar Evento</button>
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
      this.endPoint = '/customers';
      this.$http.get(this.service + this.endPoint, this.evento).then(response => {
        if (response.body) {
          this.customers = response.body
        }
      })
    },
    put: function () {
      this.endPoint = '/events/' + this.selected
      this.evento.customer_id = this.selected
      this.$http.put(this.service + this.endPoint, this.evento).then(response => {
        if (response.body.success) {
          this.triggerSuccess = response.body.success
        }
      })
    }
  },
  created () {
    this.get()
  }
}
</script>
