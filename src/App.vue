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
        this.$http.get('http://localhost:3000/contents')
        .then(response => response.body)
        .then(contents => {
            console.log(contents);
            this.contents = contents;
        });
    }
}
</script>

<style lang="less">
    #app
    {
        display: flex;
    }

    #sidebar
    {
        flex: 1;
        min-height: 100%;
        background: #181818;
        display: flex;
        justify-content: flex-end;
    }

    #content-wrapper
    {
        flex: 2;
        min-height: 100%;
        background: #202020;
    }

    nav
    {
        width: 260px;
        // background: #404040;
        padding: 20px;

        ul
        {
            margin-left: 15px;
        }

        div + ul
        {
            margin-left: 0;
        }

        li
        {
            font-size: 13px;
            line-height: 20px;

            a
            {
                cursor: pointer;
                margin-bottom: 4px;
                display: block;
                color: #BBB;
            }

            div
            {
                text-transform: uppercase;
                font-size: 12px;
                font-weight: 500;
                margin-top: 15px;
                color: #555;
                margin-bottom: 6px;
            }
        }

        > ul
        {
            margin-left: 20px;

            > li > div
            {
                font-size: 15px;
                font-weight: 500;
                text-transform: none;
                color: #FFF;
            }
        }
    }

    .wordmark
    {
        width: 120px;
        height: 40px;
        background: #444;
        display: block;
        margin-bottom: 40px;
    }
</style>
