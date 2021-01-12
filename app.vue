<template>
    <div class="app">
        <DataPicker :date="date" @choose-date="chooseDate" />
    </div>
</template>

<script>
import DataPicker from "./DataPicker"
export default {
    components:{
        DataPicker
    },
    data(){
        return {
            date:new Date()
        }
    },
    methods: {
        chooseDate(date){
            this.date = date
        }
    },
}
</script>


<style scoped>

</style>