<template>
    <div id="doc">
        <vue-markdown class="markdown" :source="source"></vue-markdown>
    </div>
</template>

<script>
export default {
    name: 'Doc',
    data: function(){
        return {
            source: ''
        };
    },
    methods: {
        load: function(){
            this.$http.get(this.$route.params.document ? `/docs/${this.$route.params.document}.md` : `/docs/intro.md`)
            .then(response => response.body)
            .then(source => this.source = source);
        }
    },
    watch: {
        '$route.params.document': function(from, to){
            this.load();
        }
    },
    created: function(){
        this.load();
    }
}
</script>

<style lang="less">
    @import "./less/variables";
    @import "./less/mixins";

    #doc
    {
        padding: 45px 50px;
        max-width: 800px;
    }

    .markdown
    {
        h1
        {
            font-size: 36px;
            line-height: 46px;
            font-weight: 500;
            color: @f;
            margin-top: 50px;

            &:first-child
            {
                margin-top: 0;
                margin-bottom: 42px;
            }
        }

        h2
        {
            font-size: 18px;
            line-height: 26px;
            font-weight: 500;
        }

        h1 + h2
        {
            font-size: 18px;
            line-height: 22px;
            font-weight: 500;
            color: #AAA;
            margin-top: 4px;
            margin-bottom: 50px;
        }

        h1 + p
        {
            // margin-top: 15px;
        }

        h3
        {
            font-size: 20px;
            line-height: 22px;
            font-weight: 700;
            color: @f;
        }

        p
        {
            color: @grey;
            font-family: Roboto;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            margin: 20px 0;
        }

        a
        {
            color: @base;
            text-decoration: none;

            &:hover
            {
                text-decoration: underline;
            }
        }
    }
</style>
