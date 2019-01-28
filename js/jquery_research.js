$(document).ready(function () {
    var jsonContent;


    $.getJSON("rechercheGoldmine.json", function(parsedJson){
        console.log(parsedJson);
        jsonContent = parsedJson;
        
    });
});