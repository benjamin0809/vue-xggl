import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Foo from '@/components/Foo'
import Bar from '@/components/Bar'
import Login from '@/components/login/login'
import Register from '@/components/login/register'
import Home from '@/components/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/foo',
      name: 'Foo',
      component: Foo
    },
    { path: '/bar',
      name: 'Bar',
      component: Bar
    },
    { path: '/login',
      name: 'Login',
      component: Login
    },
    { path: '/register',
      name: 'Register',
      component: Register
    },
    { path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
