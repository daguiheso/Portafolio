/*
* Dependencias
*/
var gulp = require('gulp'),
    elixir = require('laravel-elixir'),
    livereload = require('gulp-livereload');

elixir(function(mix) {
  elixir.extend('sourcemaps', false);
  mix.less("../../../resources/less/estilos.less", "static/css/all.css");

});


