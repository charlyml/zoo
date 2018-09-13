import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'animal',
  	templateUrl: './animal.component.html',
})

export class AnimalComponent implements OnInit {
  	title = 'Animales';

  	ngOnInit(){
  		console.log("animal.component cargado !!");
  	}
}