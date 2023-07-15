<template>
  <div style="text-align: center;margin: 0 20px">
    <div style="margin-top: 50px">
      <el-form :model="formBook" ref="formRef">
        <el-form-item prop="isbn">
          <el-input v-model="formBook.isbn" :maxlength="10" type="text">
            <template #prefix>
              <el-icon><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="category">
          <el-input v-model="formBook.category" :maxlength="16" type="text">
            <template #prefix>
              <el-icon><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="author">
          <el-input v-model="formBook.author" :maxlength="16" type="text">
            <template #prefix>
              <el-icon><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="press">
          <el-input v-model="formBook.press" type="text">
            <template #prefix>
              <el-icon><Message /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="description">
          <el-input v-model="formBook.description" type="text">
            <template #prefix>
              <el-icon><Message /></el-icon>
            </template>
          </el-input>
        </el-form-item>
      </el-form>

    </div>
    <!--<el-upload-->
    <!--    class="avatar-uploader"-->
    <!--    action="http://localhost:8080/api/auth/upload/uploadtodisk"-->
    <!--    name="imgFile"-->
    <!--    v-model="formBook.avatar"-->
    <!--    :show-file-list="false"-->
    <!--    :on-success="handleAvatarSuccess"-->
    <!--    :before-upload="beforeAvatarUpload"-->

    <!--&gt;-->
    <!--  <img v-if="form.avatar" :src="form.avatar" class="avatar" />-->
    <!--  <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>-->
    <!--</el-upload>-->
    <div style="margin-top: 20px">
      <el-button style="width: 270px" type="warning" @click="createBook" plain>立即添加</el-button>
    </div>
  </div>
</template>

<script setup>
import {EditPen, Lock, Message, User} from "@element-plus/icons-vue";
import router from "@/router";
import {reactive, ref} from "vue";
import {ElMessage} from "element-plus";
import {post} from "@/net";






//
const formBook = reactive({
  isbn: '',
  category: '',
  author: '',
  press: '',
  description: ''
})




const formRef = ref()




const createBook = () => {
      const _this = this
      post('/api/auth/upload/create', {
        isbn: formBook.isbn,
        category: formBook.category,
        author: formBook.author,
        press: formBook.press,
        description: formBook.description
      }, (message) => {
        ElMessage.success(message)
        router.push("/index/book")
      })
}



const handleAvatarSuccess = (success) => {
  // let myFile = ref([])
  // console.log(myFiles.value);
  // console.log(success.message);
  form.avatar = success.message;
}

const beforeAvatarUpload = () => {
  // let file = ref([])
  // const isJPG = file.type === 'image/jpeg';
  // const isLt2M = file.size / 1024 / 1024 < 2;
  // console.log(isJPG)
  // if (!isJPG) {
  //   ElMessage.warning('上传头像图片只能是 JPG 格式!');
  // }
  // if (!isLt2M) {
  //   ElMessage.warning('上传头像图片大小不能超过 2MB!');
  // }
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
  width: 120px;
  height: 120px;
  text-align: center;
}
</style>