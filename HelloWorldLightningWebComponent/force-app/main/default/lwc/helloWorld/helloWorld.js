import { LightningElement, track } from 'lwc';
    export default class HelloWorld extends LightningElement {
        @track ggreeting = 'World';
        changeHandler(event) {
            this.ggreeting = event.target.value;
        }
    }