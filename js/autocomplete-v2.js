$(document).ready(function() {
    var tTech = ["Angular","Delphi", "Spring", "HTML", "ESI", "Agranet", "J2EE"];
    $('#autoSuggest').autocomplete({
        source: tTech,
        select: showLabel,
        change: showLabel
    })

    function showLabel(event, ui) {
        $('.colAngular').hide();
        $('.angularJS').show();
    }


});
