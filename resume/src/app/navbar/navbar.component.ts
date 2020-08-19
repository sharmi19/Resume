import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  home;
  skills;
  experience;
  education;
  interests;
  contactme;
  constructor() {}

  ngOnInit(): void {
    this.home = "/home";
    this.skills = "/skills";
    this.experience = "/experience";
    this.education = "/education";
    this.contactme = "/contactme";
  }
}
