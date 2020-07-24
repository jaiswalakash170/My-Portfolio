import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-content',
  templateUrl: './header-content.component.html',
  styleUrls: ['./header-content.component.css']
})
export class HeaderContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toProjects(): void {
    console.log("toProjects() called");
    document.getElementById("projects").scrollIntoView({behavior: "smooth"});
  }
}
