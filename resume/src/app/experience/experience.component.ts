import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.scss"]
})
export class ExperienceComponent implements OnInit {
  experience = [];
  skillset = [];

  constructor() {}

  ngOnInit() {
    this.skillset = [
      { name: "Angular", percentage: "85%" },
      { name: "Javasript", percentage: "85%" },
      { name: "HTML5", percentage: "90%" },
      { name: "CSS", percentage: "80%" },
      { name: "NodeJS", percentage: "45%" },
      { name: "Java", percentage: "40%" },
      { name: "C", percentage: "30%" },
      { name: "MongoDB", percentage: "95%" },
      { name: "MySQL", percentage: "95%" },
      { name: "GIT", percentage: "90%" }
    ];
    this.experience = [
      {
        time: "Nov-2018 to Present",
        role: "Software Engineer",
        company: "Eka Software Solutions Pvt Ltd",
        set: [
          {
            point:
              "Generic framework based on Metadata and Workflow driven architecture, that can be used for building various applications"
          },
          {
            point:
              "Use of Reactive Forms as the whole framework is built on top of Angular 7"
          },
          {
            point:
              "Delivery of 8+ applications from a single code base using this aforesaid framework"
          },
          {
            point:
              "Developed an Admin UI setup for handling MongoDB documents for Metadata and Workflow driven applications"
          }
        ]
      }
    ];
  }
}
