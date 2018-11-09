// JavaScript File
window.onload = function () {
    // body...

 var search = document.getElementById("button");
 
      search.onclick = function () {
          // body...
          var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
             document.getElementById("demo").innerHTML =
              this.responseText;
    }
  };
  xhttp.open("GET", "request.php?q=definition", true);
  xhttp.send();
      }
}