        function getBooks(){
            document.getElementById('output').innerHTML="";
            fetch("http://openlibrary.org/search.json?q="+document.getElementById("input").value)
            .then(a=>a.json())
            .then(response=>{
                for(var i = 0;i < response.docs.length; i++){
                document.getElementById("output").innerHTML+="<h2>"+response.docs[i].title+"</h2>"+response.docs[i].author_name[0]+"<br><img src= 'http://covers.openlibrary.org/b/isbn/'"+response.docs[i].isbn[0]+"'-M.jpg'><br>";
                }
            });
        }