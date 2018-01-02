"use strict";

(function(){
    var title = document.getElementById("title");
    var lastName = document.getElementById("lastName");
    var firstName = document.getElementById("firstName");
    var bookButton = document.getElementById("bookButton");
    var sortButton = document.getElementById("sortButton");
    
    var output = document.getElementById("output");
    var books = [];

    var Book = function Book(title, firstName, lastName) {
        this.title = title;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    var displayBooks = function displayBooks(){
        output.innerHTML="";
        var newUL = document.createElement("ul");
        var newDiv = document.createElement("div");
        
    
        books.forEach(function(book, idx, arr){
         //   var newH2 = document.createElement("h2");
         //   var newP = document.createElement("p");
            var newLi = document.createElement("li");
            newLi.innerText = "Title: " + book.title + "  Author: " + book.firstName + " " + book.lastName;
            newUL.appendChild(newLi);
            newDiv.appendChild(newUL);



         //   newH2.innerText = "Title: " + book.title;
         //   newP.innerText = "Author: " + book.firstName + " " + book.lastName;
         //   newDiv.appendChild(newH2);
         //   newDiv.appendChild(newP);
            output.appendChild(newDiv);
        }); 
    }

    sortButton.addEventListener("click", function(){
        books = books.sort(function(a, b){
            var nameA = a.lastName.toUpperCase();
            var nameB = b.lastName.toUpperCase();
            if(nameA < nameB) {
                return -1;
            } else
            {
                if(nameA > nameB){
                    return 1;
                } else {
                return 0;
                }
            }
        });

        displayBooks();
    });



    bookButton.addEventListener("click", function(){
      //  output.innerHTML= "";
        
        var newBook = new Book(title.value, firstName.value, lastName.value);
        books.push(newBook);
        displayBooks();

       
    });

   
})();