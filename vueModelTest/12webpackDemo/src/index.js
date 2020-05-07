import $ from 'jquery'
import './css/1.css'
import './css/1.less'
import './css/1.scss'




$(function () {
    $('li:odd').css('backgroundColor', 'red');
    $('li:even').css('backgroundColor', 'yellow');
})

class Person {
    static info = "asd"
}
console.log(Person.info)

//--------------------------------
// 1.导入vue构造函数
import Vue from 'vue'
// 2.导入单文件组件
import App from './components/App.vue'

const vm = new Vue({
    // 指定vm实例要控制的页面区域
    el: '#app',
    // 4.通过render函数，把指定的组件渲染到el区域中
    render: h => h(App)
})