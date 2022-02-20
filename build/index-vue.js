const app = Vue.createApp({
    data: ()=>({
        isFormShow: false,
        formRate:0,
        rates: [],
        calculated_rate: 0
    }),
    mounted() {
        this.fetchRate()
    },
    methods: {
        submitForm(e) {
            const fd = new FormData(e.target)
            axios.post("/api/submit-review", fd).then(resp => {
                this.isFormShow = false
            }).catch(e => {
                alert("failed to submit review")
            })
        },
        fetchRate() {
            axios.get("/api/product/1").then(resp => resp.data).then(data => {
                this.rates = data.data.rates
                var calculated_rate = data.data.calculated_rate
                if((calculated_rate % 1) >= 0.5) {
                    this.calculated_rate = Math.ceil(calculated_rate)
                }else {
                    this.calculated_rate = Math.floor(calculated_rate)
                }
            })
        }
    }
})
app.component('star-rating', VueStarRating.default)
app.mount('#app')