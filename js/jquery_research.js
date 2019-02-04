var liste_competences = [
    "Spring",
    "J2EE",
    "HTML/CSS",
    "PL/SQL",
    "Shell",
    "Delphi",
    "Javascript",
    "AngularJS",
    "Liferay",
    "PHP",
    "C#"
];

$('#recherche_autocomplet').autocomplete({
    source: liste_competences,
    minLength: 3,
});

$(document).ready(function () {
    var jsonContent;

    $.getJSON("goldmine.json", function (json) {
        jsonContent = json;
        console.log(json);
        genererTabDev(jsonContent["devs"]);
    });

    function genererTabDev(devs) {

        var table_comp = $("#table_comps");

        //On vide le tableau
        table_comp.find("tr:gt(0)").remove();

        for (var i = 0; i < devs.length; i++) {

            tr = $('<tr/>');
            tr.append("<td>" + devs[i]["Nom"] + "</td>");
            tr.append("<td>" + devs[i]["Prenom"] + "</td>");
            tr.append("<td>" + devs[i]["Fonction"] + "</td>");

            for (var j = 0; j < devs[i]['Comps'].length; j++) {
                tr.append("<td>" + devs[i]['Comps'][j] + "</td>");
            }
            table_comp.append(tr)
        }
    };

    $("#button-search").click(function () {
        var parsedAndFilteredJson = [];

        var indexHeader = 0;
        //vider le header pour les compétences
        $(".competence_tag_search").text("");
        //Remplir le header pour les compétences
        $(".qtagselect__choice span").each(function (index_json) {
            indexHeader++;
            //on met à jour le header avec le nom des tags séléctionnés
            $("#competence_tag_search_col" + indexHeader).text($(this)[0].innerText);
        });

        //boucle sur les devs du json
        $.each(jsonContent["devs"], function (index, obj) {

            //boucle sur les comps d'un dev du json
            $.each(obj.Comps, function (index_comp, obj_comp) {

                var arreter = false;

                //boucle sur les tags selectionnés
                $(".qtagselect__choice span").each(function (index_json) {
                    //TODO console.log pour voir obj_comp qd json aura changé
                    //obj_comp.nomComp.toUpperCase
                    //comparaison entre le json et le tag

                    //dès qu'un dev a au moins une comp correspondant à un tag select, il apparait et pas la peine de continuer la boucle
                    if (obj_comp['nomComp'].toUpperCase() === $(this)[0].innerText.toUpperCase()) {
                        parsedAndFilteredJson.push(obj);
                        arreter = true;
                        return false;
                    }
                });

                //si le dev est là, on arrête de regarder ses comps et on passe au dev suivant
                if (arreter) {
                    return false;
                }

            });
        });
        genererTabDev(parsedAndFilteredJson);
    });

});
