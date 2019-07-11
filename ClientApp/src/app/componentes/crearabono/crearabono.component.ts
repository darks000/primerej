import { Component, OnInit } from '@angular/core';
import {Abono} from'../../models/abono'
import { from } from 'rxjs';
import {AbonoService} from '../../services/abono.service'
@Component({
  selector: 'app-crearabono',
  templateUrl: './crearabono.component.html',
  styleUrls: ['./crearabono.component.css']
})
export class CrearabonoComponent implements OnInit {
 
  constructor(private abonoservice:AbonoService) { }
  abono:Abono;
  ngOnInit() {
    this.abono = { id:0, conductor:'', fecha:'', valor:0 };

  }
  add() {
    this.abonoservice.addAbono(this.abono).subscribe(abono => {
    alert('Se agrego una nueva tarea')
    });
    }
}
