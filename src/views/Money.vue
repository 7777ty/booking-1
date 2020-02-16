<template>
    <Layout class-prefix="layout">
        <number-pad :value.sync="record.amount" @submit="saveRecord" />
        <types :value.sync="record.type"/>
        <notes @update:value="onUpdateNotes"/>
        <tags :data-source.sync="tags" @update:value="onUpdateTags"/>
        {{recordList}}
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import NumberPad from '@/components/Money/numberPad.vue';
    import Tags from '@/components/Money/tags.vue';
    import Types from '@/components/Money/types.vue';
    import Notes from '@/components/Money/notes.vue';
    import {Component, Watch} from 'vue-property-decorator';
    import recordListModel from '@/models/recordListModel';
    import tagListModel from '@/models/tagListModel';
    const recordList=recordListModel.fetch();
    const tagList = tagListModel.fetch();

   @Component({
       components: {Notes, Types, Tags, NumberPad},
   })
    export default class Money extends Vue{
       tags=tagList;
       recordList:recordItem[]=recordList;
       record : recordItem={
           tags:[],notes:'',type:'-',amount:0
       };

        onUpdateTags(value:string[]){
           this.record.tags=value;
        }
        onUpdateNotes(value:string){
           this.record.notes=value;
        }
        saveRecord(){
            const record2:recordItem=recordListModel.clone(this.record);
            record2.createAt=new Date();
            this.recordList.push(record2);

        }
        @Watch('recordList')
       onRecordListChange(){

            recordListModel.save(this.recordList);
        }
    }
</script>

<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>

<style lang="scss" scoped>


</style>