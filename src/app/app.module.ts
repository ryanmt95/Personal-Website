import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BioComponent } from './bio/bio.component';
import { HobbyComponent } from './hobby/hobby.component';
import { ProjectsComponent } from './projects/projects.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SurfComponent } from './surf/surf.component';
import { TribalistComponent } from './tribalist/tribalist.component';
import { StyleDirective } from './style.directive';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BioComponent,
    HobbyComponent,
    ProjectsComponent,
    PortfolioComponent,
    SurfComponent,
    TribalistComponent,
    StyleDirective,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProjectsComponent },
      { path: 'projects/tribalist', component: TribalistComponent },
      { path: 'projects/surf', component: SurfComponent },
      { path: 'projects/portfolio', component: PortfolioComponent},
      { path: 'hobbies', component: HobbyComponent },
      { path: 'bio', component: BioComponent },
      { path: 'contacts', component: ContactsComponent },
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
