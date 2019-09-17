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
                    <p>{{content.categorypricebetween}}</p>
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
                <!-- <li>
                    <img src="../assets/logo1.png" alt="">
                    <p>飞亚达</p>
                </li>
                <li>
                    <img src="../assets/logo1.png" alt="">
                    <p>罗西尼</p>
                </li>
                <li>
                    <img src="../assets/logo1.png" alt="">
                    <p>海鸥</p>
                </li> -->
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
            Axios.post('http://192.168.1.186:8010/baby/category/SelectById', {
                categoryid: this.a
            }).then(res => {
                this.content = res.data.data
                console.log(this.content)
            })
            Axios.post('http://192.168.1.186:8010/baby/category/selectall', {
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
                Axios.post('http://192.168.1.186:8010/baby/category/SelectById', {
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
                    Axios.post('http://192.168.1.186:8010/message/add', {
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
    .logo {
        width: 300px;
        height: 300px;
        margin-left: 100px;
        margin-top: 50px
    }

    .content {
        margin-top: -180px
    }

    .title {
        margin-left: 450px
    }

    h3 {
        height: 100px;
        line-height: 100px;
        width: 200px;
        text-align: center
    }

    .Apply {
        height: 60px;
        line-height: 60px;
        width: 200px;
        text-align: center;
        background-color: gold;
        border-radius: 50px
    }

    .list {
        padding-top: 40px;
        padding-bottom: 60px
    }

    .list ul {
        display: flex;
        list-style: none;
        margin-top: 50px
    }

    .list ul li {
        flex: 1;
        text-align: center
    }

    .two {
        font-size: 25px;
        color: gray
    }

    hr {
        width: 80%;
        margin: 0 auto;
        border: dashed 1px grey
    }

    .jieshao {
        width: 80%;
        margin: 0 auto;
        padding: 50px 0px;
        color: grey
    }

    .More {
        margin-left: 10%;
        border-left: 5px solid goldenrod;
        padding-left: 10px
    }

    .brand ul {
        list-style: none;
        display: flex;
        margin-top: 40px;
        width: 80%;
        margin: 0 auto;
        margin-top: 50px
    }

    .brand ul li {
        flex: 1;
        text-align: center
    }

    .brand ul li img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        text-align: center
    }

    .brand ul li p {
        margin-top: 20px;
        font-size: 25px
    }
</style>