import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: 'home', redirectTo: '', pathMatch: 'full'},
    {path: '', component: HomeComponent},
    {path: 'about-me', component: AboutMeComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'contacts', component: ContactsComponent},
];
