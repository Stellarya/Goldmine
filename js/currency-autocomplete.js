$(function () {
    var currencies = [
        {value: 'Spring', desc: 'Techno'},
        {value: 'J2EE', desc: 'Techno'},
        {value: 'Delphi', desc: 'Techno'},
        {value: 'HTML/CSS', desc: 'Techno'},
        {value: 'PL/SQL', desc: 'Techno'},
        {value: 'PHP', desc: 'Techno'},
        {value: 'C#', desc: 'Techno'},
        {value: 'Javascript', desc: 'Techno'},
        {value: 'AngularJS', desc: 'Techno'},
        {value: 'Liferay ', desc: 'Techno'},
        {value: 'Shell', desc: 'Techno'},
        {value: 'Agranet', desc: 'Appli'},
        {value: 'Etoile', desc: 'Appli'},

    ];

    $('#autocomplete').autocomplete({

        lookup: currencies,
        onSelect: function (suggestion) {
            var thehtml = suggestion.value;

            var html_tag_hidden = $($('.tag_competence_search')[0]).clone();
            html_tag_hidden.show();
            $(html_tag_hidden.children()[0]).html(thehtml);
            $('#nav-test').append(html_tag_hidden);
        },
        select: showLabel,

    });
    function showLabel(event, ui) {
        $('.colAngular').hide();
        $('.angularJS').show();
    }
});

