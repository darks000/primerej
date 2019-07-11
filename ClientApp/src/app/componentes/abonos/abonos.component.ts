import { Component, OnInit } from '@angular/core';
import{Abono} from '../../models/abono'
import{AbonoService} from '../../services/abono.service'
import { from } from 'rxjs';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-abonos',
  templateUrl: './abonos.component.html',
  styleUrls: ['./abonos.component.css']
})
export class AbonosComponent implements OnInit {
  abonos:Abono[];
  constructor(private abonoservice:AbonoService) { }

  ngOnInit() {
    this.getAll();

  }
  getAll(){
    this.abonoservice.getAll().subscribe(abonos=>this.abonos=abonos);
    }
}
