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
                            <option v-for="evento in events" v-bind:value="evento.customer_id">{{ evento.event_local }}</option>
                        </select>
                        <button class="btn btn-yellow transition radius" v-on:click.prevent="getEventCustomer" alt="[Buscar]" title="Buscar">Buscar</button>
                    </div>
                </form>
            </div>

            <!-- release Table -->
            <div class="main_release_content_table flex">
                <div class="flex-1">
                    <div class="trigger trigger-success radius icon-success" v-if="this.trigger_success != ''">{{ trigger_success }}</div>
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
                        <tbody v-if="">
                            <tr v-for="release in releases">
                                <td>{{ release.customer_id }}</td>
                                <td>{{ release.customer_name }}</td>
                                <td>{{ release.event_name }}</td>
                                <td>{{ release.event_quant_mesas }}</td>
                                <td><i class="icon-pencil" title="Editar"></i></td>
                                <td><i class="icon-trash" title="Excluir"></i></td>
                                <td>
                                    <span class="btn btn-green radius transition" title="Lançar Mesas" v-on:click="showModal(release.event_id)">Lançar</span>
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
                    <div class="trigger trigger-info radius icon-info" v-if="this.trigger_info != ''">{{ trigger_info }}</div>
                    <form @submit.prevent="" method="post">
                        <!-- <input class="radius" type="email" placeholder="" /> -->
                        <!-- <label>Cliente: {{ events.name }}</label> -->
                        <input class="radius" type="number" min="1" placeholder="Quantidade: (somente números)" v-model.lazy="table.table_quant"  required />
                        <button class="btn btn-green transition radius icon-success" alt="[Cadastrar]" title="Cadastrar" v-on:click="postTables">Cadastrar</button>
                        <span class="btn btn-red radius transition" title="Fechar Modal" v-on:click="showModal">Close</span>
                    </form>
                </div>
            </div>
        </div>

    </div>

</template>

<script>

export default {

    data() {
        return {
            service: 'http://localhost:8000/api',
            endPoint: '',
            selected: '',
            events: {},
            releases: {},
            isModal: true,
            table: {
                customer_id: '',
                event_quant_mesas: '',
                table_quant: ''
            },
            trigger_success: '',
            trigger_info: ''
            //submitted: false
        }
    },
    methods: {
        getEvents: function () {
            this.endPoint = '/release-tables';
            const url = this.service + this.endPoint;

            this.$http.get(url).then(response => {
                this.events = response.body;
                //console.log(response);
            }, response => {
                //console.log(response);
            });
        },
        getEventCustomer: function () {
            this.endPoint = '/release-tables/' + this.selected;
            const url = this.service + this.endPoint;

            this.$http.get(url).then(response => {
                //console.log(response);
                this.releases = response.body;
            }, response => {

            });
        },
        postTables: function () {
            this.endPoint = '/release-tables';
            const url = this.service + this.endPoint;

            if (this.table.table_quant > this.table.table_quant_mesas) {
                this.trigger_info = 'Indisponível, total disponível no momento: ' + this.table.table_quant_mesas;
                this.table.table_quant = '';

            } else {
                this.$http.post(url, this.table).then(response => {
                    console.log(response);
                    this.releases = response.body;
                    this.trigger_success = response.body.success;
                    this.showModal();
                });
            }
        },
        getEventQuantTable: function (event_id) {
            this.endPoint = '/events-quant-tables/' + event_id;
            const url = this.service + this.endPoint;

            this.$http.get(url).then(response => {
                this.table.table_quant_mesas = response.body[0].event_quant_mesas;
            });
        },
        showModal: function (customer_id) {
            this.isModal = !this.isModal;
            this.table.customer_id = customer_id;
            this.getEventQuantTable(customer_id);
        },
    },
    created() {
        this.getEvents();
    }
}
</script>
