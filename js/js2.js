let outputHTML = 'index.html';

const randInteger = Math.floor(Math.random() * Math.floor(imgList.length));
outputHTML = `<img src="https://picsum.photos/id/${imgList[randInteger]}/250/250" alt="Random Lorem Picsum">`;

document.querySelector('body').innerHTML = outputHTML;

console.log(randInteger);