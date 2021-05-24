'use strict'
Vue.createApp(
  {
    data(){
      return{
        services:[
          {name:"Маникюр",cost:2000},
          {name:"Педикюр",cost:3500},
          {name:"Стрижка",cost:1500},
          {name:"Укладка",cost:3000}
        ]
      }
    },
    computed:{
      sumService(){
        let sum = 0;
        this.services.map(el=>{if(el.selected)sum+=el.cost;});
        return sum;
      }
    }
  }
).mount("#app");
