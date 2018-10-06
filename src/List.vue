<template>
    <ul>
        <entry v-for="item in items" :item="item"></entry>
    </ul>
</template>

<script>
export default {
    name: 'List',
    props: ['items']
}
</script>

<style scoped lang="less">

</style>
