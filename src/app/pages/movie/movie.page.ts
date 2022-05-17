import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { MovieDataService } from 'src/app/services/movie-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {

  movies = [];
  imgBaseUrl = environment.images;
  currentPage = 1;
  movieFlop = false;
  movieSuccess = false;

  constructor(private moviesData: MovieDataService) { }

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies(event?: InfiniteScrollCustomEvent) {
    this.moviesData.getMovieData(this.currentPage).subscribe(res => {
      console.log(res)
      this.movies.push(...res.results);

      event?.target.complete();
      if (event) {
        event.target.disabled = res.total_pages === this.currentPage;
      }
      for (let i = 0; i < this.movies.length; i++) {
        if (this.movies[i].vote_average > 6) {
          this.movieSuccess === true;
        } else{
          this.movieFlop === true;
        }
      }
    })
  }

  loadData(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.loadMovies(event);
  }

}
