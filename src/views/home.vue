<template v-slot:default>
  <div :class="['content',isCollapse?'menu--fold':'menu--unfold']">
    <!-- 侧边菜单栏 -->
    <div class="menuLeft">
      <div class="menu-nav-header">
        <span>{{isCollapse?'控制台':'图书管理控制台'}}</span>
        <!--todo 菜单栏组件 -->
        <el-menu active-text-color="#fff" background-color="#263238" class="el-menu-vertical-demo"
                 :collapse-transition="false" default-active="2" text-color="#96a4ab " @open="handleOpen"
                 @close="handleClose" :collapse="isCollapse">
          <el-menu-item index="1" @click="$router.push({ name: 'home-book' })">
            <SvgIcon name="home" class="icon-svg" />
            <span slot="">&nbsp;&nbsp;首页</span>
          </el-menu-item>
          <el-sub-menu index="2">
            <template #title>
              <SvgIcon name="img" class="icon-svg" />
              <span>&nbsp;&nbsp;图片管理</span>
            </template>
            <el-menu-item index="1-1">
              <SvgIcon name="img" class="icon-svg" />
              <span>&nbsp;&nbsp;图片1</span>
            </el-menu-item>
            <el-menu-item index="1-2">
              <SvgIcon name="img" class="icon-svg" />
              <span>&nbsp;&nbsp;图片2</span>
            </el-menu-item>
            <el-sub-menu index="1-4">
              <template #title>
                <SvgIcon name="img" class="icon-svg" />
                <span>&nbsp;&nbsp;图片3</span>
              </template>
              <el-menu-item index="1-4-1">
                <SvgIcon name="img" class="icon-svg" />
                <span>&nbsp;&nbsp;图片三级子菜单</span>
              </el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <SvgIcon name="collection" class="icon-svg" />
              <span>&nbsp;&nbsp;收藏管理</span>
            </template>
            <el-menu-item index="3">
              <SvgIcon name="collection" class="icon-svg" />
              <span class="icon-text">&nbsp;&nbsp;收藏</span>
            </el-menu-item>
          </el-sub-menu>

          <el-menu-item index="4" @click="$router.push({ name: 'home-user' })">
            <SvgIcon name="user" class="icon-svg" />
            <span>&nbsp;&nbsp;用户设置</span>

          </el-menu-item>

        </el-menu>
      </div>
      <!--todo 菜单栏组件 -->
    </div>
    <!-- 右边内容 -->
    <div class="content-main">
      <div class="navTop horizontalView">
        <div class="nav_tools horizontalView">
          <SvgIcon :name="isCollapse?'expand':'fold'" class="icon-svg" @click="isCollapse=!isCollapse" />
        </div>
        <span style="margin-right: 730px">欢迎{{store.auth.user.username}}登陆图书管理系统</span>
        <el-avatar :size="40" :src="store.auth.user.avatar"></el-avatar>
      </div>
      <!-- todo 内容组件 -->
      <router-view/>

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


<script setup>

import {useStore} from "@/stores";
const store = useStore()
</script>


<style>
@import url('../assets/css/home.css');
</style>
