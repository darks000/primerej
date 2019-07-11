import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Abono } from '.././models/abono';
import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
createDb() {
const abono = [
  {id:11,conductor:"carlos",fecha:"12/05/2019",valor:10},
    {id:12,conductor:"Dario",fecha:"11/05/2019",valor:29},
    {id:13,conductor:"Mario",fecha:"2/11/2018",valor:23},
    {id:14,conductor:"Juan",fecha:"11/05/2019",valor:12},
    {id:15,conductor:"Pepe",fecha:"11/05/2019",valor:5},
    {id:16,conductor:"Kelly",fecha:"11/05/2019",valor:12},
    {id:17,conductor:"Maria",fecha:"11/05/2019",valor:12}
];
return {abono};
}
// Overrides the genId method to ensure that a hero always has an id.
// If the heroes array is empty,
// the method below returns the initial number (11).
// if the heroes array is not empty, the method below returns the highest
// hero id + 1.
getId(abonos: Abono[]): number {
return abonos.length > 0 ? Math.max(...abonos.map(abono => abono.id)) + 1 : 11;
}
}