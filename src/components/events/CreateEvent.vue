<!-- Cadastro de Evento -->
<template>
    <div class="main_create_event" id="">
        <div class="main_create_event_content content">
            <h1>Cadastrar Evento</h1>

            <div class="main_create_event_content_form">
                <form class="flex" method="post" @submit.prevent="">
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
                        <input class="transition radius" type="text" v-mask="'##/##/####'" v-model.lazy="evento.event_date" placeholder="Informe a data do evento" required />
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

    data() {
        return {
            evento: {
                customer_id: 1,
                event_name: '',
                event_local: '',
                event_date: '',
                event_quant_mesas: ''
            }
        }
    },
    methods: {
        post: function () {
            const service = 'http://localhost:8000/api/events';

            this.$http.post(service, this.evento).then(response => {
                console.log(response);
            }, response => {
                //error callback
            });
        }
    }
}
</script>
