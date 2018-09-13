import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'keepers',
  	templateUrl: './keeper.component.html',
})

export class KeeperComponent implements OnInit {
  	title = 'Ciudadores';

  	ngOnInit(){
  		console.log("keeper.component cargado !!");
  	}
}