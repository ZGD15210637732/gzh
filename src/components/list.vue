<template>
    <div class="hello">
        <img :src="content.categorypicture" alt="" class="logo">
        <div class="content">
            <div class="title">
                <h3>{{content.categoryname}}</h3>
                <p class="Apply" @click='fn()'>申请入驻</p>
            </div>
        </div>
        <div class="list">
            <ul>
                <li>
                    <p>{{content.categorysales}}</p>
                    <p class="two">销量</p>
                </li>
                <li>
                    <p>{{content.categorybetween}}</p>
                    <p class="two">价格区间</p>
                </li>
                <li>
                    <p>{{content.categoryliren}}%</p>
                    <p class="two">利润比</p>
                </li>
            </ul>
        </div>
        <hr>
        <p class="jieshao">
            {{content.categorydetails}}
        </p>
        <p class="More">更多品牌</p>
        <div class="brand">
            <ul>
                <li v-for='(item,index) in this.More'>
                    <router-link :to="'../list/'+item.categoryid">
                        <img :src="item.categorypicture" alt="">
                        <p>{{item.categoryname}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { Dialog } from 'vant'
    import Axios from 'axios'
    export default {
        data() {
            return {
                content: '',
                content1: '',
                More: [],
                a: ''
            }
        },
        created() {
            this.a = this.$route.params.id
            Axios.post('http://49.234.12.56:8010/baby/category/SelectById', {
                categoryid: this.a
            }).then(res => {
                this.content = res.data.data
                console.log(this.content)
            })
            Axios.post('http://49.234.12.56:8010/baby/category/selectall', {
                categorykind: this.information.Category
            }).then(res => {
                this.content1 = res.data.data
                for (let i = 0; i < 4; i++) {
                    let item = parseInt(this.content1.length * Math.random());
                    this.More.push(this.content1[item])
                }
            })
        },
        watch: {
            $route() {
                this.a = this.$route.params.id
            },
            a() {
                this.a = this.$route.params.id
                Axios.post('http://49.234.12.56:8010/baby/category/SelectById', {
                    categoryid: this.a
                }).then(res => {
                    this.content = res.data.data
                })
            }
        },
        methods: {
            fn() {
                Dialog.confirm({
                    title: '确认入住',
                }).then(() => {
                    Axios.post('http://49.234.12.56:8010/baby/message/add', {
                        username: this.information.name,
                        mobile: this.information.phone,
                        categoryname: this.content.categoryname,
                        messagestatus: '1',
                        kind: this.information.Category,
                    }).then(res => {
                        console.log(res)
                        this.$router.push('../end')
                    })
                }).catch(() => {
            
                });

            }
        },
        computed: {
            information() {
                return this.$store.state.information
            }
        },
        components: {
            [Dialog.name]: Dialog
        },
    }   
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   @import '../style/list.css';   
</style>