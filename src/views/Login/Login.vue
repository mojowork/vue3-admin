<template>
    <div class="login-container">
        <div class="login-bg">
            <img src="@/assets/login-bg.png" />
        </div>
        <el-card class="login-content" shadow="always">
            <h5>欢迎登录</h5>
            <el-form :model="loginFrom" status-icon ref="loginFrom" label-width="0px">
                <el-form-item label="" prop="username">
                    <el-input type="text" v-model="loginFrom.username" placeholder="请输入账户"></el-input>
                </el-form-item>
                <el-form-item label="" prop="passwd">
                    <el-input type="password" v-model="loginFrom.passwd" placeholder="请输入密码" autocomplete="off"></el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm">提交</el-button>
                </div>
            </el-form>
        </el-card>
    </div>
</template>

<script lang="ts">
import { reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { homePage } from '../../router'
export default {
  name: 'login',
  setup (props: any, ctx: any) {
    const loginFrom = reactive({
      username: 'chaos',
      passwd: '123456'
    })
    const store = useStore()
    const router = useRouter()
    const submitForm = () => {
      console.log('submitForm', store)
      store.dispatch('user/LOGIN')
        .then(data => {
          router.push({ path: homePage })
        })
    }
    return {
      loginFrom,
      submitForm
    }
  }

}
</script>

<style lang="less" scoped>

    .login-container {
        width: 100%;
        min-width: 1000px;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: @colorBg;
        .login-content {
            flex: 450px 0;
            height: 422px;
            margin-left: 80px;
            h5 {
                text-align: center;
                font-size: 28px;
                font-weight: bold;
                color: #0d1a26;
                line-height: 48px;
                letter-spacing: 1px;
            }
            /deep/ .el-input {
                display: inline-block;
                height: 47px;
                width: 80%;
                input {
                    border: 0px;
                    -webkit-appearance: none;
                    border-radius: 0px;
                    padding: 12px 5px 12px 15px;
                    height: 47px;
                    background: transparent;
                }
            }

            /deep/ .el-form-item {
                border-bottom: 1px solid #cfd3d8;
            }
        }
        .login-btn {
            button {
                width: 100%;
                height: 44px;
                border-radius: 5px;
                font-size: 16px;
                margin: 24px 0 60px;
                background: rgba(67, 145, 255, 1);
                box-shadow: 0px 0px 4px -1px rgba(76, 76, 76, 0.42);
            }
        }
    }
</style>
