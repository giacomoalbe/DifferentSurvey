import { Component, OnInit } from '@angular/core';

import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {
  ricerca = "";
  error = "";
  movies = [];
  isLoading = false;

  constructor(
    private movieService: MovieService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ricercaFilm() {
    this.isLoading = true;
    this.error = "";
    this.movies = [];

    this.movieService.search(this.ricerca)
      .then((movies: any) => {
        console.log("2. Dentro resolve della Promise");
        this.movies = movies;
        this.isLoading = false;
      }, (err) => {
        this.error = err;
        this.isLoading = false;
      });
  }

  movieDetails(movie) {
    this.router.navigate(['movies/view/', movie.imdbID]);
  }

  svuotaFiltro() {
    this.ricerca = "";
    this.error = "";
  }
}
