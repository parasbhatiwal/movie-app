import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDataService } from 'src/app/services/movie-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  movie = null;
  imageBaseUrl = environment.images;
  
  constructor(private route: ActivatedRoute, private movieService: MovieDataService) { }
  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieDetails(id).subscribe(res => {
      console.log(res);
      this.movie = res;
    })
  }

  openHomepage(url) {
    window.open(url, '_blank');
  }
}
