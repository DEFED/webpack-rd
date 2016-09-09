<template>
    <div class="body">
        <app-nav></app-nav>
        <router-view></router-view>
    </div>
</template>
<script>
    import{
        default as AppNav,
    }from './app-nav'

    export default{
        components: {
            AppNav,
        }
    }
</script>
<style lang="less">
    .body{
        display: flex;
        flex: 1;
    }
</style>
