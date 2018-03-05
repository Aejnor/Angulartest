import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {MyNameComponent} from './my-name/my-name.component';
import { MiPrimeraDirectivaDirective } from './directivas/mi-primera-directiva.directive';
import { MiSegundaDirectivaDirective } from './directivas/mi-segunda-directiva.directive';
import { MiTerceraDirectivaDirective } from './directivas/mi-tercera-directiva.directive';
import { ClasePadreComponent } from './interaccion/clase-padre.component';
import { ClaseHijaComponent } from './interaccion/clase-hija.component';
import { PruebaHijoComponent } from './prueba-hijo/prueba-hijo.component';
import { PruebaPadreComponent } from './prueba-padre/prueba-padre.component';

@NgModule({
    declarations: [
        AppComponent,
        MyNameComponent,
        MiPrimeraDirectivaDirective,
        MiSegundaDirectivaDirective,
        MiTerceraDirectivaDirective,
        ClasePadreComponent,
        ClaseHijaComponent,
        PruebaHijoComponent,
        PruebaPadreComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
