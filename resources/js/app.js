require('./bootstrap');

window.Vue = require('vue');

//vue router
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from './components/Index.vue';


const Foo = {
    template: '<div>foo</div>'
}
const Bar = {
    template: '<div>bar</div>'
}

Vue.component('welcome', require('./components/Welcome.vue').default);
Vue.component('page', require('./components/Page.vue'));

const routes = [{
        path: '*',
        component: Error
    },
    {
        path: '/',
        component: Index
    },
    {
        path: '/foo',
        component: Foo
    },
    {
        path: '/bar',
        component: Bar
    }
]


const router = new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')


// const app = new Vue({
//     el: '#app',
// });
