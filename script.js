
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

    computed:{},

    methods:{
        calculateAREA(){
            let result = (parseFloat(this.top) + parseFloat(this.buttom))*parseFloat(this.height)/2;
            this.equation = result || 0;
            console.log(this.cover);

            this.isShow = !this.isShow;
            
            document.getElementById("cover").style.transform = this.isShow? 'rotatey('+0 +'deg)': 'rotatey(' + 180 + 'deg)';
            document.getElementById("back").style.transform = this.isShow? 'rotatey(' + -180 + 'deg)' :  'rotatey(' + 0 + 'deg)';

        }        
    }
}).mount("#app");