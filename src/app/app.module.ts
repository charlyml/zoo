import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

//Import our new modules
import { ModuloEmailModule } from './moduloemail/moduloemail.module';

//Components
import { AppComponent } from './app.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ParqueComponent } from './components/parque/parque.component';
import { AnimalComponent } from './components/animal/animal.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { KeeperComponent } from './components/keeper/keeper.component';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParqueComponent,
    AnimalComponent,
    ContactComponent,
    HomeComponent,
    KeeperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ModuloEmailModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
