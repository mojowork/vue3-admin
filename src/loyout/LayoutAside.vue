
<template>
    <el-menu
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    router
    :collapse="collapse"
    @open="handleOpen"
    @close="handleClose">
        <template v-for="(route, index) of routes" :key="index">
            <template v-if="!route.meta?.hidden">
                <el-menu-item  :index="route.path" v-if="route.meta?.isleaf || !route.children">
                    <i :class="route.meta?.icon"></i>
                    <template #title>{{route.meta?.title}}</template>
                </el-menu-item>
                <el-submenu :index="route.path" v-else>
                    <template #title>
                        <i :class="route.meta?.icon"></i>
                        <span>{{route.meta?.title}}</span>
                    </template>
                    <template v-for="(subRoute, subIndex) of route.children" :key="`${index}-${subIndex}`">
                        <el-menu-item :index="subRoute.path" v-if="!subRoute.meta?.hidden" >{{subRoute.meta?.title}}</el-menu-item>
                    </template>
                </el-submenu>
            </template>
        </template>
    </el-menu>
</template>
<script>
import { appRoutes as routes } from '../router/index'
export default {
  name: '',
  props: {
    collapse: Boolean
  },
  setup () {
    return {
      routes
    }
  }
}
</script>

<style lang="less" scoped>
// .brand{
//     height: @heightHeader;
//     line-height: @heightHeader;
//     width: 100%;
//     text-align: center;
//     color: #fff;
//     background-color: #545c64;
// }
.el-menu-vertical-demo{
    height: 100vh;
    transition: width .5s;
}
</style>
