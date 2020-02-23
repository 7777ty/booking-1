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
        <tags :data-source.sync="tags" @update:value="onUpdateTags"/>
        {{recordList}}
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import NumberPad from '@/components/Money/numberPad.vue';
    import Tags from '@/components/Money/tags.vue';
    import Types from '@/components/Money/types.vue';
    import formItem from '@/components/Money/formItem.vue';
    import {Component, Watch} from 'vue-property-decorator';
    import recordListModel from '@/models/recordListModel';

    const recordList=recordListModel.fetch();

   @Component({
       components: {formItem, Types, Tags, NumberPad},
   })
    export default class Money extends Vue{
       tags=window.tagList;
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
            recordListModel.create(this.record);

        }
        @Watch('recordList')
       onRecordListChange(){
            recordListModel.save();
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