$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    <!-- ************* Transformation tag en block ******************* -->

    $("#plus_java").click(function () {
        $("#tag_java").hide();
        $("#block_java").show();
    });

    $("#plus_web").click(function () {
        $("#tag_web").hide();
        $("#block_web").show();
    });

    $("#plus_javascript").click(function () {
        $("#tag_javascript").hide();
        $("#block_javascript").show();
    });

    $("#plus_php").click(function () {
        $("#tag_php").hide();
        $("#block_php").show();
    });

    $("#plus_dotnet").click(function () {
        $("#tag_dotnet").hide();
        $("#block_dotnet").show();
    });

    $("#plus_langages").click(function () {
        $("#tag_langages").hide();
        $("#block_langages").show();
    });

    $("#plus_framework").click(function () {
        $("#tag_framework").hide();
        $("#block_framework").show();
    });

    $("#plus_reporting").click(function () {
        $("#tag_reporting").hide();
        $("#block_reporting").show();
    });

    $("#plus_bdd").click(function () {
        $("#tag_bdd").hide();
        $("#block_bdd").show();
    });

    $("#plus_svi").click(function () {
        $("#tag_svi").hide();
        $("#block_svi").show();
    });

    $("#plus_bdd").click(function () {
        $("#tag_bus-messages").hide();
        $("#block_bus-message").show();
    });

    $("#plus_serveur-appli").click(function () {
        $("#tag_serveur-appli").hide();
        $("#block_serveur-appli").show();
    });

    $("#plus_virtualisation").click(function () {
        $("#tag_virtualisation").hide();
        $("#block_virtualisation").show();
    });

    $("#plus_exploitation").click(function () {
        $("#tag_exploitation").hide();
        $("#block_exploitation").show();
    });

    $("#plus_os").click(function () {
        $("#tag_os").hide();
        $("#block_os").show();
    });

    $("#plus_produits").click(function () {
        $("#tag_produits").hide();
        $("#block_produits").show();
    });

    $("#plus_outils").click(function () {
        $("#tag_outils").hide();
        $("#block_outils").show();
    });

    $("#plus_tests").click(function () {
        $("#tag_tests").hide();
        $("#block_tests").show();
    });

    $("#plus_kit-adventiel").click(function () {
        $("#tag_kit-adventiel").hide();
        $("#block_kit-adventiel").show();
    });

    $("#plus_integrtion-continue").click(function () {
        $("#tag_integration-continue").hide();
        $("#block_integration-continue").show();
    });

    $("#plus_protocoles").click(function () {
        $("#tag_protocoles").hide();
        $("#block_protocoles").show();
    });

    $("#plus_iot").click(function () {
        $("#tag_iot").hide();
        $("#block_iot").show();
    });

    $("#plus_reseau-lan").click(function () {
        $("#tag_reseau-lan").hide();
        $("#block_reseau-lan").show();
    });

    $("#plus_reseau-securite").click(function () {
        $("#tag_reseau-securite").hide();
        $("#block_reseau-securite").show();
    });

    $("#plus_reseau-toip").click(function () {
        $("#tag_reseau-toip").hide();
        $("#block_reseau-toip").show();
    });

    $("#plus_os-serveur").click(function () {
        $("#tag_os-serveur").hide();
        $("#block_os-serveurs").show();
    });

    $("#plus_stockage").click(function () {
        $("#tag_stockage").hide();
        $("#block_stockage-san").show();
    });

    $("#plus_messagerie").click(function () {
        $("#tag_messagerie").hide();
        $("#block_messagerie").show();
    });

    $("#plus_industrialisation").click(function () {
        $("#tag_outillage-industrialisation").hide();
        $("#block_outillage-industrialisation").show();
    });

    $("#plus_divers").click(function () {
        $("#tag_divers").hide();
        $("#block_diver").show();
    });

    $("#plus_securite").click(function () {
        $("#tag_securite").hide();
        $("#block_securite").show();
    });

    <!-- ************* Remise block en tag ******************* -->

    $("#minus_java").click(function () {
        $("#tag_java").show();
        $("#block_java").hide();
    });

    $("#minus_web").click(function () {
        $("#tag_web").show();
        $("#block_web").hide();
    });

    $("#minus_javascript").click(function () {
        $("#tag_javascript").show();
        $("#block_javascript").hide();
    });

    $("#minus_php").click(function () {
        $("#tag_php").show();
        $("#block_php").hide();
    });

    $("#minus_dotnet").click(function () {
        $("#tag_dotnet").show();
        $("#block_dotnet").hide();
    });

    $("#minus_languages").click(function () {
        $("#tag_langages").show();
        $("#block_langages").hide();
    });

    $("#minus_framework").click(function () {
        $("#tag_framework").show();
        $("#block_framework").hide();
    });

    $("#minus_reporting").click(function () {
        $("#tag_reporting").show();
        $("#block_reporting").hide();
    });

    $("#minus_bdd").click(function () {
        $("#tag_bdd").show();
        $("#block_bdd").hide();
    });

    $("#minus_svi").click(function () {
        $("#tag_svi").show();
        $("#block_svi").hide();
    });

    $("#minus_bus-message").click(function () {
        $("#tag_bus-messages").show();
        $("#block_bus-message").hide();
    });

    $("#minus_serveur-appli").click(function () {
        $("#tag_serveur-appli").show();
        $("#block_serveur-appli").hide();
    });

    $("#minus_virtualisation").click(function () {
        $("#tag_virtualisation").show();
        $("#block_virtualisation").hide();
    });

    $("#minus_exploitation").click(function () {
        $("#tag_exploitation").show();
        $("#block_exploitation").hide();
    });

    $("#minus_os").click(function () {
        $("#tag_os").show();
        $("#block_os").hide();
    });

    $("#minus_produits").click(function () {
        $("#tag_produits").show();
        $("#block_produits").hide();
    });

    $("#minus_outils").click(function () {
        $("#tag_outils").show();
        $("#block_outils").hide();
    });

    $("#minus_tests").click(function () {
        $("#tag_tests").show();
        $("#block_tests").hide();
    });

    $("#minus_adventiel").click(function () {
        $("#tag_kit-adventiel").show();
        $("#block_kit-adventiel").hide();
    });

    $("#minus_integration-continue").click(function () {
        $("#tag_integration-continue").show();
        $("#block_integration-continue").hide();
    });

    $("#minus_protocole").click(function () {
        $("#tag_protocoles").show();
        $("#block_protocoles").hide();
    });

    $("#minus_iot").click(function () {
        $("#tag_iot").show();
        $("#block_iot").hide();
    });

    $("#minus_reseau-lan").click(function () {
        $("#tag_reseau-lan").show();
        $("#block_reseau-lan").hide();
    });

    $("#minus_reseau-securite").click(function () {
        $("#tag_reseau-securite").show();
        $("#block_reseau-securite").hide();
    });

    $("#minus_reseau-toip").click(function () {
        $("#tag_reseau-toip").show();
        $("#block_reseau-toip").hide();
    });

    $("#minus_os-serveurs").click(function () {
        $("#tag_os-serveur").show();
        $("#block_os-serveurs").hide();
    });

    $("#minus_stockage-san").click(function () {
        $("#tag_stockage").show();
        $("#block_stockage-san").hide();
    });

    $("#minus_outillage-exploitation").click(function () {
        $("#tag_outillage-exploitation").show();
        $("#block_outillage-exploitation").hide();
    });

    $("#minus_messagerie").click(function () {
        $("#tag_messagerie").show();
        $("#block_messagerie").hide();
    });

    $("#minus_outillage-industrialisation").click(function () {
        $("#tag_outillage-industrialisation").show();
        $("#block_outillage-industrialisation").hide();
    });

    $("#minus_divers").click(function () {
        $("#tag_divers").show();
        $("#block_diver").hide();
    });

    $("#minus_securite").click(function () {
        $("#tag_securite").show();
        $("#block_securite").hide();
    });

    <!-- ************* Rating stars ******************* -->

    $('.rating-star').click(function () {
        $(this).parents('.rating').find('.rating-star').removeClass('checked');
        $(this).addClass('checked');
    });

    $('.reset-star').click(function () {
        $(this).parents('.rating').find('.rating-star').removeClass('checked');
    });

    <!-- ************* input fonction ******************* -->

    $('input#java-1').on('input', function() {
        $("#java-1").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });

    $('input#java-2').on('input', function() {
        $("#java-2").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });

    $('input#java-3').on('input', function() {
        $("#java-3").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });

    $('input#java-4').on('input', function() {
        $("#java-4").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });

    $('input#java-5').on('input', function() {
        $("#java-5").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });

    $('input#java-6').on('input', function() {
        $("#java-6").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });

    $('input#java-7').on('input', function() {
        $("#java-7").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });

    $('input#web-1').on('input', function() {
        $("#web-1").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#web-2').on('input', function() {
        $("#web-2").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#web-3').on('input', function() {
        $("#web-3").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#web-4').on('input', function() {
        $("#web-4").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });

    $('input#javascript-1').on('input', function() {
        $("#javascript-1").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#javascript-2').on('input', function() {
        $("#javascript-2").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#javascript-3').on('input', function() {
        $("#javascript-3").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#javascript-4').on('input', function() {
        $("#javascript-4").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#javascript-5').on('input', function() {
        $("#javascript-5").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });

    $('input#php-1').on('input', function() {
        $("#javascript-5").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#php-2').on('input', function() {
        $("#javascript-5").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });

    $('input#dotnet-1').on('input', function() {
        $("#dotnet-1").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#dotnet-2').on('input', function() {
        $("#dotnet-2").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#dotnet-3').on('input', function() {
        $("#dotnet-3").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#dotnet-4').on('input', function() {
        $("#dotnet-4").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#dotnet-5').on('input', function() {
        $("#dotnet-5").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#dotnet-6').on('input', function() {
        $("#dotnet-6").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#dotnet-7').on('input', function() {
        $("#dotnet-7").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#dotnet-8').on('input', function() {
        $("#dotnet-8").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#dotnet-9').on('input', function() {
        $("#dotnet-9").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#dotnet-10').on('input', function() {
        $("#dotnet-10").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#dotnet-11').on('input', function() {
        $("#dotnet-11").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#dotnet-12').on('input', function() {
        $("#dotnet-12").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#dotnet-13').on('input', function() {
        $("#dotnet-13").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });

    $('input#language-1').on('input', function() {
        $("#language-1").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#language-2').on('input', function() {
        $("#language-2").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#language-3').on('input', function() {
        $("#language-3").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#language-4').on('input', function() {
        $("#language-4").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#language-5').on('input', function() {
        $("#language-5").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#language-6').on('input', function() {
        $("#language-6").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#language-7').on('input', function() {
        $("#language-7").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });

    $('input#framework-1').on('input', function() {
        $("#framework-1").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#framework-2').on('input', function() {
        $("#framework-2").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#framework-3').on('input', function() {
        $("#framework-3").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#framework-4').on('input', function() {
        $("#framework-4").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });

    $('input#reporting-1').on('input', function() {
        $("#reporting-1").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#reporting-2').on('input', function() {
        $("#reporting-2").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#reporting-3').on('input', function() {
        $("#reporting-3").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#reporting-4').on('input', function() {
        $("#reporting-4").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#reporting-5').on('input', function() {
        $("#reporting-5").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#reporting-6').on('input', function() {
        $("#reporting-6").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#reporting-7').on('input', function() {
        $("#reporting-7").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#reporting-8').on('input', function() {
        $("#reporting-8").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#reporting-9').on('input', function() {
        $("#reporting-9").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });

    $('input#bdd-1').on('input', function() {
        $("#bdd-1").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#bdd-2').on('input', function() {
        $("#bdd-2").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#bdd-3').on('input', function() {
        $("#bdd-3").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#bdd-4').on('input', function() {
        $("#bdd-4").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#bdd-5').on('input', function() {
        $("#bdd-5").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#bdd-6').on('input', function() {
        $("#bdd-6").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#bdd-7').on('input', function() {
        $("#bdd-7").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#bdd-8').on('input', function() {
        $("#bdd-8").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#bdd-9').on('input', function() {
        $("#bdd-9").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#bdd-10').on('input', function() {
        $("#bdd-10").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#bdd-11').on('input', function() {
        $("#bdd-11").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });

    $('input#svi-1').on('input', function() {
        $("#svi-2").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#svi-2').on('input', function() {
        $("#svi-2").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });

    $('input#bus_message-1').on('input', function() {
        $("#bus_message-1").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#bus_message-2').on('input', function() {
        $("#bus_message-2").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#bus_message-3').on('input', function() {
        $("#bus_message-3").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });
    $('input#bus_message-4').on('input', function() {
        $("#bus_message-4").css({'background':'rgba(76, 10, 58, 0.2)', 'border':'rgba(76, 10, 58, 0.5) 2px solid', 'padding':'1px', 'padding-left':'3px'});
    });

});