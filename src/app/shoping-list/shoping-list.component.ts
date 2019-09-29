import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/ingredients.model';
import { ShopingListService } from './shoping-list.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.scss']
})
export class ShopingListComponent implements OnInit {


  ingredients: Ingridient[];
  constructor(private shopingListService: ShopingListService) { }

  ngOnInit() {
    this.ingredients = this.shopingListService.getIngredients();
  }

  // onIngredientAdded(ingredient: Ingridient) {
  //   this.ingredients.push(ingredient);
  // }


}
