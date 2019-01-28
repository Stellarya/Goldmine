$(document).ready(function () {
    var jsonContent;


    function afficherDev(jsonContent, nbr, nbrComp) {
        $("#nomTrouve").text(jsonContent['développeurs'][nbr]['nom']);
        $("#prenomTrouve").text(jsonContent['développeurs'][nbr]['prenom']);
        $("#fctTrouve").text(jsonContent['développeurs'][nbr]['fonction']);
        $("#comp1trouve").text(jsonContent['développeurs'][nbr]['Compétences'][nbrComp][0]);
        $("#comp2trouve").text(jsonContent['développeurs'][nbr]['Compétences'][nbrComp][0]);
        $("#comp3trouve").text(jsonContent['développeurs'][nbr]['Compétences'][nbrComp][0] );
    }

    $.getJSON("rechercheGoldmine.json", function(parsedJson){
        console.log(parsedJson);
        jsonContent = parsedJson;
        afficherDev(jsonContent, 0, 0);
        /*$(".questionTotal").text(jsonContent['questions'].length)*/

    });

    $.getJSON("rechercheGoldmine.json", function( json ) {
        for (var i = 0; i < json["développeurs"].length; i++) {
            compétences = json[0]["développeurs"][i]['Compétences'];
            console.log(compétences);

            for (var j = 0; j < products.length; j++) {
                console.log(products[j]);
                tr = $('<tr/>');
                tr.append("<td>" + products[j]["DESCR"] + "</td>");
                tr.append("<td>" + products[j]["RATE"] + "</td>");
                tr.append("<td>" + products[j]["APR"] + "</td>");
                tr.append("<td>" + products[j]["POINTS"] + "</td>");

                $('table').append(tr);
            }
        }
    });
});