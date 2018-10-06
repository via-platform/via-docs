<template>
    <ul>
        <entry v-for="item in items" :item="item"></entry>
    </ul>
</template>

<script>
export default {
    name: 'List',
    props: ['items'],
    created: function(){
        console.log(this.items);
    }
}
</script>

<style scoped lang="less">
    @import "./less/variables";
    @import "./less/mixins";


</style>
