import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.css']
})
export class HeaderNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toAbout(): void {
    console.log("toAbout() called");
    document.getElementById("about").scrollIntoView({behavior: "smooth"});
  }

  toSkills(): void {
    console.log("toSkills() called");
  }

  toProjects(): void {
    console.log("toProjects() called");
  }

  toWorkExp(): void {
    console.log("toWorkExp() called");
  }

  toContact(): void {
    console.log("toContact() called");
  }
}
