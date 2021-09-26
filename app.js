const app = Vue.createApp({
    //data, function,
    // template: '<h2>I am a Learner</h2>'

    data() {
        return {
            showbooks: true,
            title: 'I am a Learner',
            author: "me",
            age: 45
        }
    },

    methods: {
        changeTitle(title){
            this.title = title;
        },

        toggleShowbooks(){
            this.showbooks = !this.showbooks;
        }


    }

})

app.mount('#app')