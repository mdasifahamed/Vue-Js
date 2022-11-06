const app = new Vue({
    el:"#app",
    data:{
        name:'Asif',
        age:27,
        country:"Bangladesh",
        imgsrc:"https://i.picsum.photos/id/533/200/200.jpg?hmac=HvhCl1BSaQrsbedBJm-X8gfnZGp_222QGZ-mYnstPiA"
    },
    methods:{
        mydetails(){

            return "I am" + this.name + "I am " + this.age.toLocaleString() + "I am from" + this.country
        }
    }
})
