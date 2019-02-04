var compets = [
    {"competence": "Spring", "categorie": "Java"},
    {"competence": "J2EE", "categorie": "Java"},
    {"competence": "HTML/CSS", "categorie": "Web"},
    {"competence": "Delphi", "categorie": "Framework"},
    {"competence": "PHP", "categorie": "PHP"},
    {"competence": "Javascript", "categorie": "Javascript"},
    {"competence": "AngularJS", "categorie": "Javascript"},
    {"competence": "Shell", "categorie": "Langages"},
    {"competence": "PL/SQL", "categorie": "BDD"},
    {"competence": "Liferay", "categorie": "Produits"},
    {"competence": "C#", "categorie": ".Net"}
];

$("autocomplete").autocomplete({
    lookup: compets,
    onSelect: function (suggestion) {
        alert('You selected: ' + suggestion.competence + ', ' + suggestion.categorie);
    }
});