import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/structure/Home'
import CreateCustomer from '../components/customers/CreateCustomer'
import EditCustomer from '../components/customers/EditCustomer'
import ReadCustomers from '../components/customers/ReadCustomers'
import CreateEvent from '../components/events/CreateEvent'
import EditEvent from '../components/events/EditEvent'
import ReleaseTable from '../components/releases/ReleaseTable'
import Report from '../components/reports/Report'
import GoogleMaps from '../components/maps/GoogleMaps'
import NotFound from '../components/notfound/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  historyApiFallback: true,
  routes: [
    {path: '/', name: 'homepage', component: Home},
    {path: '/customers/create-customer', name: 'CreateCustomer', component: CreateCustomer},
    {path: '/customers/edit-customer/:id', name: 'EditCustomer', component: EditCustomer},
    {path: '/customers/read-customers', name: 'ReadCustomers', component: ReadCustomers},
    {path: '/events/create-event', name: 'CreateEvent', component: CreateEvent},
    {path: '/events/edit-event', name: 'EditEvent', component: EditEvent},
    {path: '/releases/release-table', name: 'ReleaseTable', component: ReleaseTable},
    {path: '/reports/report-table', name: 'Report', component: Report},
    {path: '/maps/google-maps', name: 'GoogleMaps', component: GoogleMaps},
    {path: '*', name: 'not-found', component: NotFound}
  ]
})
