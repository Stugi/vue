let app = Vue.createApp(
  {
    data(){
     return {
         goods : [
               {
                   title: "Пианино",
                   price: 3000,
                   count: 25
               },
               {
                   title: "Гитара",
                   price: 1200,
                   count: 2
               },
               {
                   title: "Барабаны",
                   price: 2700,
                   count: 12
               },
               {
                   title: "Флейта",
                   price: 900,
                   count: 50
               },
               {
                   title: "Арфа",
                   price: 3400,
                   count: 5
               }
             ]
           }
         },
         computed:{
           sortGoods(){
             return this.goods.sort(({count:c1},{count:c2})=>c2-c1);
           }
         }
       }
    );
    app.mount("#app");
