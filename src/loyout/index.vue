<template>
    <div  class="layout">
        <aside
        class="layout-aside"
        :class="{'collapse': isCollapse}"
        @mouseenter="() => isCollapse = false"
        @mouseleave="() => isCollapse = true">
            <LayoutAside :collapse="isCollapse" />
        </aside>
        <section class="layout-container">
            <header class="layout-container-header">
                <LayoutHeader/>
            </header>
            <main class="layout-container-content">
                <router-view/>
            </main>
        </section>
    </div>
</template>
<script>
import { ref } from 'vue'
import LayoutAside from './LayoutAside.vue'
import LayoutHeader from './LayoutHeader.vue'
export default {
  name: 'layout',
  components: {
    LayoutAside,
    LayoutHeader
  },
  setup () {
    const isCollapse = ref(true)

    return {
      isCollapse
    }
  }
}
</script>
<style lang="less" scoped>
.layout{
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: @colorBg;
    &-aside{
        position: fixed;
        left: 0;
        height: 100%;
        width: 250px;
        z-index: 99;
        translate: all .3s;
        &.collapse{
            width: 64px;
        }
    }
    &-container{
        height: 100%;
        padding-left: 64px;
        &-header{
            height: @heightHeader;
        }
        &-content{
            height: calc(100% - @heightHeader);
            padding: 20px;
            box-sizing: border-box;
        }
    }

}

</style>
