import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addsongspg',
  templateUrl: './addsongspg.component.html',
  styleUrls: ['./addsongspg.component.scss']
})
export class AddsongspgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  openBox(){
    console.log('function working')
			document.getElementById('main-container')!.style.display = "block";

  }
  closeBox() {
    document.getElementById('main-container')!.style.display = "none";
  }
  }

//wtf is controler in angular lol why does it need one 
// ??stupid angular