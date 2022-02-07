// ? VUE-SLIDER

/* Descrizione:
Partendo dal markup fornito in allegato, implementare la logica per far funzionare lo slider:
Deve essere possibile scorrere le immagini cliccando sulle freccette.
I pallini in basso devono illuminarsi in base all'immagine che sto visualizzando.
Far si che cliccando i pallini, venga selezionata l'immagine corrispondente. */

console.log('Vue ok', Vue);

Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {

        currentIndex: 0,
        media: [
            'images/image1.jpg',
            'images/image2.jpg',
            'images/image3.jpg',
            'images/image4.jpg',
        ],
    },

    methods: {
        isActive(index) {
            return index === this.currentIndex;
        },

        prevPic() {
            if (this.currentIndex === 0) {
                this.currentIndex = this.media.length - 1;
            } else {
                this.currentIndex--;
            }
        },

        succPic() {
            if (this.currentIndex === this.media.length - 1) {
                this.currentIndex = 0;
            } else {
                this.currentIndex++;
            }
        },

        setIndex(index) {
            this.currentIndex = index;
        },

    },
});