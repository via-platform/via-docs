<template>
    <div class="markdown" v-html="source"></div>
</template>

<script>
export default {
    name: 'Doc',
    data: function(){
        return {
            source: '',
            markdown: null
        };
    },
    methods: {
        load: function(){
            this.$http.get(this.$route.params.document ? `/docs/${this.$route.params.document}.md` : `/docs/intro.md`)
            .then(response => response.body)
            .then(source => this.source = this.markdown.render(source));
        }
    },
    watch: {
        '$route.params.document': function(){
            this.load();
        }
    },
    created: function(){
        this.markdown = markdownit({
            html: true,
            highlight: function(str, lang){
                if(lang && hljs.getLanguage(lang)){
                    try {
                        return hljs.highlight(lang, str).value;
                    }catch(error){
                        console.error(error);
                    }
                }

                return '';
            }
        });

        this.load();
    }
}
</script>

<style lang="less">
    @import "./less/variables";
    @import "./less/mixins";

    .markdown
    {
        padding: 45px 50px;
        max-width: 800px;

        h1
        {
            font-size: 36px;
            line-height: 46px;
            font-weight: 500;
            color: @header-text-color;
            margin-top: 50px;

            &:first-child
            {
                margin-top: 0;
                margin-bottom: 42px;
            }
        }

        h2
        {
            font-size: 22px;
            line-height: 28px;
            font-weight: 500;
            margin: 50px 0 10px;
            color: @header-text-color;
        }

        h1 + h2
        {
            font-size: 18px;
            line-height: 22px;
            font-weight: 500;
            color: @text-color;
            margin-top: 4px;
            margin-bottom: 30px;
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
            color: @header-text-color;
        }

        p
        {
            color: @text-color;
            font-family: Roboto;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            margin: 20px 0;
        }

        a
        {
            color: @via;
            text-decoration: none;

            &:hover
            {
                text-decoration: underline;
            }
        }

        pre
        {
            font-family: Inconsolata;
            font-weight: 700;
            display: block;
            border: 2px solid #555;
            padding: 20px;
            line-height: 18px;

            code
            {
                display: block;
                color: @text-color;
            }
        }

        .documentation-section
        {
            display: block;
            padding: 12px 20px 12px 68px;
            margin-bottom: 15px;
            border: 2px solid @border-color;
            user-select: none;
            transition: border-color ease 0.25s;
            cursor: pointer;

            .documentation-section-title
            {
                color: @header-text-color;
                font-weight: 500;
                line-height: 18px;
                text-decoration: none;
            }

            .documentation-section-description
            {
                color: @text-color;
                margin-top: 4px;
                line-height: 18px;
                text-decoration: none;
            }

            &::after
            {
                width: 24px;
                height: 24px;
                content: "";
                position: absolute;
                top: 20px;
                left: 22px;
                opacity: 0.5;
            }

            &.terminal::after
            {
                background: url('./assets/terminal.svg') 0 2px no-repeat;
                background-size: 24px auto;
            }

            &.packages::after
            {
                background: url('./assets/package.svg') 0 0 no-repeat;
                background-size: 24px auto;
            }

            &.data::after
            {
                background: url('./assets/data-services.svg') 0 0 no-repeat;
                background-size: 24px auto;
            }

            &:hover
            {
                border-color: @via;
                text-decoration: none;
            }
        }
    }
</style>
