import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-contacto-component',
  imports: [],
  templateUrl: './contacto-component.html',
  styleUrl: './contacto-component.css'
})
export class ContactoComponent {
  constructor(private router: Router){

  }
  volverHome(){
    this.router.navigate(['']);
  }
}
