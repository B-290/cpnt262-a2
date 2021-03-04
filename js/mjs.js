// Attibutions:
// Lorem Picsum
// https://picsum.photos/
const animals = [
  {
    id:     237,
    title:  'Puppy',
    credit: 'André Spieker',
    url:    'https://picsum.photos/seed/picsum/200/300'
  },
  
]; 
console.log(animals);

// Loop through animals with Array.forEach()
animals.forEach(function(animal){
  console.log(animal.title);
});

// Find a tiger with Array.find()
const foundItem = animals.find(function(animal){
  return animal.id === 593;
});

console.log(foundItem);

// Find all animal photos take by Thomas Lefebvre using Array.filter()

const thomasPhotos = animals.filter(function(animal){
  return animal.credit === 'Thomas Lefebvre';
})
  
console.log(thomasPhotos);

// Make all photo credits lowercase using Array.map()
const lcAnimals = animals.map(function(animal){
  animal.credit = animal.credit.toLowerCase();
  return animal;
})

console.log(lcAnimals);

var image = new Image();
5
    image.src = './images/img1.jpg';
6
     
7
    array_of_images.push(image);


console.log(pathname);