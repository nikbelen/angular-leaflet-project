import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MarkerService } from './map/marker.service';

import routes, { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { MapComponent } from './map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PopularComponent } from './popular/popular.component';
import { FaqComponent } from './faq/faq.component';
import { provideRouter } from '@angular/router';
import { MapPageComponent } from './map/map-page/map-page.component';

import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { GameComponent } from './popular/game/game.component';
import { MeetingComponent } from './map/meeting/meeting.component';
import { MapPageCenteredComponent } from './map/map-page-centered/map-page-centered.component';
import { LoginComponent } from './auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { AccountComponent } from './auth/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent,
    HomeComponent,
    PopularComponent,
    FaqComponent,
    MapPageComponent,
    GameComponent,
    MeetingComponent,
    MapPageCenteredComponent,
    LoginComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [
    provideRouter(routes),
    MarkerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
