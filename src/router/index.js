import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/structure/Home';
import CreateCustomer from '../components/customers/CreateCustomer';
import CreateEvent from '../components/events/CreateEvent';
import ReleaseTable from '../components/releases/ReleaseTable';
import Report from '../components/reports/Report';
import GoogleMaps from '../components/maps/GoogleMaps';

Vue.use(Router)

export default new Router({
    mode: 'history',
    historyApiFallback: true,
    routes: [
        { path: '/', name: 'homepage', component: Home },
        { path: '/customers/create-customer', name: 'CreateCustomer', component: CreateCustomer },
        { path: '/events/create-event', name: 'CreateEvent', component: CreateEvent },
        { path: '/releases/release-table', name: 'ReleaseTable', component: ReleaseTable },
        { path: '/reports/report-table', name: 'Report', component: Report },
        { path: '/maps/google-maps', name: 'GoogleMaps', component: GoogleMaps }
    ]
})
