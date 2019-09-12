<template>
  <div class="box">
    <h2>为您推荐以下品牌</h2>
    <div class="search">
      <input type="text" v-model='msg' placeholder="搜索您想要的品牌">
      <button @click='fn()'>搜索</button>
    </div>
    <ul>
      <li v-for='(i,index) in this.content'>{{i.categoryname}}
        <router-link :to="'./list/'+i.categoryid">
          <span class="list">了解详情</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import Axios from 'axios'
  import { RadioGroup, Radio } from 'vant';
  export default {
    components: {
      [RadioGroup.name]: RadioGroup,
      [Radio.name]: Radio
    },
    data() {
      return {
        // radio: '1'
        content: '',
        msg: ''
      }
    },
    created() {
      Axios.get('https://cnodejs.org/api/v1/topics').then(res => {
        console.log(res)
      })
      console.log(this.first.Symbol, this.two, this.three, this.Category)
      Axios.post('http://192.168.1.186:8080/category/select', {
        categorykind: this.Category,
        categorylist: [
          { 'fuhao': this.first.Symbol },
          { 'fuhao': this.two.Symbol },
          { 'fuhao': this.three.Symbol }
        ]
      }).then(res => {
        console.log(res)
        this.content = res.data.data
      })
    },
    methods: {
      fn() {
        Axios.post('http://192.168.1.186:8080/category/vague', {
          categorykind: this.Category,
          categoryname: this.msg
        }).then(res => {
          this.content = res.data.data
        })
      }
    },
    computed: {
      first() {
        return this.$store.state.first
      },
      two() {
        return this.$store.state.two
      },
      three() {
        return this.$store.state.three
      },
      Category() {
        return this.$store.state.information.Category
      }
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .search {
    margin-top: 50px
  }

  input {
    width: 62%;
    margin-left: 8%;
    height: 60px;
    line-height: 60px;
    border-radius: 10px;
    border: 1px solid grey;
    padding-left: 10px
  }

  button {
    border-radius: 10px;
    background-color: #4CB6B6;
    border: solid 1px grey;
    padding: 10px;
    width: 150px;
    text-align: center;
    color: white
  }

  h2 {
    text-align: center;
    margin-top: 50px;
    color: #4CB6B6
  }

  ul {
    list-style: none;
  }

  ul li {
    height: 100px;
    line-height: 100px;
    position: relative;
    border: solid 1px grey;
    width: 80%;
    margin: 0 auto;
    margin-top: 50px;
    padding-left: 25px;
    border-radius: 10px;
    border-left: solid 8px yellowgreen
  }

  .list {
    position: absolute;
    right: 50px;
    font-size: 20px;
    color: #4CB6B6
  }
</style>