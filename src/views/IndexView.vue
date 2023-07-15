
<template v-slot:default>
  <div :class="['content',isCollapse?'menu--fold':'menu--unfold']">
    <!-- 侧边菜单栏 -->
    <div class="menuLeft">
      <div class="menu-nav-header">
        <span>{{isCollapse?'控制台':'管理控制台'}}</span>
      </div>
      <!--todo 菜单栏组件 -->
    </div>
    <!-- 右边内容 -->
    <div class="content-main">
      <div class="navTop horizontalView">
        <div class="nav_tools horizontalView">
          <SvgIcon :name="isCollapse?'expand':'fold'" class="icon-svg" @click="isCollapse=!isCollapse" />
        </div>
      </div>
      <!-- todo 内容组件 -->
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  data: function() {
    return {
      isCollapse: false

    }
  }
}
</script>

<!--<style>-->
<!--@import url('../assets/css/home.css');-->
<!--</style>-->

















<!--<template>-->
<!--  <div>-->
<!--      欢迎{{store.auth.user.username}}进入到学习平台-->
<!--  </div>-->
<!--  <div>-->
<!--      <el-button @click="logout()" type="danger" plain>退出登录</el-button>-->
<!--  </div>-->
<!--  -->



<!--</template>-->

<!--<script setup>-->
<!--import {get} from "@/net";-->
<!--import {ElMessage} from "element-plus";-->
<!--import router from "@/router";-->
<!--import {useStore} from "@/stores";-->

<!--const store = useStore()-->

<!--const logout = () => {-->
<!--    get('/api/auth/logout', (message) => {-->
<!--        ElMessage.success(message)-->
<!--        store.auth.user = null-->
<!--        router.push('/')-->
<!--    })-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->