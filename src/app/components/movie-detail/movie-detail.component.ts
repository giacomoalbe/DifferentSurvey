import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movieId: number;
  movie = {};

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.movieId = this.route.snapshot.paramMap.get("movie_id");

    this.movieService.get(this.movieId)
      .then((movie: any) => {
        this.movie = movie;
      }, (err) => {
        console.log(err);
      });
  }

}
