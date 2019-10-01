import { Ingridient } from '../shared/ingredients.model';
import { EventEmitter } from '@angular/core';

export class ShopingListService {
  ingerdientAdded = new EventEmitter<Ingridient[]>()

  private ingredients: Ingridient[] = [
    new Ingridient('Apples', 5),
    new Ingridient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngrediant(ingredient: Ingridient) {
    this.ingredients.push(ingredient);
    this.ingerdientAdded.emit(this.ingredients.slice());
  }
}
