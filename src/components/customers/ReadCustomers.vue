<!-- Cadastro de Cliente -->
<template>
  <div class="main_create_customer" id="">
    <div class="main_create_customer_content content">
      <h1>Clientes Cadastrados</h1>

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
            <td><router-link class="btn btn-green radius transition" title="Editar" to="/customers/edit-customer/1" exact>Editar</router-link></td>
            <td><span class="btn btn-red radius transition" title="Excluir">Excluir</span></td>
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
      service: 'http://localhost:8000/api/customers',
      endPoint: '',
      triggerSuccess: '',
      customers: {},
      customer: {
        customer_id: 1,
        customer_name: '',
        customer_cpf: '',
        customer_address: '',
        customer_cep: ''
      }
    }
  },
  methods: {
    get: function () {
      this.$http.get(this.service).then(response => {
        if (response.body) {
          this.customers = response.body
        }
      })
    }
  },
  created () {
    this.get()
  }
}
</script>
