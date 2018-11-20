import Vue from 'vue'
import App from 'ui/app.vue'
import router from 'router'
import store from 'store/index'
// declare module 'module': any

new Vue({
  template: '<App/>',
  router,
  store,
  components: {
    App
  }
}).$mount('#app')

// if(module.hot) {
//   const FILE_NAME = 'bundle.css'
//   let file = ''
//   let el = document.querySelector(`link[href*="${FILE_NAME}"]`)
//   let {href} = el
//
//   function httpGet(url, callback) {
//     let xhr = new XMLHttpRequest()
//
//     xhr.addEventListener('load', () => callback(xhr))
//     xhr.open('GET', url)
//     xhr.send()
//   }
//
//   module.hot.accept()
//   module.hot.dispose(() => {
//     let url = `${href}?d=${new Date().getTime()}`
//
//     httpGet(url, ({responseText}) => {
//       if(responseText == file)
//         window.location.reload() // js was changed
//       else
//         el.href = url
//     })
//   })
//
//   httpGet(href, ({responseText}) => {
//     file = responseText
//   })
// }