$(document).ready(function () {
    var json_obj  = {
        "devs": [
            {
                "nom": "Bouvet",
                "prenom": "Philippe",
                "bu": "BU 1",
                "fonction": "CDP Confirme",
                "Comps":[
                    "web","php",".net"]

            },
            {
                "nom": "Aligant",
                "prenom": "Line",
                "bu": "BU 1",
                "fonction": "Dev Alternance",
                "Comps":["web","php"]

            },
            {
                "nom": "Garnier",
                "prenom": "Gwendall",
                "bu": "BU 4",
                "fonction": "Architecte Senior",
                "Comps":["java","web","javascript",".net"]

            },
            {
                "nom": "Evanno",
                "prenom": "Marie",
                "bu": "BU 2",
                "fonction": "Dév Alternance",
                "Comps":["web"]

            },
            {
                "nom": "Flageul",
                "prenom": "Thierry",
                "bu": "BU 1",
                "fonction": "Architecte Confirme",
                "Comps":["java","web","javascript"]

            },
            {
                "nom": "Dariel",
                "prenom": "Eric",
                "bu": "BU 2",
                "fonction": "Architecte junior",
                "Comps":["java","web","javascript"]

            }
        ]
    };

    var number_of_rows = json_obj.devs.length;
    var k = 0;
    var table_body = '<table border="1" id="example"><thead><tr><th>Nom</th><th>Prenom</th><th>Fonction</th><th>Comps 1</th><th>Comps 2</th><th>Comps 3</th></thead><tbody>';
    for(j in json_obj.devs){
        for(i =0;i<json_obj.devs.length;i++){
            table_body+='<tr>';
            table_body +='<td>';
            table_body +=json_obj.devs[k]["nom"];
            table_body +='</td>';

            table_body +='<td>';
            table_body +=json_obj.devs[k]["prenom"];
            table_body +='</td>';

            table_body +='<td>';
            table_body +=json_obj.devs[k]["fonction"];
            table_body +='</td>';

            table_body +='<td>';
            table_body +=json_obj.devs[k].Comps[0];
            table_body +='</td>';

            table_body +='<td>';
            table_body +=json_obj.devs[k].Comps[i++];
            table_body +='</td>';

            table_body +='<td>';
            table_body +=json_obj.devs[k].Comps[i++];
            table_body +='</td>';

            table_body+='</tr>';
        }
        k++;
    }
    table_body+='</tbody></table>';
    $('#tableDiv').html(table_body);
})