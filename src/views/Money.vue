<template>
    <Layout class-prefix="layout">
        <number-pad :value.sync="record.amount" @submit="saveRecord" />
        <types :value.sync="record.type"/>
        <div class="notes">
            <form-item field-name="备注"
                      placeholder="在这里输入备注"
                      @update:value="onUpdateNotes"
            />
        </div>
        <tags />
        {{recordList}}
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import NumberPad from '@/components/Money/numberPad.vue';
    import Tags from '@/components/Money/tags.vue';
    import Types from '@/components/Money/types.vue';
    import formItem from '@/components/Money/formItem.vue';
    import {Component} from 'vue-property-decorator';



   @Component({
       components: {formItem, Types, Tags, NumberPad},
       computed: {
           recordList() {
               return this.$store.state.recordList;
           }
       }
   })
    export default class Money extends Vue{

       record : recordItem={
           tags:[],notes:'',type:'-',amount:0
       };
        created(){
            this.$store.commit('fetchRecords')
        }
        onUpdateNotes(value:string){
           this.record.notes=value;
        }
        saveRecord(){
            this.$store.commit('createRecord',this.record);

        }
    }
</script>

<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
    .notes{
        padding: 12px 0;
    }
</style>

<style lang="scss" scoped>


</style>