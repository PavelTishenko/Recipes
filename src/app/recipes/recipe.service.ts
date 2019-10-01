import { Recipe } from './recipes.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingridient } from '../shared/ingredients.model';
import { ShopingListService } from '../shoping-list/shoping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
    'Test',
    'This is test',
    'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/5/14/1/WU1902_Italian-Chicken-Sheet-Pan-Supper_s4x3.jpg.rend.hgtvcom.826.620.suffix/1526332485385.jpeg',
    [
      new Ingridient('Tomatoes', 5), new Ingridient('Fries', 6)
    ]),
    new Recipe('Pasta Fettuccine',
     ' Fettuccine with Olive Oil',
     'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2F11%2F04%2Ffettuccine-olive-oil-ck-x.jpg%3Fitok%3Dbt5Cny7R&w=450&c=sc&poi=face&q=85',
     [
      new Ingridient('Cheez', 15), new Ingridient('Tomatoes', 5)
     ])
  ];

  constructor(private shopingListService: ShopingListService){

  }
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShopingList(ingredients: Ingridient[]) {
    this.shopingListService.addIngredients(ingredients);
  }
}
