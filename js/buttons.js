"use strict";

(function(){
    var inputText = document.getElementById("inputText");
    var tagButton = document.getElementById("tagButton");
    var elementButton = document.getElementById("elementButton");
    var output = document.getElementById("output");

    tagButton.addEventListener("click", function(){
        output.innerHTML= "";
        output.innerHTML= '<div class="specialDiv">Tag Text: <em>' + inputText.value + '</em></div>';
    });

    elementButton.addEventListener("click", function(){
        var newDiv = document.createElement("div");
        output.innerHTML = "";
        newDiv.innerHTML = "Element Text: <em>" + inputText.value + "</em>";
        newDiv.classList.add("specialDiv");
        output.appendChild(newDiv);

    });

})();