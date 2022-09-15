import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = 'https://laudin-portfolio-backend.herokuapp.com'
  //url: string = 'http://localhost:8080'

  headers = new HttpHeaders().set('Content-Type', 'application/json')
  headers2 = new HttpHeaders().set('Content-Type', 'multipart/form-data')

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.get(this.url + '/usuario', data).pipe(catchError((error: HttpErrorResponse) => throwError(() => console.log(error.error.message))))
  }

  // ABOUT
  getAbout(): Observable<any> {
    return this.http.get(this.url + '/persona').pipe(catchError((error: HttpErrorResponse) => throwError(() => console.log(error.error.message))))
  }
  updateAbout(id: number, data: any) {
    return this.http.put(this.url + '/persona/' + id, data, { headers: this.headers }).pipe(catchError((error: HttpErrorResponse) => throwError(() => console.log(error.error.message))))
  }

  // EDUCACION
  getEducaciones(): Observable<any> {
    return this.http.get(this.url + '/educacion').pipe(catchError((error: HttpErrorResponse) => throwError(() => console.log(error.error.message))))
  }
  postEducacion(data: any): Observable<any> {
    return this.http.post(this.url + '/educacion', data, { headers: this.headers }).pipe(catchError((error: HttpErrorResponse) => throwError(() => console.log(error.error.message))))
  }
  updateEducacion(id: number, data: any) {
    return this.http.put(this.url + '/educacion/' + id, data, { headers: this.headers }).pipe(catchError((error: HttpErrorResponse) => throwError(() => console.log(error.error.message))))
  }
  deleteEducacion(id: number) {
    return this.http.delete(this.url + '/educacion/' + id).pipe(catchError((error: HttpErrorResponse) => throwError(() => console.log(error.error.message))))
  }

  // EXPERIENCIA
  getExperiencias(): Observable<any> {
    return this.http.get(this.url + '/experiencia').pipe(catchError((error: HttpErrorResponse) => throwError(() => console.log(error.error.message))))
  }
  postExperiencia(data: any): Observable<any> {
    return this.http.post(this.url + '/experiencia', data, { headers: this.headers }).pipe(catchError((error: HttpErrorResponse) => throwError(() => console.log(error.error.message))))
  }
  updateExperiencia(id: number, data: any) {
    return this.http.put(this.url + '/experiencia/' + id, data, { headers: this.headers }).pipe(catchError((error: HttpErrorResponse) => throwError(() => console.log(error.error.message))))
  }
  deleteExperiencia(id: number) {
    return this.http.delete(this.url + '/experiencia/' + id).pipe(catchError((error: HttpErrorResponse) => throwError(() => console.log(error.error.message))))
  }

  // PROYECTO
  getProyectos(): Observable<any> {
    return this.http.get(this.url + '/proyecto').pipe(catchError((error: HttpErrorResponse) => throwError(() => console.log(error.error.message))))
  }
  postProyecto(data: any): Observable<any> {
    return this.http.post(this.url + '/proyecto', data, { headers: this.headers }).pipe(catchError((error: HttpErrorResponse) => throwError(() => console.log(error.error.message))))
  }
  updateProyecto(id: number, data: any) {
    return this.http.put(this.url + '/proyecto/' + id, data, { headers: this.headers }).pipe(catchError((error: HttpErrorResponse) => throwError(() => console.log(error.error.message))))
  }
  deleteProyecto(id: number) {
    return this.http.delete(this.url + '/proyecto/' + id).pipe(catchError((error: HttpErrorResponse) => throwError(() => console.log(error.error.message))))
  }

  // TECNOLOGIA
  getTecnologias(): Observable<any> {
    return this.http.get(this.url + '/tecnologia').pipe(catchError((error: HttpErrorResponse) => throwError(() => console.log(error.error.message))))
  }
  postTecnologia(data: any): Observable<any> {
    return this.http.post(this.url + '/tecnologia', data, { headers: this.headers }).pipe(catchError((error: HttpErrorResponse) => throwError(() => console.log(error.error.message))))
  }
  updateTecnologia(id: number, data: any) {
    return this.http.put(this.url + '/tecnologia/' + id, data, { headers: this.headers }).pipe(catchError((error: HttpErrorResponse) => throwError(() => console.log(error.error.message))))
  }
  deleteTecnologia(id: number) {
    return this.http.delete(this.url + '/tecnologia/' + id).pipe(catchError((error: HttpErrorResponse) => throwError(() => console.log(error.error.message))))
  }

  uploadFile(file: Blob): Observable<any> {
    let data = new FormData()
    data.append("file", file)
    // console.log(data.get("file"))
    return this.http.post(this.url + '/file', data, { responseType: 'text' }).pipe(catchError((error: HttpErrorResponse) => throwError(() => console.log(error.error.message))))
  }

}
