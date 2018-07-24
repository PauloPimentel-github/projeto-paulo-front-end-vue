<!-- Cadastro de Cliente -->
<template>
  <div class="main_create_customer" id="">
    <div class="main_create_customer_content content">
      <h1>Clientes Cadastrados</h1>
      <div class="trigger trigger-success radius icon-success" v-if="this.triggerSuccess != ''">{{ triggerSuccess }}</div>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Endereço</th>
            <td>Editar</td>
            <td>Excluir</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in customers" :key="customer.id">
            <td>{{ customer.customer_id }}</td>
            <td>{{ customer.customer_name }}</td>
            <td>{{ customer.customer_address }}</td>
            <td> <router-link class="btn btn-green radius transition" :to="`/customers/edit-customer/${customer.customer_id}`" exact>Editar</router-link> </td>
            <td><span class="btn btn-red radius transition" title="Excluir" v-on:click="deleteCustomer(customer.customer_id)">Excluir</span></td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>
<script>

export default {

  data () {
    return {
      service: 'https://projeto-paulo-back-end.herokuapp.com/api',
      endPoint: '/customers',
      triggerSuccess: '',
      customers: {},
      customer: {
        customer_id: '',
        customer_name: '',
        customer_cpf: '',
        customer_address: '',
        customer_cep: ''
      }
    }
  },
  methods: {
    get: function () {
      this.$http.get(this.service + this.endPoint).then(response => {
        if (response.body) {
          this.customers = response.body
        }
      })
    },
    deleteCustomer: function (customerId) {
      const url = this.service + this.endPoint + '/' + customerId
      this.$http.delete(url).then(response => {
        this.triggerSuccess = response.body.success
        alert('Sucesso ao deletar');
        this.get()
      })
    }
  },
  created () {
    this.get()
  },

}
</script>
