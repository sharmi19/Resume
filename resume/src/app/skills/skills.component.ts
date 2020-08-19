import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"]
})
export class SkillsComponent implements OnInit {
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
  }
}
