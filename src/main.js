import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueMarkdown from 'vue-markdown';

import App from './App.vue';
import Doc from './Doc.vue';
import List from './List.vue';
import Entry from './Entry.vue';

Vue.config.productionTip = false

require('./less/global.less');

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.component('vue-markdown', VueMarkdown);
Vue.component('list', List);
Vue.component('entry', Entry);

const routes = [
    {
        path: '/',
        component: Doc
    },
    {
        path: '/:document',
        component: Doc
    }
];

const render = h => h(App);
const router = new VueRouter({routes, mode: 'history', base: '/docs'});

new Vue({render, router}).$mount('#app');
