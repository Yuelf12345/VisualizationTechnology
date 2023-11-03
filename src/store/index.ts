import { createPinia, defineStore } from "pinia";
interface Table {
    id: string;
    x: number;
    y: number;
    tableWidth: number;
    height: number;
    name: number | string;
}

export const DataStore = defineStore('data', {
    state: (): any => ({
        currentTable: {}
    }),
    getters: {
        data: (state) => state
    },
    actions: {
        positionTable(table: Table) {
            this.currentTable = table
        }
    }
})


const store = createPinia()

export default store