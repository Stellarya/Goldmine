$(document).ready(function () {
    var jsonContent;


    function afficherDev(jsonContent, nbr, nbrComp) {
        $("#nomTrouve").text(jsonContent['devs'][nbr]['nom']);
        $("#prenomTrouve").text(jsonContent['devs'][nbr]['prenom']);
        $("#fctTrouve").text(jsonContent['devs'][nbr]['fonction']);
        $("#comp1trouve").text(jsonContent['devs'][nbr]['Comps'][nbrComp]);
        $("#comp2trouve").text(jsonContent['devs'][nbr]['Comps'][nbrComp]);
        $("#comp3trouve").text(jsonContent['devs'][nbr]['Comps'][nbrComp] );
    }

    $.getJSON("goldmine.json", function(parsedJson){
        console.log(parsedJson);
        jsonContent = parsedJson;
        afficherDev(jsonContent, 0, 0);
        /*$(".questionTotal").text(jsonContent['questions'].length)*/

    });


});