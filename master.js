var app = new Vue ({
    el: "#app",

    data: {
        todoElements: [
            "Fare la spesa",
            "Studiare Vue JS",
            "Fare palestra",
            "Andare in discoteca"
        ],
        newElement: "",
    },

    methods: {
        addElement() {
            this.todoElements.push(this.newElement);
            this.newElement = "";
        },
        removeElement(index) {
            this.todoElements.splice(index, 1);
        }
    },

});