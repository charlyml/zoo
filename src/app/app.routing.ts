import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { TiendaComponent } from './components/tienda/tienda.component';
import { AnimalComponent } from './components/animal/animal.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { KeeperComponent } from './components/keeper/keeper.component';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'animals', component: AnimalComponent },
	{ path: 'contact', component: ContactComponent},
	{ path: 'keepers', component: KeeperComponent},
	{ path: 'store', component: TiendaComponent},
	{ path: '**', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);