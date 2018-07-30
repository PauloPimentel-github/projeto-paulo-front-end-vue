<template>
  <div id="app">
    <home-header></home-header>
    <div class="main">
      <router-view/>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script>

/* COMPONENTS */
import Home from '@/components/structure/Home'
import Header from '@/components/structure/Header'
import Footer from '@/components/structure/Footer'
import CreateCustomer from '@/components/customers/CreateCustomer'
import EditCustomer from '@/components/customers/EditCustomer'
import ReadCustomers from '@/components/customers/ReadCustomers'
import CreateEvent from '@/components/events/CreateEvent'
import ReleaseTable from '@/components/releases/ReleaseTable'
import Report from '@/components/reports/Report'
import GoogleMaps from '@/components/maps/GoogleMaps'
import NotFound from '@/components/notfound/NotFound'

export default {
  components: {
    'homepage': Home,
    'home-header': Header,
    'home-footer': Footer,
    'create-customer': CreateCustomer,
    'edit-customer': EditCustomer,
    'read-customers': ReadCustomers,
    'create-event': CreateEvent,
    'release-table': ReleaseTable,
    'report-table': Report,
    'google-maps': GoogleMaps,
    'not-found': NotFound
  }
}
</script>

<style>

/*
  Create on: 24/07/2018
  Author: Paulo Pimentel
*/

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

:root {
  --green: #46cea6;
  --green_h: #35ba9b;
  --green_l: #61ddbc;

  --blue: #4fc0e8;
  --blue_h: #3aadd9;
  --blue_l: #66d4f1;

  --yellow: #fdcd56;
  --yellow_h: #f5b945;
  --yellow_l: #fbd277;

  --red: #eb5463;
  --red_h: #d94452;
  --red_l: #f76c82;
}

img{
  display: block;
  max-width: 100%;
}

img a {
  border: none;
  text-decoration: none;
}

embed,
video,
iframe,
iframe[style]{
  max-width: 100%;
  height: auto;
}

h1, h2, h3 {
    margin-bottom: 25px;
}

ul{
  list-style: none;
}

li {
    display: inline-block;
}

/* FORM */
label {
    display: block;
    margin-bottom: 3px;
    font-size: 0.875em;
    font-weight: bold;
}

input, textarea, select {
    width: 100%;
    height: 50px;
    padding: 10px;
    margin-bottom: 15px;
    outline: none;
    border: 1px solid #eee;
    cursor: auto;
}

input:focus {
    transition: 0.8s;
    border-color: var(--green_h);
    box-shadow: 0px 0px 1px 1px var(--green_l);
}

/* Table */
table {
    width: 100%;
}

table, th, td {
    font-size: 0.875em;
    border: 1px solid #eee;
    border-collapse: collapse;
    padding: 8px 0px;
    text-align: center;
}

table td i{
    cursor: pointer;
    font-size: 1.2em;
    color: var(--green);
}

table td i:hover{
    color: var(--green_h);
}

/* CONTAINERS */
.container{
  max-width: 1200px;
  margin: 0 auto;
}

.embed-container{
  position: relative;
  max-width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
}

