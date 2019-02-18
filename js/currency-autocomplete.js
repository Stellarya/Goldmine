$(function () {
    var currencies = [
        {value: 'Spring', desc: 'Java'},
        {value: 'J2EE', desc: 'Java'},
        {value: 'Delphi', desc: 'Framework'},
        {value: 'HTML/CSS', desc: 'Web'},
        {value: 'PL/SQL', desc: 'BDD'},
        {value: 'PHP', desc: 'PHP'},
        {value: 'C#', desc: '.Net'},
        {value: 'Javascript', desc: 'Javascript'},
        {value: 'AngularJS', desc: 'Javascript'},
        {value: 'Liferay', desc: 'Produits'},
        {value: 'Shell', desc: 'Langages'},

    ];

    /*function trouverTag(){
        for (var i = 0; i < currencies.length; i++) {
            var auto = currencies[i].value + "-" + currencies[i].desc;
            return auto;
        }
    }*/

    // setup autocomplete function pulling from currencies[] array
    $('#autocomplete').autocomplete({

        lookup: currencies,
        onSelect: function (suggestion) {
            var thehtml = suggestion.value;

            var html_tag_hidden = $($('.tag_competence_search')[0]).clone();
            html_tag_hidden.show();
            $(html_tag_hidden.children()[0]).html(thehtml);
            $('#nav-test').append(html_tag_hidden);
        }
    });
});