import { RecipeService } from './../../../shared/recipe.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
  providers:[RecipeService]
})
export class RecipeItemComponent implements OnInit {
 @Input() recipe: Recipe;
 @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
  this.recipeSelected.emit();   
  }

}
