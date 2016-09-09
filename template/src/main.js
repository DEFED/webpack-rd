import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import {
    ContentIndex,
    Content1,
    Content2,
} from './components'

Vue.use(VueRouter)

let router = new VueRouter()

router.map({
    '/': {
        name: 'index',
        component: ContentIndex,
    },
    'content1': {
        name: 'content1',
        component: Content1,
    },
    'content2': {
        name: 'content2',
        component: Content2,
    },
})

router.start(App, '#app')
