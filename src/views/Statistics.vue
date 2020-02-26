
<template>
    <Layout>
      <Tabs :data-source="recordTypeList" class-prefix="type" :value.sync="type"/>
        <ol>
            <li v-for="(group,index) in result" :key="index">
                <h3 class="title">{{group.title}}</h3>
                <ol>
                    <li v-for="item in group.items" :key="item.id" class="record">
                        <span>{{tagString(item.tags)}}</span>
                        <span class="notes">{{item.notes}}</span>
                        <span >￥{{item.amount}}</span>

                    </li>
                </ol>
            </li>
        </ol>

    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Tabs from '@/components/Tabs.vue';
  import recordTypeList from '@/constants/recordTypeList';



  @Component({
    components: {Tabs}
  })
export default  class Statistics extends Vue{
      tagString(tags:Tag[]){
          return tags.length===0?'无': tags.join('，');
      }
   get recordList(){
          return (this.$store.state as RootState).recordList;
   }
   get result(){
       const {recordList} = this;
       type HashTableValue = { title: string, items:recordItem[] }

       const hashTable:{[key:string]:HashTableValue}={};
       for (let i=0;i<recordList.length;i++){
        const [date,time]=recordList[i].createAt!.split('T');
        hashTable[date]=hashTable[date]||{title:date,items:[]};
        hashTable[date].items.push(recordList[i]);
       }
       return hashTable;
   }
   beforeCreate(){
       this.$store.commit('fetchRecords')
   }

  recordTypeList =recordTypeList;
  type ='-';

  }
</script>

<style lang="scss" scoped>
  ::v-deep .type-tabs-item {
    background: #c4c4c4;
    &.selected{
      background: white;
      &::after{
        display: none;
      }
    }
  }
  %item{
      padding: 8px 16px;
      line-height: 24px;
      display: flex;
      justify-content: space-between;
      align-content: center;
  }
    .title{
        @extend %item;
        padding: 0 16px;
    }
    .record{
        @extend %item;
        background: white;
    }
    .notes{
        margin-right: auto;
        margin-left: 16px;
        color: #999;
    }
</style>