<template>
  <div class="hello">
    <!-- 标题 -->
    <p class="text">加入合伙人</p>
    <!-- logo -->
    <div class="img">
      <img src="../assets/e307a13f4f8d4e238e67906bdbe3cc9.png" alt />
    </div>
    <!-- 输入框 -->
    <div class="inpt">
      <input type="text" v-model='me.name' placeholder="请输入真实姓名" />
      <img src="../assets/icon/1.png" alt id="inpt1" />
      <input type="text" v-model='me.phone' placeholder="请输入联系方式" @blur="ker" ref="uaername" />
      <img src="../assets/icon/2.png" alt id="inpt2" />
      <!-- <input type="text" placeholder="请选择类目" @click="hh" /> -->
      <img src="../assets/icon/3.png" alt id="inpt3" />
      <select v-model='Category'>
        <option value="" selected>请选择商品类目</option>
        <option v-for='(i,index) in this.content' :value="i.value">{{i.text}}</option>
      </select>
    </div>
    <button class="button" @click='fn()'>
      <!-- <router-link to="./help"> -->
      提交
      <!-- </router-link>   -->
    </button>
  </div>
</template>

<script>
  import Axios from 'axios'

  import API from '../request/api.js'
  export default {
    data() {
      return {
        me: [
          {
            name: '',
          },
          {
            phone: '',
          }
          // {
          //   Category: '',
          // }
        ],
        Category:'',
        content: [
          { text: '女装', value: 0 },
          { text: '男装', value: 1 },
          { text: '鞋靴', value: 2 },
          { text: '配饰', value: 3 },
          { text: '箱包', value: 4 },
          { text: '母婴', value: 5 },
          { text: '美妆护肤', value: 6 },
          { text: '成人', value: 7 },
          { text: '户外运动', value: 8 },
          { text: '数码家电', value: 9 },

        ]
      }
    },
    methods: {
      ker() {
        var str = this.$refs.uaername.value;
        var regex = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
        // 判断为空
        if (str === '') {
          return
        };
        //  正则
        if (!regex.test(str)) {
          alert('请输入正确的手机号！');
        }
      },
      fn() {
        console.log(this.Category)
        Axios.post('http://192.168.1.186:8080/userbaby/add', {
          username: this.me.name,
          mobile: this.me.phone,
          kind: this.Category,
          status: '0'
        }).then(res => {
          console.log(res)
          if (res.data.code == 200) {
            this.$router.push('./help')
          }
        })
        this.$store.commit('Category', this.Category)
        this.$store.commit('All', this.me)
      }
    },
    created() {

    },
  };
</script>

<style scoped>
  select {
    text-indent: 80px;
    width: 100%;
    height: 87px;
    border-radius: 43.5px;
    margin-top: 33px;
    border: 1px solid #e5e5e5;
    background-color: white;
    font-size: 35px;
    padding-left: 30px;
    color: #757575;
    outline: none;
  }

  .text {
    text-align: center;
    font-size: 40px;
    margin-top: 100px;
    color: #51b8b8;
  }

  .img {
    width: 155px;
    height: 210px;
    margin: 0 auto;
    margin-top: 80px;
  }

  .img img {
    width: 100%;
    height: 100%;
  }

  .inpt {
    position: relative;
    width: 633px;
    margin: 0 auto;
    margin-top: 50px;
  }

  .inpt input {
    text-indent: 80px;
    width: 95%;
    height: 87px;
    border-radius: 43.5px;
    margin-top: 33px;
    border: 1px solid #e5e5e5;
    font-size: 35px;
    color: #b8b8b8;
    padding-left: 30px;
  }

  .inpt img {
    width: 47px;
    height: 47px;
    position: absolute;
    left: 20px;
    margin-left: 10px;
  }

  #inpt1 {
    top: 55px;
  }

  #inpt2 {
    top: 177px;
  }

  #inpt3 {
    top: 300px;
  }

  input {
    outline: none;
  }

  .button {
    padding: 25px 0px;
    width: 300px;
    text-align: center;
    border-radius: 50px;
    border: 0;
    color: white;
    background-color: #51b8b8;
    margin-top: 50px;
    margin-left: 225px
  }
</style>