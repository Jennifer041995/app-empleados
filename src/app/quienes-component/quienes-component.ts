import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-quienes-component',
  imports: [],
  templateUrl: './quienes-component.html',
  styleUrl: './quienes-component.css'
})
export class QuienesComponent {
  constructor(private router: Router){

  }
  volverHome(){
    this.router.navigate(['']);
  }
}
