import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingridient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.scss']
})
export class ShopingEditComponent implements OnInit {
  @ViewChild('name', { static: false }) name: ElementRef;
  @ViewChild('number', { static: false }) number: ElementRef;
  @Output() ingerdientAdded = new EventEmitter<Ingridient>();

  constructor() { }

  ngOnInit() {
  }

  upInputVal() {
    const inpName = this.name.nativeElement.value;
    const inpNumber = this.number.nativeElement.value;
    const newIngredient = new Ingridient(inpName, inpNumber)
    this.ingerdientAdded.emit(newIngredient)
  }
}
