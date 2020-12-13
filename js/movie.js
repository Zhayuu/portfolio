$(document).ready(function () {
    console.log("ready");
    $("#btn").click(
        function () {
            console.log("button clicked");
            makeRequest();
        }
    );

});

function makeRequest() {
    let httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
        alert("error: makeRequest");
        return false;
    }

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                console.log('result', httpRequest.responseText);
                let myArray = JSON.parse(httpRequest.responseText).movies;
                if (Array.isArray(myArray)) {
                    var tbl = $("<table/>").attr("id", "mytable");
                    $("#result").append(tbl);
                    var th = "<tr><th>Movie</th><th>Director</th><th>Stars</th><th>Type</th></tr>";
                    $("#mytable").append(th);
                    myArray.forEach((element) => {
                        console.log(element);
                        var td1 = "<tr><td>" + element.movie.title + "</td>";
                        var td2 = "<td>" + element.movie.director+ "</td>";
                        var td3 = "<td>" + element.movie.star + "</td>";
                        var td4 = "<td>" + element.movie.type + "</td></tr>";
                        $('#mytable').append(td1 + td2 + td3 + td4);

                    });

                }
            }
            else {
                console.log("Error: status");
            }
        } else {
            console.log("Error: XMLHttpRequest");
        }
    };


    httpRequest.open('GET', 'movies.json', true);
    console.log("open done");
    httpRequest.send();
    console.log("send done");
}
