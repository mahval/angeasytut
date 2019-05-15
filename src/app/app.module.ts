import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdoptiveListComponent } from './adoptive-list/adoptive-list.component';
import { AdoptiveDetailComponent } from './adoptive-detail/adoptive-detail.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'adoption/:animal',
    component: AdoptiveListComponent,
  },
  {
    path: 'adoption/:animal/:id',
    component: AdoptiveDetailComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdoptiveListComponent,
    AdoptiveDetailComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
