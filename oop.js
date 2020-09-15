function Movie (name, genre, year)
{
  this.name= name;
  this.genre=genre;
  this.year=year;
}
Movie.protoype.print=function()
{
  console.log(`${this.name} is a ${this.genre} that was released in ${this.year}`);
}
const starwars = new Movie('starwars', 'Sci-Fi', 1976);


const theterminator = new Movie('the terminator', 'Sci-Fi', 1984);


const groundhogday = new Movie('groundhog day', 'Comedy', 1993);

const movies = [starwars, theterminator, groundhogday];
movies.forEach(Movie => {
    Movie.print();
});
