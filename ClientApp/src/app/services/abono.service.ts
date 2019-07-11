import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Abono} from '.././models/abono';
const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
providedIn: 'root'
})
export class AbonoService {
constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string )
{ }

addAbono (abono: Abono): Observable<Abono> {
  return this.http.post<Abono>(this.baseUrl+'api/abono', abono, httpOptions).pipe(
  tap((newAbono: Abono) => this.log(`added NewTask w/ id=${newAbono.id}`)),
  catchError(this.handleError<Abono>('addTask'))
  );
}
  
getAll():Observable<Abono[]>{
return this.http.get<Abono[]>(this.baseUrl+'api/abono').pipe(
tap(_=>this.log('Se Consulta la información')),
catchError(this.handleError<Abono[]>('getAll',[]))
);
}


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    console.error(error);
    this.log(`${operation} failed: ${error.message}`);
    return of(result as T);
    };
    }

    private log(message: string) {
    alert(`AbonoService: ${message}`);
    }
}