const {
    createApp
} = Vue;
const application = createApp({
    data: () => ({
        id: 0,
        nombre: "",
        fecha: "",
        inicio: "",
        fin: "",
        data: [],
        cont: 0
    }),

    created() {
        this.getData();
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {

            this.data = JSON.parse(localStorage.getItem("Data"));

            if (this.data === null || this.data === "") {
                localStorage.setItem("Data", JSON.stringify([]));
            } else {

                this.data = JSON.parse(localStorage.getItem("Data"));
            }

        },

        newReserve() {
            if (this.data.length === 0) {
                this.id = 1;
            } else {
                this.id = ((this.data[this.data.length - 1].id) + 1);
            }

            this.data.push({ "id": this.id, "content": this.nombre, "start": this.fecha + " " + this.inicio, "end": this.fecha + " " + this.fin, "init": this.inicio, "finish": this.fin });
            localStorage.setItem("Data", JSON.stringify(this.data));
        },

        deleteReserve(idFront) {

            this.data = JSON.parse(localStorage.getItem("Data"));
            this.data.splice(this.data.indexOf(elem => elem.id === idFront, 1));
            localStorage.setItem("Data", JSON.stringify(this.data));
            location.reload();
        },
    }

});
application.mount('#app')