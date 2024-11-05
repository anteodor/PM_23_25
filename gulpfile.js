const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

async function getImagemin() {
    const imagemin = await import('gulp-imagemin');
    return imagemin.default;
}

// Завдання для копіювання HTML-файлів
gulp.task('html', function () {
    return gulp.src('./app/html/index.html')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});

// Завдання для компіляції SCSS файлів
gulp.task('scss', function () {
    return gulp.src('./app/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
});

// Завдання для копіювання та мініфікації JS файлів
gulp.task('js', function () {
    return gulp.src('./app/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.stream());
});

// Завдання для оптимізації зображень
gulp.task('images', async function () {
    const imagemin = await getImagemin();
    return gulp.src('./app/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'))
        .pipe(browserSync.stream());
});

// Завдання для копіювання JSON-файлів
gulp.task('json', function () {
    return gulp.src('./app/data/**/*.json') // Використовуємо шлях до папки src/data
        .pipe(gulp.dest('./dist/data')) // Копіюємо JSON-файли в dist/data
        .pipe(browserSync.stream());
});

// Завдання для налаштування Browser Sync і автоматичного оновлення сторінок
gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });

    // Відстеження змін у файлах
    gulp.watch('app/html/*.html', gulp.series('html'));
    gulp.watch('app/scss/**/*.scss', gulp.series('scss'));
    gulp.watch('app/js/**/*.js', gulp.series('js'));
    gulp.watch('app/img/**/*', gulp.series('images'));
    gulp.watch('app/data/**/*.json', gulp.series('json')); // Відстеження змін у JSON-файлах
});

// Основне завдання за замовчуванням, яке виконує всі завдання паралельно
gulp.task('default', gulp.parallel('serve', 'html', 'scss', 'js', 'images', 'json'));
