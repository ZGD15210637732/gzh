<template>
    <div class="hello">
        <p class="button">
            <router-link to="./HelloWorld">跳过</router-link>
        </p>
        <h2>花5秒钟让我们更了解您</h2>
        <h4>为您推荐更专业的方案</h4>
        <div class="content">
            <!-- <hr>
            <p>
                <span style="color:#4CB6B6 ">1/3</span>
                <span>您期望的品牌的销售价格是在多少？</span>
            </p>
            <van-radio-group v-model="radio">
                <van-radio :name="i.name" checked-color="#07c160" v-for='(i,index) in this.content' :key="index"
                    @click='first(i)'>{{i.text}}
                </van-radio>
            </van-radio-group>
            <hr>
            </hr> -->
            <div>
                <p>
                    <span style="color:#4CB6B6 ">2/3</span>
                    <span>您期望的品牌的销售量是在多少？</span>
                </p>
                <van-radio-group v-model="radio1">
                    <van-radio :name="i.name" checked-color="#07c160" v-for='(i,index) in this.content1' :key="index"
                        @click='first1(i)'>{{i.text}}
                    </van-radio>
                    <!-- <van-radio name="2" checked-color="#07c160">50玩以下</van-radio> -->
                </van-radio-group>
                <hr>
            </div>
            <div>
                <p>
                    <span style="color:#4CB6B6 ">3/3</span>
                    <span>您期望的单品利润比是多少？</span>
                </p>
                <van-radio-group v-model="radio2">
                    <van-radio :name="i.name" checked-color="#07c160" v-for='(i,index) in this.content2' :key="index"
                        @click='first2(i)'>{{i.text}}
                    </van-radio>
                </van-radio-group>
            </div>
        </div>
        <div class="next" @click='fn()'>
            下一步
        </div>
    </div>
</template>

<script>
    import { RadioGroup, Radio } from 'vant';
    export default {
        components: {
            [RadioGroup.name]: RadioGroup,
            [Radio.name]: Radio
        },
        data() {
            return {
                radio: '1',
                radio1: '1',
                radio2: '1',
                content: [
                    {
                        text: '500元以上',
                        name: 1,
                        fuhao: '>500'
                    },
                    {
                        text: '500元以下',
                        name: 2,
                        fuhao: '<500'
                    }
                ],
                content1: [
                    {
                        text: '50万以上',
                        namer: 1,
                        fuhao: '>50'
                    },
                    {
                        text: '50万以下',
                        name: 2,
                        fuhao: '<50',
                    }
                ],
                content2: [
                    {
                        text: '4.8%以上',
                        name: 1,
                        fuhao: '>4.8',
                    },
                    {
                        text: '4.8%以下',
                        name: 2,
                        fuhao: '<4.8',
                    }
                ],
            }
        },
        methods: {
            first(i) {
                this.$store.commit('firstclick', i)
            },
            first1(i) {
                this.$store.commit('first1click', i)
            },
            first2(i) {
                this.$store.commit('first2click', i)
            },
            fn() {
                if ( this.two.Symbol == '' || this.three.Symbol == '') {
                    alert('请选择')
                } else {
                    this.$router.push('./HelloWorld')
                }
            }
        },
        computed: {
            one() {
                return this.$store.state.first
            },
            two() {
                return this.$store.state.two
            },
            three() {
                return this.$store.state.three
            }
        },
        created() {
            this.one.Symbol = '',
                this.two.Symbol = '',
                this.three.Symbol = ''
            console.log(this.one)
        },
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .button {
        padding: 10px 20px;
        display: inline-block;
        background-color: #D4E8EA;
        border-radius: 30px;
        font-size: 25px;
        position: relative;
        left: 620px;
        top: 40px
    }

    h2 {
        text-align: center;
        margin-top: 50px;
        color: #4CB6B6
    }

    h4 {
        text-align: center;
        margin-top: 30px
    }

    .content {
        width: 90%;
        margin: 0 auto;
        /* height: 500px; */
        margin-top: 30px;
        border-radius: 10px;
        border: solid 3px #4CB6B6
    }

    .content>div {
        padding: 15px;
        padding-bottom: 35px;
    }

    hr {
        width: 100%;
        margin: 0 auto;
        border: dashed 1px grey;
        margin-top: 50px
    }

    .next {
        width: 90%;
        margin: 0 auto;
        height: 100px;
        line-height: 100px;
        text-align: center;
        background-color: #4CB6B6;
        border: solid 3px #4CB6B6;
        margin-top: -8px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;

    }
</style>
<style>
    .content .van-radio {
        margin-top: 30px;
        height: 40px;
    }

    .content .van-radio__label {
        margin-left: 30px
    }
</style>