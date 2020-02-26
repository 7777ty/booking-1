<template>
    <Layout class-prefix="layout">
        <number-pad :value.sync="record.amount" @submit="saveRecord" />
        <Tabs :data-source="recordTypeList" :value.sync="record.type"/>
        <div class="notes">
            <form-item field-name="备注"
                      placeholder="在这里输入备注"
                       :value.sync="record.notes"
            />
        </div>
        <tags />
        {{recordList}}
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import NumberPad from '@/components/Money/NumberPad.vue';
    import Tags from '@/components/Money/Tags.vue';
    import formItem from '@/components/Money/FormItem.vue';
    import {Component} from 'vue-property-decorator';
    import Tabs from '@/components/Tabs.vue';
    import recordTypeList from '@/constants/recordTypeList';



   @Component({
       components: {Tabs, formItem, Tags, NumberPad},
   })
    export default class Money extends Vue{
        get recordList() {
            return this.$store.state.recordList;
        }
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
            this.record.notes='';
        }
       recordTypeList =recordTypeList;
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