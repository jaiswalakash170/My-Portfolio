import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ContactComponent } from 'src/app/contact/contact.component';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.css']
})
export class HeaderNavigationComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  toAbout(): void {
    console.log("toAbout() called");
    document.getElementById("about").scrollIntoView({behavior: "smooth"});
  }

  toSkills(): void {
    console.log("toSkills() called");
    document.getElementById("skills").scrollIntoView({behavior: "smooth"});
  }

  toProjects(): void {
    console.log("toProjects() called");
    document.getElementById("projects").scrollIntoView({behavior: "smooth"});
  }

  toWorkExp(): void {
    console.log("toWorkExp() called");
    document.getElementById("workexp").scrollIntoView({behavior: "smooth"});
  }

  toContact(): void {
    console.log("toContact() called");
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(ContactComponent, dialogConfig);
  }
}
