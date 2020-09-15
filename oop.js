function movies (name, genre, year)
{
  this.name= name;
  this.genre=genre;
  this.year=year;
}
movies.protoype.print=function()
{
  console.log(`${this.name} is a ${this.genre} that was released in ${this.year}`);
}
const moviea = new movies('starwars' , 'Sci-Fi', 1976); 
moviea.print();

const movieb = new movies('the terminator' , 'Sci-Fi', 1984); 
movieb.print();

const moviec = new 
