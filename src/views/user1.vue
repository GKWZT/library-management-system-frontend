<template>
  <el-upload
      class="avatar-uploader"
      action="http://localhost:8080/api/auth/upload/uploadtodisk"
      name="imgFile"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
  >
    <img v-if="ruleForm.avatar" :src="ruleForm.avatar" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
  </el-upload>
</template>

<script setup>
import {reactive, ref} from 'vue'

const ruleForm = reactive({
  avatar: ''
})



//保存要上传的文件

console.log()


const handleAvatarSuccess = (success) => {
  let myFile = ref([])
  // console.log(myFiles.value);
  // console.log(success.message);
  ruleForm.avatar = success.message;
}









</script>

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
