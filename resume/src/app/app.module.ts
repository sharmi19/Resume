import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { Routes, RouterModule } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { SkillsComponent } from "./skills/skills.component";
import { ExperienceComponent } from "./experience/experience.component";
import { EducationComponent } from "./education/education.component";
import { InterestsComponent } from "./interests/interests.component";
import { ContactmeComponent } from "./contactme/contactme.component";
const appRoutes: Routes = [
  { path: "portfolio", component: PortfolioComponent },
  { path: "navbar", component: NavbarComponent },
  { path: "home", component: HomeComponent },
  { path: "skills", component: SkillsComponent },
  { path: "experience", component: ExperienceComponent },
  { path: "education", component: EducationComponent },
  { path: "contactme", component: ContactmeComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    NavbarComponent,
    HomeComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    InterestsComponent,
    ContactmeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
