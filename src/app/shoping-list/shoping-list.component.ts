import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.scss']
})
export class ShopingListComponent implements OnInit {


  ingredients: Ingridient[] = [
    new Ingridient('Apples', 5),
    new Ingridient('Tomatoes', 10),

  ];
  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: Ingridient) {
    this.ingredients.push(ingredient);
  }


}
