// JavaScript File
window.onload = function () {
    // body...

 var search = document.getElementById("button1");
 var str = document.getElementById("Term");
 var all = document.getElementById("button2");
 
   document.getElementById("Term").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("button1").click();
    }
});
 
      search.onclick = function Search() {
          
           /*if (str.length==0) { 
               document.getElementById("result").innerHTML="";
               document.getElementById("result").style.border="0px";
               return;
            }*/
          // body...
           var url = "request.php?q="+str.value;
          var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
             document.getElementById("result").innerHTML = this.responseText;
            
    
            }
          };
            xhttp.open("GET", url, true);
            xhttp.send(null);
         }
         
         all.onclick = function Everything(){
             var url1 = "request.php?q=&all=true";
              var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
             document.getElementById("result").innerHTML = this.responseText;
            
    
            }
          };
            xhttp.open("GET", url1, true);
            xhttp.send(null);
         }
         
}