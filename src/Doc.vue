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
            .then(source => this.source = this.markdown.render(source))
            .then(() => window.scrollTo(0, 0));
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
            margin: 50px 0 4px;
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
            font-size: 15px;
            line-height: 24px;
            font-weight: 500;
            color: @header-text-color;
        }

        h2 + h3
        {
            font-size: 16px;
            color: @text-color;
            line-height: 18px;
            font-weight: 500;
        }

        h2 + table
        {
            margin-top: 18px;
        }

        p
        {
            color: @text-color;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            margin: 20px 0;
        }

        p code, table code
        {
            display: inline-block;
            border: 1px solid #DDD;
            background: #FFF;
            padding: 0 6px;
            font-family: Inconsolata;
            font-size: 15px;
            font-weight: 700;
            line-height: 20px;
            border-radius: 3px;
        }

        ul, ol
        {
            color: @text-color;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            margin: 20px 0;

            li
            {
                margin-left: 18px;
            }
        }

        ul
        {
            list-style: disc;
        }

        ol
        {
            list-style: decimal;
        }

        h2 + p, h3 + p, h2 + ul, h3 + ul, h2 + ol, h3 + ol
        {
            margin-top: 10px;
        }

        a
        {
            color: darken(@via, 10%);
            text-decoration: none;

            &:hover
            {
                text-decoration: underline;
            }
        }

        img
        {
            max-width: 100%;
            display: block;
        }

        pre
        {
            font-family: Inconsolata;
            font-weight: 700;
            display: block;
            border: 1px solid #DDD;
            padding: 20px;
            line-height: 18px;
            background: #FFF;
            border-radius: 3px;
            margin-bottom: 30px;

            code
            {
                display: block;
                color: @text-color;
            }
        }

        h3 + pre, h3 + table
        {
            margin-top: 5px;
        }

        em
        {
            font-style: italic;
        }

        strong
        {
            font-weight: 700;
        }

        table
        {
            border: 1px solid #CCC;
            width: 100%;
            margin-bottom: 30px;

            tbody tr
            {
                border-bottom: 1px solid #CCC;

                &:last-child
                {
                    border-bottom: 0;
                }
            }

            thead tr
            {
                border-bottom: 1px solid #CCC;
                background: #E4E4E4;
            }

            td, th
            {
                border-right: 1px solid #CCC;
                padding: 10px;

                &:last-child
                {
                    border-right: 0;
                }
            }

            th
            {
                text-align: left;
                font-weight: 500;
                color: #000;
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
                // opacity: 0.5;
            }

            &.terminal::after
            {
                background: url('./assets/terminal-dark.svg') 0 2px no-repeat;
                background-size: 24px auto;
            }

            &.packages::after
            {
                background: url('./assets/package-dark.svg') 0 0 no-repeat;
                background-size: 24px auto;
            }

            &.data::after
            {
                background: url('./assets/data-services-dark.svg') 1px 1px no-repeat;
                background-size: 22px auto;
            }

            &:hover
            {
                border-color: @via;
                text-decoration: none;
            }
        }
    }
</style>
