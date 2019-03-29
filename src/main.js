// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'

// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import the vue instance
import Vue from 'vue'
//import the App component
import App from './App'
//import the vue router
import VueRouter from 'vue-router'
import axios from 'axios'

//tell vue to use the router


Vue.use(VueRouter)
Vue.use(axios)

var sth =  axios.get(`http://jsonplaceholder.typicode.com/posts`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    });
    
//import the hello component
import Hello from './components/HelloWorld'
import About from './components/About'
import Contact from './components/Contact'
import User from './components/User'


//define your routes

const Foo = { template: '<div> Foo </div>'}
const Bar = { template: '<transition name="slide"><div> Bar </div></transition>'}
const Pnf = { template : '<div> Page Not Found! </div>'}
const Profile = { template: '<div> The User\'s Profile <router-link to="/password">Password</router-link><router-view></router-view></div>'}
const Password = { template: '<div> This is a nested nested Password page </div>'}

const routes = [
//define the root url of the application.
{ path: '/', component: Hello},
{ path : '/about', component: About},
{ path: '/contact', component: Contact},
{ path: '/foo', component: Foo},
{ path: '/bar', component: Bar},
{ path: '/user/:id',  name: 'user', component: User, props: true,
	children: [
		{ path: '/profile', component: Profile,
			children: [
				{ path: '/password', component: Password }
			]

	}
	]
},
//{ path: '/user/:username/:id', component: User},

//{ path: '/user-*/', component: User},
{ path: '/nopage', redirect: to =>{
	return '/contact';
}},
{ path : '*', component: Pnf, name: '404'}

]



// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.


const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})


//instatinat the vue instance
new Vue({
//define the selector for the root component
  el: '#app',

  //pass the template to the root component
  template: '<App/>',
  
  //declare components that the root component can access
  components: { App },
  
  //pass in the router to the Vue instance
  router
}).$mount('#app')//mount the router on the app
