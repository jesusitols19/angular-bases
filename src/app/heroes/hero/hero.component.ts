import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  standalone: false
})
export class HeroComponent {
  public name:string = "Victor";

  public age:number = 20;

  public metodo:string = "";

  public capitalizado:string = "";

  get capitalizeName():String{
    return "Hola mundo".toUpperCase();
  }

  getHeroDescription():String{
    
    return `${this.name} - ${this.age}`;
  }


  changeName():void{
    this.name = "spiderman";
  }

  changeAge():void{
    this.age = 25;
  }

  resetForm(){
    this.name = "Victor";
    this.age = 20;
  }

}
