<!-- Cadastro de Cliente -->
<template>
  <div class="main_create_customer" id="">
    <div class="main_create_customer_content content">
      <h1>Cadastrar Cliente</h1>

      <div class="main_create_customer_content_form">
        <form class="flex" @submit.prevent="" method="post">
          <div class="flex-1">
            <label>Nome:</label>
            <input class="transition radius" type="text" value="" v-model.lazy="customer.customer_name" placeholder="Informe o nome do cliente" required />
          </div>

          <div class="flex-1">
            <label>CPF:</label>
            <input class="transition radius cpf" type="text" v-mask="'###.###.###-##'" v-model.lazy="customer.customer_cpf" placeholder="Informe o cpf do cliente" required />
          </div>

          <div class="flex-1">
            <label>Endereço:</label>
            <input class="transition radius" type="text" value="" v-model.lazy="customer.customer_address" placeholder="Informe o endereço do cliente" required />
          </div>

          <div class="flex-1">
            <label>CEP:</label>
            <input class="transition radius cep" type="text" v-mask="'#####-###'" v-model.lazy="customer.customer_cep" placeholder="Informe o cep do cliente" required />
          </div>

          <div class="flex-1">
            <button class="btn btn-green transition radius" type="button" name="button" alt="[Cadastrar Cliente]" title="Cadastrar Cliente" v-on:click.prevent="post">Cadastrar Cliente</button>
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
      service: 'http://localhost:8000/api/customers',
      endPoint: '',
      customer: {
        customer_name: '',
        customer_cpf: '',
        customer_address: '',
        customer_cep: ''
      }
    }
  },
  methods: {
    post: function () {
      this.customer.customer_cpf = this.customer.customer_cpf.replace(/[^\d]+/g,'')
      this.customer.customer_cep = this.customer.customer_cep.replace(/[^\d]+/g,'')
      this.$http.post(this.service, this.customer).then(response => {
        if (response.body.success) {
          alert('Usuário inserido com sucesso!!');
          this.$router.push({name: 'ReadCustomers'})
        }
      })
    },
  }
}
</script>
