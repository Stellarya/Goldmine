$(document).ready(function () {
    var jsonContent;

    /*function afficherDev(jsonContent, nbr, nbrComp) {
        $("#nomTrouve").text(jsonContent['devs'][nbr]['nom']);
        $("#prenomTrouve").text(jsonContent['devs'][nbr]['prenom']);
        $("#fctTrouve").text(jsonContent['devs'][nbr]['fonction']);
        $("#comp1trouve").text(jsonContent['devs'][nbr]['Comps'][nbrComp]);
        $("#comp2trouve").text(jsonContent['devs'][nbr]['Comps'][nbrComp]);
        $("#comp3trouve").text(jsonContent['devs'][nbr]['Comps'][nbrComp] );
    }*/

    $.getJSON("goldmine.json", function( json ) {
        for (var i = 0; i < json["devs"].length; i++) {

            for (var j = 0; j < json["devs"][i]['Comps'].length; j++) {
                tr = $('<tr/>');
                tr.append("<td>" + json["devs"][i]["nom"] + "</td>");
                tr.append("<td>" + json["devs"][i]["prenom"] + "</td>");
                tr.append("<td>" + json["devs"][i]["fonction"] + "</td>");
                tr.append("<td>" + json["devs"][i]['Comps'][j]["Comp 1"] + "</td>");
                tr.append("<td>" + json["devs"][i]['Comps'][j]["Comp 2"] + "</td>");
                tr.append("<td>" + json["devs"][i]['Comps'][j]["Comp 3"] + "</td>");
                tr.append("<td>" + json["devs"][i]['Comps'][j]["Comp 4"] + "</td>");

                $('table').append(tr);
            }
        }
    });


});