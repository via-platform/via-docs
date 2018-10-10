<template>
    <li :class="[item.class ? item.class : '', item.expandable ? 'expandable' : '', expanded ? 'expanded' : 'collapsed']">
        <router-link :to="'/' + item.url" v-if="item.type === 'document'">{{item.title}}</router-link>
        <a class="expandable" v-if="item.type === 'category' && item.expandable" v-on:click="expand">{{item.title}}</a>
        <div v-if="item.type === 'category' && !item.expandable">{{item.title}}</div>
        <list v-if="item.contents" :items="item.contents"></list>
    </li>
</template>

<script>
export default {
    name: 'Entry',
    props: ['item', 'expandable'],
    methods: {
        expand: function(){
            this.expanded = !this.expanded
        },
        contains: function(items = [], url){
            for(const item of items){
                if(item.url === url){
                    return true;
                }

                if(this.contains(item.contents, url)){
                    return true;
                }
            }

            return false;
        }
    },
    data: function(){
        return {
            expanded: false
        };
    },
    created: function(){
        if(this.item.expandable){
            const path = this.$route.params.document;

            if(this.contains(this.item.contents, path)){
                this.expanded = true;
            }
        }

        if(this.item.sort){
            this.item.contents = this.item.contents.slice().sort((a, b) => a.title < b.title ? -1 : 1);
        }
    }
}
</script>

<style scoped lang="less">
    @import "./less/variables";
    @import "./less/mixins";


</style>
