import { slides } from './data.js';

const { createApp } = Vue;
createApp({
    data() {
        return {
            slides: slides, 
            activeIndexSlide: 0
        }
    }, 
    methods: {
        
        nextSlide() {
            if (this.activeIndexSlide>slides.length-1) {
            this.activeIndexSlide++;  
            } else {
                this.activeIndexSlide = 0
            }   
        }, 
        prevSlide() {
            if (this.activeIndexSlide>0) {
                this.activeIndexSlide++;  
                } else {
                    this.activeIndexSlide = this.slides.length-1;
                }   
            this.activeIndexSlide--;
        } 
    }, 
    mounted() {
        
    }
}).mount('#app');

console.log(slides);
/*per active su slide cliccata
@click sulle frecce faccio acriveindexslide +- 1
@click sull'anteprima faccio id della immagine === activeindexslide (forse -1)
*/