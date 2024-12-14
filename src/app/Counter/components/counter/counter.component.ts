import { Component} from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <p>{{counter}}</p>
        <button (click)="this.increaseBy(+1)">+1</button>
        <button (click)="this.resetCounter()">reset</button>
        <button (click)="this.increaseBy(-1)"> -1</button>
    `,
    standalone: false,
})

export class CounterComponent{
    
    public counter: number = 10;

    increaseBy(value:number){
        this.counter += value;
    }

    resetCounter(){

        this.counter = 10;
    }

}