'use strict'

Vue.createApp(
  {
    data(){
      return {
        articles:[
          {title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "https://picsum.photos/200/300?random=4"},
          {title:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "https://picsum.photos/200/300?random=3"},
          {title:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            image: "https://picsum.photos/200/300?random=2"},
          {title:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "https://picsum.photos/200/300?random=1"}
        ],
        search:""
      }
    },
    computed:{
      filteredList(){
        return this.articles.filter(({title})=>title.toUpperCase().includes(this.search.toUpperCase()));
      }
    }
  }
).mount("#app");
