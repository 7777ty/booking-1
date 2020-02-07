<template>
    <div>
        <label class="notes">
            <span>备注</span>
            <input type="text" placeholder="在这里输入备注">
        </label>
    </div>
</template>

<script lang='ts'>
    export default {
        name: 'notes'
    };
</script>

<style lang='scss' scoped>
    .notes {
        font-size: 14px;
        background: #f5f5f5;
        padding: 0 16px;
        display: flex;
        align-items: center;

        span {
            padding-right: 16px;
        }

        input {
            height: 64px;
            flex-grow: 1;
            background: transparent;
            border: none;
            padding-right: 16px;
        }
    }
</style>