const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];
  let count=0;
library.forEach( (book) => {
	    if(book.readingStatus==false){
           count++;
		}
 
  // write your code here
})
  console.log(count);

// Do not change the code below

// alert(numberOfBooksRead());
