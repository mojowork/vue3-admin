<template>
    <div class="header">
        <div class="header-avatar">
            <el-dropdown >
                <span class="el-dropdown-link">
                    <img style="height:100%;" :src="require('@/assets/avatar-default.png')"/>
                    <span>{{username}}</span>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>

    </div>
</template>
<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { loginPage } from '../router'
export default {
  name: '',
  setup () {
    const username = 'chaos'
    const store = useStore()
    const router = useRouter()

    const logout = () => {
      store.dispatch('user/LOGOUT')
        .then(() => {
          router.push({ path: loginPage })
        })
    }
    return {
      username,
      logout
    }
  }
}
</script>
<style lang="less" scoped>
.header{
    position: relative;
    height: @heightHeader;
    width: 100%;
    background-color: #fff;
    &-avatar{
        position: absolute;
        right: 20px;
        .el-dropdown-link{
            height: @heightHeader * .7;
            padding-top:  @heightHeader * .15;
            width: 100px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            cursor: pointer;
        }
    }

}
</style>
