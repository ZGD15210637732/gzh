import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        content: '',
        first: {
            Symbol: '',
        },
        two: {
            Symbol: '',
        },
        three: {
            Symbol: '',
        },
        information: [
            {
                name: '',
            }, {
                phone: ''

            }, {
                Category: '',
            }
        ]
    },
    mutations: {
        firstclick(state, book) {
            state.first.Symbol = book.fuhao
        },
        first1click(state, book) {
            state.two.Symbol = book.fuhao
        },
        first2click(state, book) {
            state.three.Symbol = book.fuhao
        },
        Category(state, book) {
            state.information.Category = book
        },
        All(state, me) {
            console.log(me)
            state.information.name = me.name,
            state.information.phone = me.phone
        }
    }
})

export default store