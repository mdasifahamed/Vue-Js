const app = new Vue({ // creating new vue app for using in html functinalities
    el:'#app',// id of the element in index.html file whre app fucntion will operating
    data:{
        message:""// objects of the app to pass in html tag here a empty string which will be fileed afte button will be clicked 
    
    },
    methods:{
        show_hidden: function(){// function for the button when button will be clicked the message wiil e chaged to below mewssage and dispaly in<p> html tag see index.html

            this.message = "You have Clciked the So the Hidden Content is seen"

        }
    }



}) 
