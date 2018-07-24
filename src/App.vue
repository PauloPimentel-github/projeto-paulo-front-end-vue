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
import Home from '@/components/structure/Home';
import Header from '@/components/structure/Header';
import Footer from '@/components/structure/Footer';
import CreateCustomer from '@/components/customers/CreateCustomer';
import CreateEvent from '@/components/events/CreateEvent';
import ReleaseTable from '@/components/releases/ReleaseTable';
import Report from '@/components/reports/Report';
import GoogleMaps from '@/components/maps/GoogleMaps';

export default {
    components: {
        'homepage': Home,
        'home-hader': Header,
        'home-footer': Footer,
        'create-customer': CreateCustomer,
        'create-event': CreateEvent,
        'release-table': ReleaseTable,
        'report-table': Report,
        'google-maps': GoogleMaps
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
