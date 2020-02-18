<template>
    <div>
        <label class="formItem">
            <span>{{this.fieldName}}</span>
            <input type="text" v-model="value"
                   :placeholder="placeholder">
        </label>
    </div>
</template>

<script lang='ts'>
    import  Vue from  'vue'
    import {Component, Prop, Watch} from 'vue-property-decorator';

    @Component
    export  default  class formItem extends Vue{
    value='';

    @Prop({required:true}) fieldName!:string;
    @Prop()placeholder?:string;

        onValueChanged(value:string){
        this.$emit('update:value',value);
    }
    }

</script>

<style lang='scss' scoped>
    .formItem {
        font-size: 14px;
        background: #f5f5f5;
        padding: 0 16px;
        display: flex;
        align-items: center;

        span {
            padding-right: 16px;
        }

        input {
            height: 40px;
            flex-grow: 1;
            background: transparent;
            border: none;
            padding-right: 16px;
        }
    }
</style>