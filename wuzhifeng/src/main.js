// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Customers from './components/Customers'
import About from './components/About'
import Add from './components/Add'
import CustomersDetails from './components/CustomerDetails'
import Edit from './components/Edit'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Customers},
    {path: '/about', component: About},
    {path: '/add', component: Add},
    {path: '/customer/:id', component: CustomersDetails},
    {path: '/edit/:id', component: Edit}
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template:
  '<div id="app">' +
  '<nav class="navbar navbar-default">\n' +
  '      <div class="container">\n' +
  '        <div class="navbar-header">\n' +
  '          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">\n' +
  '            <span class="sr-only">Toggle navigation</span>\n' +
  '            <span class="icon-bar"></span>\n' +
  '            <span class="icon-bar"></span>\n' +
  '            <span class="icon-bar"></span>\n' +
  '          </button>\n' +
  '          <a class="navbar-brand" href="#">用户管理系统</a>\n' +
  '        </div>\n' +
  '        <div id="navbar" class="collapse navbar-collapse">\n' +
  '          <ul class="nav navbar-nav">\n' +
  '            <li><router-link to="/">主页</router-link></li>\n' +
  '            <li><router-link to="/about">关于我们</router-link></li>\n' +
  '          </ul>\n' +
  '          <ul class="nav navbar-nav navbar-right">\n' +
  '            <li><router-link to="/add">添加用户</router-link></li>\n' +
  '          </ul>\n' +
  '        </div><!--/.nav-collapse -->\n' +
  '      </div>\n' +
  '    </nav>' +
  '<router-view></router-view>' +
  '</div>',
  components: { App }
})
