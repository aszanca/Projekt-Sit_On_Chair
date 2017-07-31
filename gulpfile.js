
//zaciągamy dwie biblioteki

var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );


var sourcemaps = require( 'gulp-sourcemaps' );
var autoprefixer = require( 'gulp-autoprefixer' );

/* tworzymy zadanie, które będziemy obslugiwać
Kompilacja sass do css
task to wewnętrzna funkcja gulpa
*/

gulp.task( 'sass', function() {

//tworzymy rurę (pipe), do której będą wpływać pliki
//pokazujemy ścieżkę, tego co ma przez rurę przelatywać. To zwykle będzie stała.

  return gulp.src ( 'scss/main.scss' )
    .pipe( sass().on('error', sass.logError))
  //stworzenie mapy
    .pipe( sourcemaps.init() )
//tutaj nie ma spacji- może być tabulator
    .pipe( autoprefixer({
      browsers: ['last 4 versions']
    }))
    .pipe( sass( {
        outputStyle: 'nested'
    }))
    //zapisanie mapy do pliku
    .pipe( sourcemaps.write() )
    //ustalamy ścieżkę do finalnego pliku
    .pipe( gulp.dest('assets/css'))
});


//dodajemy obserwatora, który sprawdza zmiany na plikach
gulp.task( 'watch', function (){

  //określamy ścieżkę, do której watcher ma się odnosić - wszystkie pliki scss we wszystkich folderach i plikach scss
  // 'scss' - nazwa zadania, które będzie wykonane gdy odbędą się jakieś zadania w pliku

  gulp.watch( 'scss/**/*.scss', ['sass'] );

});
