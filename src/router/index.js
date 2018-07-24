import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home';

Vue.use(Router)

export default new Router({
    mode: 'history',
    historyApiFallback: true,
    routes: [
        // { path: '/', name: 'HelloWorld', component: HelloWorl }
        { path: '/', name: 'home', component: Home }
    ]
})
