Vue.component('todo-course',{ declaring dynamic componenet to pass in html
    props:['todo'],// props name
    template:`<li>{{todo.text}}</li>` template to be used in component

})
const app = new Vue({
    el:'#app',
    data:{
        courselist:[ // data that will be used in compnenet template 
      { id: 0, text: 'Java' },  
      { id: 1, text: 'PHP' },  
      { id: 2, text: 'Angular' },  
      { id: 3, text: 'Vue.js' }  
        ],
        
    
    },
})
