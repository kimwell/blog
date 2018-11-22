import Vue from 'vue'
import App from './App.vue'
import router from './routes'
// import * as filters from './filters/index' //过滤器
// import axios from './http'
// import * as api from './api'

// import animate from 'animate.css'

// Object.keys(filters).forEach(key => {
//     Vue.filter(key, filters[key])
// })


// Vue.prototype.$api = api; //所有接口列表挂载
// Vue.prototype.$http = axios;
Vue.prototype.$clearData = (data) => JSON.parse(JSON.stringify(data));

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')