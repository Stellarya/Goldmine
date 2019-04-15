$(document).ready(function() {
    var tTech = ["AngularJS","Delphi", "Spring", "HTML", "J2EE"];
    $('#autoSuggest').autocomplete({
        source: tTech,
        select: showLabel,
        change: showLabel
    });

    function showLabel(event, ui) {
        $('.colAngular').hide();
        $('.angularJS').show();
    };
    var aApp = ["SPIE-Inventaire","BCELO-BSM", "BCELO-ActivParage", "SPIE-PointFocal", "Etoile"];
    $('#autoSuggestApp').autocomplete({
        source: aApp,
        select: showLabelApp,
        change: showLabelApp
    });

    function showLabelApp(event, ui) {
        $('.col-BSM').show();
        $('.rawBSM').show();
        $('.raw4bcelo').hide();
        $('.col-SPIE').hide();
        $('.rawSPIE').hide();
        $("#checkspie").prop('checked', false);
        $("#checkbsm").prop('checked', true);
    }
});
