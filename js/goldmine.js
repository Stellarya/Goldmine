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
    

});