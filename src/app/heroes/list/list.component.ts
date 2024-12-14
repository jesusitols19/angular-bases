import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: false
})
export class ListComponent {


  public heroNames:string[] = ["Spiderman","IronMan","Hulk","She Hulk","Thor"];
  public deletedHero?:string;

  removeLastHero():void{
    this.deletedHero = this.heroNames.pop();
  }

}