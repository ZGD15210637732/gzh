<template>
  <div class="box">
    <h2>为您推荐以下品牌</h2>
    <div class="search">
      <input type="text" v-model='msg' placeholder="搜索您想要的品牌">
      <button @click='fn()'>搜索</button>
    </div>
    <ul>
      <li v-for='(i,index) in this.content' :key="index">{{i.categoryname}}
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
        content: '',
        msg: ''
      }
    },
    created() {
      console.log(this.two, this.three, this.Category)
      Axios.post('http://49.234.12.56:8010/baby/category/select', {
        categorykind: this.Category,
        categorylist: [
          { 'fuhao': '' },
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
        Axios.post('http://49.234.12.56:8010/baby/category/vague', {
          categorykind: this.Category,
          categoryname: this.msg
        }).then(res => {
          this.content = res.data.data
        })
      }
    },
    watch: {
      msg() {
        Axios.post('http://49.234.12.56:8010/baby/category/vague', {
          categorykind: this.Category,
          categoryname: this.msg
        }).then(res => {
          this.content = res.data.data
        })
      }
    },
    computed: {
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
   @import '../style/brand.css';
</style>