.embed-container embed,
.embed-container video,
.embed-container iframe{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* BOXSTYLES */
.radius{
  --radius: 4px;
  border-radius: var(--radius);
  -moz-border-radius: var(--radius);
  -webkit-border-radius: var(--radius);
}

.rounded{
  --radius: 50%;
  border-radius: var(--radius);
  -moz-border-radius: var(--radius);
  -webkit-border-radius: var(--radius);
}

.transition{
  --seconds: 0.8s;
  transition-duration: var(--seconds);
  -moz-transition-duration: var(--seconds);
  -webkit-transition-duration: var(--seconds);
  cursor: pointer;
}

/* TRIGGERS */
.trigger{
  margin: 15px 0px;
  color: #fff;
  font-size: 0.875em;
  background: #888;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
  padding: 12px;
  border: 1px solid #666;
}

.trigger-success{
  background: var(--green);
  background-color: var(--green_h);
}

.trigger-success-out{
  color: var(--green);
  border-color: var(--green);
  background: none;
  text-shadow: none;
}

.trigger-info{
  background: var(--blue);
  background-color: var(--blue_h);
}

.trigger-info-out{
  color: var(--blue);
  border-color: var(--blue);
  background: none;
  text-shadow: none;
}

.trigger-alert{
  background: var(--yellow);
  background-color: var(--yellow_h);
}

.trigger-alert-out{
  color: var(--yellow);
  border-color: var(--yellow);
  background: none;
  text-shadow: none;
}

.trigger-error{
  background: var(--red);
  background-color: var(--red_h);
}

.trigger-error-out{
  color: var(--red);
  border-color: var(--red);
  background: none;
  text-shadow: none;
}

/* BUTTONS */
.btn {
  display: inline-block;
  padding: 10px 20px;
  background: #888;
  border: none;
  cursor: pointer;

  font-size: 1em;
  font-weight: normal;
  color: #fff;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
}

.btn:hover {
  color: #fff;
  text-decoration: none;
  background: #666;
}

.btn-small{
  font-size: 0.875em;
}

.btn-big{
  font-size: 1.275em;
}

.btn-green{
  background: var(--green);
}

.btn-green:hover{
  background: var(--green_h);
}

.btn-green-out{
  color: var(--green);
  border: 1px solid var(--green);
  background: none;
  text-shadow: none;
}

.btn-green-out:hover{
  color: var(--green_h);
  border: 1px solid var(--green_h);
  background: none;
  text-shadow: none;
}

.btn-blue{
  background: var(--blue);
}

.btn-blue:hover{
  background: var(--blue_h);
}

.btn-blue-out{
  color: var(--blue);
  border: 1px solid var(--blue);
  background: none;
  text-shadow: none;
}

.btn-blue-out:hover{
  color: var(--blue_h);
  border: 1px solid var(--blue_h);
  background: none;
  text-shadow: none;
}

.btn-yellow{
  background: var(--yellow);
}

.btn-yellow:hover{
  background: var(--yellow_h);
}

.btn-yellow-out{
  color: var(--yellow);
  border: 1px solid var(--yellow);
  background: none;
  text-shadow: none;
}

.btn-yellow-out:hover{
  color: var(--yellow_h);
  border: 1px solid var(--yellow_h);
  background: none;
  text-shadow: none;
}

.btn-red{
  background: var(--red);
}

.btn-red:hover{
  background: var(--red_h);
}

.btn-red-out{
  color: var(--red);
  border: 1px solid var(--red);
  background: none;
  text-shadow: none;
}

.btn-red-out:hover{
  color: var(--red_h);
  border: 1px solid var(--red_h);
  background: none;
  text-shadow: none;
}

/* FLEXBOX */
.flex{
  display: flex;
  flex-wrap: wrap;
}

.flex .flex-1{
  flex-basis: 100%;
}

.flex .flex-2{
  flex-basis: calc(50% - 40px);
  margin: 20px;
}

.flex .flex-3{
  flex-basis: calc(33.33% - 30px);
  margin: 15px;
}

.flex .flex-4{
  flex-basis: calc(25% - 20px);
  margin: 10px;
}

/* STYLESHEET */
/* Author: Paulo Pimentel */
*{
  font-family: 'Open Sans', sans-serif;
}

:root {
  --green: #46cea6;
  --green_h: #35ba9b;
  --green_l: #61ddbc;

  --yellow: #fdcd56;
  --yellow_h: #f5b945;
  --yellow_l: #fbd277;
}

/* CONTENT */
.content {
  width: 90%;
  margin: 0 auto;
}

.main .content {
  width: 87%;
  margin: 50px auto;
}

/* HEADER */
.main_header {
  width: 100%;
  height: auto;
  background: #00264d;
}

.main_header_content .main_header_content_img {
  width: 100%;
  max-width: 25px;
  height: auto;
}

.main_header_content .flex-2:first-child {
  flex-basis: 25%;
}

.main_header_content .flex-2:nth-child(2) {
  flex-basis: 71%;
  margin: 20px 0;
}

/* MENU */
.main_header_content .main_header_content_ul {
  display: block;
  width: 100%;
  padding-bottom: 5px;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.main_header_content .main_header_content_ul_li {
  flex-basis: 15%;
  position: relative;
  text-transform: uppercase;
  font-size: 0.875em;
  font-weight: bold;
  padding: 0px 20px;
  cursor: pointer;
  border-radius: 4px 4px 0 0;
  -moz-border-radius: 4px 4px 0 0;
  -webkit-border-radius: 4px 4px 0 0;
}

.main_header_content .main_header_content_ul_li:hover {
  background:  #00264d;
  color: var(--green_h);
  transition: 1s;
}

.main_header_content .main_header_content_ul_li_ul {
  position: absolute;
  z-index: 3;
  left: 0;
  top: 100%;
  padding: 0 20px 20px 20px;
  width: 100%;
  color: var(--green);
  background: #00264d;
  border-radius: 0 0 4px 4px;
  -moz-border-radius: 0 0 4px 4px;
  -webkit-border-radius: 0 0 4px 4px;
  display: none;
}

.main_header_content .main_header_content_ul_li:hover .main_header_content_ul_li_ul {
  display: block;
}

.main_header_content .main_header_content_ul_li_ul_li,
.main_header_content_ul_li_ul_li a {
  text-transform: none;
  display: block;
  width: 100%;
  font-weight: normal;
  color: var(--green);
  padding: 5px 0;
  text-decoration: none;
}

.main_header_content .main_header_content_ul_li_ul_li a:hover {
  text-decoration: underline;
  background: #00264d;
  color: var(--green_h);
}

/* HOMEPAGE */
.main {
  margin-top: 50px;
}

.main_home_content {
  margin-top: 15% !important;
}

.main_home .main_home_content h1 {
  text-align: center;
  font-size: 2.2em;
  font-weight: bolder;
  color:  #00264d;
}

.main_home .main_home_content p {
  text-align: center;
  font-size: 1.2em;
  font-weight: lighter;
  color: #ccc;
}

/* RELEASE TABLE */
.main_release_content_form select {
  max-width: 400px;
  margin-right: 8px;
  height: 41px;
}

.main_release_content_form select:focus {
  transition: 0.8s;
  border-color: var(--green_l);
}

.main_release_content .main_release_content_table {
  margin: 50px 0;
}

/* RELEASE TABLE MODAL */
.main_release .modal {
  display: none;
  transition: 1s;
}
.main_release .box_modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9;
  display: block;
}

.box_modal .box_modal_content {
  width: 600px;
  max-width: 96%;
  margin: 170px auto 0 auto;
  background: #fff;
  padding: 40px;
}

.box_modal .box_modal_content h1, p {
  text-align: center;
}

.box_modal .box_modal_content header {
  margin-bottom: 20px;
  color: #777;
}

.box_modal .box_modal_content header h1{
  font-size: 1.4em;
  text-transform: uppercase;
  color: var(--themeColorA);
  margin-bottom: 10px;
}

.box_modal .box_modal_content input {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 15px;
  font-size: 1em;
}

/* GOOGLE MAPS */
.main_map {
  padding: 20px 12%;
}

.main_map_content {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background-color: grey;
}
.main_map_content_locations {
  display: block;
  margin: 10px 5px 5px 0;
}

.main_map_content_locations_item {
  display: inline-block;
  font-size: 0.7em;
  cursor: pointer;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
}

.main_map_content_locations_item:hover {
  background: #555;
  color: #fff;
  transition: 0.6s;
}

/* FOOTER */
.main_footer {
  width: 100%;
  height: 50px;
  position: relative;
  bottom: 0;
  background: #00264d;
  color: var(--green);
  padding: 15px 0;
}

</style>
