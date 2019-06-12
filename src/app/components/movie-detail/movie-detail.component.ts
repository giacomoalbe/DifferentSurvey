import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movieId: string;
  movie = {};
  isLoading: boolean;
  error: string;

  movieFields = [
    {
      cssClass: 'font-style-italic',
      color: 'orange',
      property: 'Awards',
      text: 'Riconoscimenti'
    },
    {
      cssClass: '',
      color: 'red',
      property: 'Director',
      text: 'Reggista'
    },
    {
      cssClass: '',
      color: 'green',
      property: 'Genre',
      text: 'Genere'
    },
    {
      cssClass: '',
      color: 'skyblue',
      property: 'Plot',
      text: 'Trama'
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.error = "";

    this.movieId = this.route.snapshot.paramMap.get("movie_id");

    this.movieService.get(this.movieId)
      .then((movie: any) => {
        this.movie = movie;

        this.isLoading = false;
      }, (err) => {
        this.error = err;

        this.isLoading = false;
      });
  }

  goBack() {
    this.router.navigate(['/movies/search']);
  }
}
