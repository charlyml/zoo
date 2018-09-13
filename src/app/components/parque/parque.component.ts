import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector : 'parque',
	templateUrl : './parque.component.html',
	//styleUrls: ['./parque.component.css']
})

export class ParqueComponent {
	@Input() nombre: string;
	public metros: number;
	public vegetacion: string;
	public abierto: boolean;

	@Output() pasameDatos = new EventEmitter();

	constructor(){
		this.nombre = "Parque natural para caballos";
		this.metros = 450;
		this.vegetacion = "Alta";
		this.abierto = true;
	}

	emitirEvento() {
		this.pasameDatos.emit({
			'nombre' : this.nombre,
			'metros' : this.metros ,
			'vegetacion' : this.vegetacion,
			'abierto' : this.abierto
		});
	}
}