<template>
    <li>
        <a v-if="item.type === 'document'">{{item.title}}</a>
        <div v-if="item.type === 'category'">{{item.title}}</div>
        <list v-if="item.contents" :items="item.contents"></list>
    </li>
</template>

<script>
export default {
    name: 'Entry',
    props: ['item'],
    data: function(){
        return {

        };
    },
    created: function(){

    }
}
</script>

<style scoped lang="less">
    @import "./less/variables";
    @import "./less/mixins";


</style>
