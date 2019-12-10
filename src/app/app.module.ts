import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightComponent } from './flight/flight.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material';
import { CustompipePipe } from './custompipe.pipe';
import { StopPipe } from './stop.pipe';
import { OnestoppipePipe } from './onestoppipe.pipe';
import { VistaraPipe } from './vistara.pipe';
import { CombinedstopPipe } from './combinedstop.pipe';



@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    CustompipePipe,
    StopPipe,
    OnestoppipePipe,
    VistaraPipe,
    CombinedstopPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
