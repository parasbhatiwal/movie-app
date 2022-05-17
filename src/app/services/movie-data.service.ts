import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';



export interface ApiResult {
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
}

@Injectable({
  providedIn: 'root'
})


export class MovieDataService {

  constructor(private http: HttpClient) { }

  getMovieData(currentPage: number = 1): Observable<ApiResult>{
    return this.http.get<ApiResult>(`${environment.baseUrl}/movie/popular?page=${currentPage}&api_key=${environment.apiKey}`)
  }

  getMovieDetails(id: any): Observable<any>{
    return this.http.get(`${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}`)
  }
}
