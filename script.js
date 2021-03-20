
const vm = Vue.createApp({
    data(){
        return{
            equation: 0 ,
            top: null,
            buttom: null,
            height: null,
            isShow: true
        }
    },

    computed:{

    },

    methods:{
        calculateAREA(){
            let result = (parseFloat(this.top) + parseFloat(this.buttom))*parseFloat(this.height)/2;
            this.equation = result || 0;

            this.isShow = !this.isShow;
            
            document.getElementById("cover").style.transform = 'rotatey('+180 +'deg)';
            document.getElementById("back").style.transform = 'rotatey(' + 0 + 'deg)';
            
            setTimeout(function(){
                console.log(this.isShow);
                document.getElementById("cover").style.transform = 'rotatey('+ 0 +'deg)';
                document.getElementById("back").style.transform ='rotatey(' + -180 + 'deg)';
            }, 2000);
        }        
    }
}).mount("#app");