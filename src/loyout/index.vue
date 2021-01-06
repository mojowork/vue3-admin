<template>
    <div  class="layout">
        <aside class="layout-aside">
            <LayoutAside />
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
import LayoutAside from './LayoutAside.vue'
import LayoutHeader from './LayoutHeader.vue'
export default {
  name: 'layout',
  components: {
    LayoutAside,
    LayoutHeader
  }
}
</script>
<style lang="less" scoped>
.layout{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    background-color: @colorBg;
    &-aside{
        height: 100%;
        width: 200px;
        flex: 200px 0;
    }
    &-container{
        flex: 1;
        display: flex;
        flex-direction: column;
        &-header{
            flex: 70px 0;
        }
        &-content{
            flex: 1;
            padding: 20px;
        }
    }

}

</style>
