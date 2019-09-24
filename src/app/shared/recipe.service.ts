import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipe = {
    name: '',
    description: '',
    imgURL: ''
  }
  constructor() { }
}
