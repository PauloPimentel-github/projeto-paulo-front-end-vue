<!-- Header (cabeçalho) -->
<template>
  <header class="main_header" id="">

    <div class="main_header_content content flex">

      <div class="flex-2">
        <router-link class="transition radius" to="/" exact>
          <img class="main_header_content_img" src="../../assets/img/logo.png" width="100px" height="30px" alt="[Vue.js 2]" title="Vue.js 2" />
        </router-link>
      </div>

      <div class="flex-2">

        <ul class="main_header_content_ul">
          <!-- Customer -->
          <li class="main_header_content_ul_li transition" style="color: var(--green);">Cliente
            <ul class="main_header_content_ul_li_ul">
              <li class="transition radius main_header_content_ul_li_ul_li">
                <router-link class="transition radius" to="/customers/create-customer" exact>Cadastrar Cliente</router-link>
                <router-link class="transition radius" to="/customers/read-customers" exact>Listar Clientes</router-link>
              </li>
            </ul>
          </li>
          <!-- Event -->
          <li class="main_header_content_ul_li transition" style="color: var(--green);">Evento
            <ul class="main_header_content_ul_li_ul">
              <li class="transition radius main_header_content_ul_li_ul_li">
                <router-link class="transition radius" to="/events/create-event" exact>Cadastrar Evento</router-link>
                <router-link class="transition radius" to="/events/edit-event" exact>Editar Evento</router-link>
              </li>
            </ul>
          </li>
          <!-- Tables -->
          <li class="main_header_content_ul_li transition" style="color: var(--green);">Mesas
            <ul class="main_header_content_ul_li_ul">
              <li class="transition radius main_header_content_ul_li_ul_li">
                <router-link class="transition radius" to="/releases/release-table" exact>Lançar</router-link>
                <router-link class="transition radius" to="/reports/report-table" exact>Relatório</router-link>
              </li>
            </ul>
          </li>
          <!-- Google Maps -->
          <li class="main_header_content_ul_li transition" style="color: var(--green);">Maps
            <ul class="main_header_content_ul_li_ul">
              <li class="transition radius main_header_content_ul_li_ul_li" title="Google Maps">
                <router-link to="/maps/google-maps">Google Maps</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </header>

</template>

<script>

export default {
  name: '',
  data: () => ({

  })
}
</script>
