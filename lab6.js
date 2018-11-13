// JavaScript File
window.onload = function () {
    // body...

 var search = document.getElementById("button");
 var str = document.getElementsByName("Term");
 
      search.onclick = function Search(str) {
          // body...
          var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("demo").innerHTML =
            
             alert( this.responseText);
            }
          };
            xhttp.open("GET", "request.php?q="+str, true);
            xhttp.send();
         }
}