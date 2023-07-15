<template>
  <title> 书籍管理系统 </title>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="isbn" label="ISBN" width="130" />
    <el-table-column prop="name" label="书籍名称" width="180" />
    <el-table-column prop="categories" label="书籍类别" width="180" />
    <el-table-column prop="author" label="作者" width="150"/>
    <el-table-column prop="press" label="出版社" />
    <el-table-column prop="press" label="图书浏览" >
      <el-image style="width: 100px; height: 100px" :src="url" :fit="fit" />
    </el-table-column>
    <el-table-column fixed="right" label="操作" width="120">
      <template #default>
        <el-button link type="primary" size="small" @click="tableData1"
        >编辑</el-button>
        <el-button link type="primary" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination style="margin-left: 30%" background layout="prev, pager, next" :total="1000" />
</template>

<script setup>
import {get} from "../net";
import {reactive} from "vue";
import axios from "axios";

const url = "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"

let bookList = reactive([{
  id: '',
  isbn: '',
  category: '',
  author: '',
  press: '',
  description: ''
}])


const tableData1 = () => {
  const _this = this
  get("/api/auth/upload/getAllBook",{
    // bookList : bookList
  })

  console.log(bookList);



  // axios.post("/api/auth/upload/create").then(
  //     result => {
  //       bookList = result.data.data;
  //       console.log(bookList);
  //     }
  //
  // )

}


const tableData = [
  {
    isbn: '123456789',
    name: 'java从入门到入土',
    categories: '计算机类',
    author: '零点',
    press: '清华出版社',
  },
  {
    isbn: '123456789',
    name: 'java从入门到入土',
    categories: '计算机类',
    author: '零点',
    press: '清华出版社',
  },
  {
    isbn: '123456789',
    name: 'java从入门到入土',
    categories: '计算机类',
    author: '零点',
    press: '清华出版社',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
