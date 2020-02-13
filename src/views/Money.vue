<template>
    <Layout class-prefix="layout">
        <number-pad/>
        <types/>
        <notes/>
        <tags :data-source.sync="tags"/>

    </Layout>
</template>

<script>
    import NumberPad from '@/components/Money/numberPad.vue';
    import Tags from '@/components/Money/tags.vue';
    import Types from '@/components/Money/types.vue';
    import Notes from '@/components/Money/notes.vue';
    export default {
        name: 'Money',
        components: {Notes, Types, Tags, NumberPad},
        data(){
            return{
            tags:['衣','食','住','行']
        }
        }
    };
</script>

<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>

<style lang="scss" scoped>


</style>