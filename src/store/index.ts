import { createPinia,defineStore } from "pinia";


export const  DataStore = defineStore('data',{
    state:():any=>({
        name:"张三",
        age:18
    }),
    getters:{
        data:(state)=>state
    },
    actions:{
        changeName(name:string){
            this.name = name
        }
    }
})


const store = createPinia()

export default store