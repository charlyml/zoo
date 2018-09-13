//import modules to create modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Import components

import { GuardarEmailComponent } from './components/guardar-email/guardar-email.component';
import { MostrarEmailComponent } from './components/mostrar-email/mostrar-email.component';
import { MainEmailComponent } from './components/main-email/main-email.component';

//Decorator ngModule to load components and configurations of modules
@NgModule({
	imports: [CommonModule, FormsModule],
	declarations: [ //Load all our modules
		GuardarEmailComponent,
		MostrarEmailComponent,
		MainEmailComponent
	],

	exports: [MainEmailComponent] //principal component
})

export class ModuloEmailModule {}