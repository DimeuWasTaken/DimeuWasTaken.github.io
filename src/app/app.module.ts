import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxParticlesModule } from "@tsparticles/angular";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutMeComponent } from './about-me/about-me.component';

import { featherGithub, featherLinkedin } from '@ng-icons/feather-icons';
import { NgIconsModule, provideNgIconsConfig } from '@ng-icons/core';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ProjectsComponent,
        ContactsComponent,
        AboutMeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxParticlesModule,
        NgIconsModule.withIcons({ featherGithub, featherLinkedin })
    ],
    providers: [
        provideNgIconsConfig({
            size: '6vh',
            color: '#fAf9f6',
        }),
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

