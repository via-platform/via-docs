import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueMarkdown from 'vue-markdown';

import App from './App.vue';
import Doc from './Doc.vue';

Vue.config.productionTip = false

require('./less/global.less');

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueLocalStorage, {name: 'ls'});

Vue.component('vue-markdown', VueMarkdown);

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/:document',
        component: Doc
    }
];

const render = h => h(App);
const router = new VueRouter({routes, mode: 'history', base: '/docs'});

new Vue({render, router}).$mount('#app');
