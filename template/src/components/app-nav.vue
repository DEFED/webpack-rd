<template>
    <div class="nav">
        <a v-link="{
            name: 'content1',
            activeClass: 'selected'
        }">content1</a>
        <a v-link="{
            name: 'content2',
            activeClass: 'selected'
        }">content2</a>
    </div>
</template>
<script>
    export default{

    }
</script>
<style lang="less">
    .nav{
        width: 20%;
        background-color: green;
        a{
            display: block;
            line-height: 30px;
            color: white;
        }
    }
</style>
