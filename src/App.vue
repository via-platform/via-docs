<template>
  <div id="app">
      <div id="sidebar">
          <nav>
              <a class="wordmark"></a>
              <list :items="contents"></list>
          </nav>
      </div>
      <div id="content-wrapper">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
    name: 'app',
    data: function(){
        return {
            contents: []
        };
    },
    created: function(){
        this.$http.get('/contents.json')
        .then(response => response.body)
        .then(contents => this.contents = contents);
    }
}
</script>

<style lang="less">
    @import "./less/variables";

    #app
    {
        display: flex;
        z-index: 2;
    }

    #sidebar
    {
        flex: 1;
        min-height: 100%;
        display: flex;
        justify-content: flex-end;
    }

    #content-wrapper
    {
        flex: 2;
        min-height: 100%;
    }

    .wordmark
    {
        width: 122px;
        height: 50px;
        display: block;
        margin-bottom: 40px;
        background: url('./assets/via-docs.svg') 2px 0 no-repeat;
        background-size: auto 50px;
    }

    nav
    {
        width: 260px;
        padding: 45px 20px;
        position: relative;

        ul
        {
            margin-left: 15px;
        }

        div + ul, .expandable + ul
        {
            margin-left: 0;
        }

        li
        {
            font-size: 13px;
            line-height: 20px;
            user-select: none;

            a
            {
                cursor: pointer;
                margin-bottom: 4px;
                display: block;
                color: #CCC;
                text-decoration: none;

                &:hover, &.active
                {
                    color: #FFF;
                }

                &.router-link-exact-active
                {
                    color: @via;
                }
            }

            div
            {
                text-transform: uppercase;
                font-size: 12px;
                font-weight: 500;
                margin-top: 20px;
                color: #777;
                margin-bottom: 6px;
                letter-spacing: 0.02rem;
            }

            &.expandable
            {
                ul
                {
                    display: none;
                }

                &.expanded
                {
                    ul
                    {
                        display: block;
                    }
                }
            }
        }

        > ul
        {
            margin-left: 26px;

            > li
            {
                > .expandable
                {
                    font-size: 15px;
                    font-weight: 500;
                    text-transform: none;
                    color: #FFF;
                    margin: 20px 0;
                    transition: opacity ease 0.25s;
                    cursor: pointer;

                    &:hover
                    {
                        opacity: 0.5;
                    }

                    &::after
                    {
                        width: 17px;
                        height: 17px;
                        background: #DDD;
                        content: "";
                        position: absolute;
                        top: 1px;
                        left: -26px;
                    }
                }

                &.terminal > .expandable::after
                {
                    background: url('./assets/terminal.svg') 0 2px no-repeat;
                    background-size: 17px auto;
                }

                &.package > .expandable::after
                {
                    background: url('./assets/package.svg') 0 0 no-repeat;
                    background-size: 17px auto;
                }

                &.data > .expandable::after
                {
                    background: url('./assets/data-services.svg') 1px 1px no-repeat;
                    background-size: 15px auto;
                }
            }
        }
    }
</style>
