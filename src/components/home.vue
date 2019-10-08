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
      <ul>
        <li>
          <input type="text" v-model='me.name' placeholder="请输入真实姓名" />
          <img src="../assets/icon/1.png" alt id="inpt1" />
        </li>
        <li>
          <p class="Tips" v-if='show'>请输入真实姓名</p>
        </li>
        <li>
          <input type="text" v-model='me.phone' placeholder="请输入联系方式" />
          <img src="../assets/icon/2.png" alt id="inpt2" />
        </li>
        <li>
          <p class="Tips" v-if='show1'>请输入正确的手机号！</p>
        </li>
        <li>
          <img src="../assets/icon/3.png" alt id="inpt3" />
          <select v-model='Category'>
            <option value="" selected>请选择商品类目</option>
            <option v-for='(i,index) in this.content' :value="i.value">{{i.text}}</option>
          </select>
        </li>
        <li>
          <p class="Tips" v-if='show2'>请选择类目</p>
        </li>
      </ul>
    </div>
    <button class="button" @click='fn()'>
      提交
    </button>
  </div>
</template>

<script>
  import Axios from 'axios'
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
        ],
        Category: '',
        show: false,
        show1: false,
        show2: false,
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
      fn() {
        var regex = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
        var nameReg = /^[\u4E00-\u9FA5]{2,4}$/
        //  正则
        if (!nameReg.test(this.me.name) || this.me.name === '') {
          this.show = true
        } else {
          this.show = false
          if (!regex.test(this.me.phone) || this.me.phone === '') {
            this.show1 = true
          } else {
            this.show1 = false
            if (this.Category === '') {
              this.show2 = true
            } else {
              Axios.post('http://49.234.12.56:8010/baby/userbaby/add', {
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
            }
          }
        }
        this.$store.commit('Category', this.Category)
        this.$store.commit('All', this.me)
      }
    },
    created() {
     
    },
  };
</script>

<style scoped>
  @import '../style/home.css';
</style>