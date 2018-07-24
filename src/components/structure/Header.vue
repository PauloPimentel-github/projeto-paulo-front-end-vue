<!-- Header (cabeçalho) -->
<template>
    <div class="main_header" id="">

        <div class="main_header_content content flex">
            <div class="flex-2">
                <router-link class="transition radius" to="/" exact>
                    <!-- <img class="main_header_content_img" src="../../assets/img/logo.png" alt="[Vue.js 2]" title="Vue.js 2" /> -->
                </router-link>
            </div>
            <div class="flex-2">
                <ul class="main_header_content_ul">
                    <!-- <li>
                        <router-link class="transition radius" to="/" exact>Home</router-link>
                    </li> -->
                    <li class="transition radius">
                        <router-link class="transition radius" to="/create-customer" exact>Cadastrar Cliente <i class="icon-user-add"></i> </router-link>
                    </li>
                    <li class="transition radius">
                        <router-link class="transition radius" to="/create-event" exact>Cadastrar Evento</router-link>
                    </li>
                    <li class="transition radius">
                        <router-link class="transition radius" to="/release-table" exact>Lançamento Mesas</router-link>
                    </li>
                    <li class="transition radius">
                        <router-link class="transition radius" to="/report-table" exact>Relatório Mesas</router-link>
                    </li>
                    <li class="transition radius">
                        <router-link class="transition radius" to="/google-maps" exact>Maps</router-link>
                    </li>

                </ul>
            </div>
        </div>

    </div>
</template>
<script>

export default {
    name: "",
    data: () => ({

    })
}
</script>
