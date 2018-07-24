<!-- Google Maps api key:AIzaSyBz8wq1MMQK-X0M5ApJkEq2KrinIRR_7Pg -->
<template>
  <div class="main_map" id="">
    <div class="content">
      <h1>Google Maps</h1>
      <div class="flex">
        <div class="flex-1">
          <select class="j_customer" name="">
            <option value="">Selecione o cliente</option>
          </select>
        </div>
        <div class="flex-1">
          <div class="main_map_content_locations"></div>
        </div>
      </div>

      <div class="main_map_content" id="map"></div>
    </div>
  </div>
</template>

<script>

import $Scriptjs from 'scriptjs'

export default {

  data () {
    return {
      service: 'https://projeto-paulo-back-end.herokuapp.com/api',
      endPoint: ''
    }
  },
  methods: {

  },
  mounted () {
    $Scriptjs('https://maps.googleapis.com/maps/api/js?key=AIzaSyBz8wq1MMQK-X0M5ApJkEq2KrinIRR_7Pg', () => {})

    $Scriptjs('https://code.jquery.com/jquery-3.3.1.js', () => {
      $(function () {
        /* GOOGLE MAPS */
        var locations = [
          {
            title: 'Avenida Pequeno Principe, 800<br>Flopis/SC',
            lat: -27.6763079,
            lng: -48.5005945,
            icon: 'https://hotelmelungtse.com/wp-content/themes/hotelica-pro/images/mapicon.png'
          },
          {
            title: 'Guarulhos, Marcos Freire',
            lat: -23.4621978,
            lng: -46.404045,
            icon: 'https://hotelmelungtse.com/wp-content/themes/hotelica-pro/images/mapicon.png'
          }
        ]

        function getMap (locations) {
          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 1,
            center: locations[0]
          })
          // map center
          var bounds = new google.maps.LatLngBounds()
          // cria marcas
          locations.map(function (location) {
            var marker = new google.maps.Marker({
              animation: google.maps.Animation.DROP,
              position: location,
              icon: location.icon,
              map: map
            })
            locationInfo(marker, location.title)
            bounds.extend(marker.position)
          })

          map.fitBounds(bounds)
          var zoom = map.getZoom()
          map.setZoom(zoom > 15 ? 15 : zoom)

          function locationInfo (marker, content) {
            var info = new google.maps.InfoWindow({
              content: content
            })

            marker.addListener('click', function () {
              info.open(marker.get('map'), marker)
            })
          }
        }

        getMap(locations)

        // service
        const service = 'https://projeto-paulo-back-end.herokuapp.com/api'
        // ajax
        $.getJSON(service + '/customers', function (response) {

          $.each(response, function (key, value) {
            $('.j_customer').append('<option id="' + value.customer_id + '">' + value.customer_name + '</option>')
          })
        })

        // recupera o valor do id assim que um option for selecionado
        $('.j_customer').on('change', function () {
          var id = $('.j_customer option:selected').attr('id')

          $.getJSON('https://projeto-paulo-back-end.herokuapp.com/api/google-maps/' + id, function (response) {

            $('.main_map_content_locations').html('<span class="main_map_content_locations_item address" data-location="' + response.customer_address + '|' + response.customer_lat + '|' + response.customer_lng + '"><b>Endereço Cliente:</b> ' + response.customer_address + '</span><span class="main_map_content_locations_item address" data-location="' + response.event_local + '|' + response.event_lat + '|' + response.event_lng + '"><b>Local do Evento:</b> ' + response.event_local + '</span><span class="main_map_content_locations_item" data-location="' + response.customer_address + '|' + response.customer_lat + '|' + response.customer_lng + '||' + response.event_local + '|' + response.event_lat + '|' + response.event_lng + '||" title="Dê um zoom para melhorar a visão e a distância!"><b>Comparar Localidades:</b></span>')
            $('.main_map_content_locations').fadeIn(1000)
            // seta o mapa no endereço do cliente e no local do evento
            $('.main_map_content_locations_item').on('click', function () {
              var location = $(this).attr('data-location')

              if (location.indexOf('|') >= 1) {
                var setGroup = location.split('||')
                var groupLocation = []

                setGroup.map(function (getLoc) {
                  var setLoc = getLoc.split('|')
                  groupLocation.push({
                    title: setLoc[0],
                    lat: parseFloat(setLoc[1]),
                    lng: parseFloat(setLoc[2]),
                    icon: 'https:// hotelmelungtse.com/wp-content/themes/hotelica-pro/images/mapicon.png'
                  })
                })

                getMap(groupLocation)
              } else {
                var setLoc = location.split('|')
                var newLoc = [
                  {
                    title: setLoc[0],
                    lat: parseFloat(setLoc[1]),
                    lng: parseFloat(setLoc[2]),
                    icon: 'https:// hotelmelungtse.com/wp-content/themes/hotelica-pro/images/mapicon.png'
                  }
                ]
                getMap(newLoc)
              }
            })
          })
        })
      })
    })
  }
}
</script>
