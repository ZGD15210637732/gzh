<template>
    <div class="hello">
        <p class="button">
            <router-link to="./brand">跳过</router-link>
        </p>
        <h2>花5秒钟让我们更了解您</h2>
        <h4>为您推荐更专业的方案</h4>
        <div class="content">
            <div>
                <p>
                    <span style="color:#4CB6B6 ">1/2</span>
                    <span>您期望的品牌的销售量是在多少？</span>
                </p>
                <van-radio-group v-model="radio1">
                    <van-radio :name="i.name" checked-color="#07c160" v-for='(i,index) in this.content1' :key="index"
                        @click='first1(i)'>{{i.text}}
                    </van-radio>
                </van-radio-group>
                <hr>
            </div>
            <div>
                <p>
                    <span style="color:#4CB6B6 ">2/2</span>
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
            first1(i) {
                this.$store.commit('first1click', i)
            },
            first2(i) {
                this.$store.commit('first2click', i)
            },
            fn() {
                if (this.two.Symbol == '' || this.three.Symbol == '') {
                   
                } else {
                    this.$router.push('./brand')
                }
            }
        },
        computed: {
            two() {
                return this.$store.state.two
            },
            three() {
                return this.$store.state.three
            }
        },
        created() {
            this.two.Symbol = '',
            this.three.Symbol = ''
            console.log(this.one)
        },
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import '../style/help.css';
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