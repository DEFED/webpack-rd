<template>
    <div class="head">
        <a v-link="{
            name: 'index'
        }">head</a>
    </div>
</template>
<script>
    export default {
    }
</script>
<style lang="less">
    .head{
        height: 50px;
        line-height: 50px;
        background-color: red;
        a{
            color: white;
        }
    }
</style>
