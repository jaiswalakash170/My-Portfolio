import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<ContactComponent>) { }

  ngOnInit(): void {
  }

  onClose(): void{
    this.dialogbox.close();
  }
}
