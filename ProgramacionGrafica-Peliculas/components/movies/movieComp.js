let MovieComp = {
    template: `<div class="card">

                    <img :src="cover" class="card-img-top">
                    <div class="card-body">
                        <h2 class="card-title" v-text="title"></h2>
                        <p class="card-text" v-text="synopsis"></p>
                        <button class="btn btn-light" @click="toggleLike" v-text="like ? 'Favorita' : 'Agregar a favoritas'"></button>
                    </div>
                    
                </div>`,

    props: {
        id:{
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        synopsis: {
            type: String,
            default: 'No posee sinopsis'
        },
        cover: {
            type: String,
            required: true
        },
        like: {
            type: Boolean,
            required: true,
            default(){
                return false
            }
        }
    },
    methods: {
        toggleLike(){
            
                let movie = this.$parent.movies.find(m => m.id == this.id)
                movie.like = !this.like
                this.$parent.showFav = !this.like

                this.$parent.sayHello()
            // this.$emit('toggleLike', data)
        }
    }

}