$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    $('.rating-star').click(function () {
        $(this).parents('.rating').find('.rating-star').removeClass('checked');
        $(this).addClass('checked');

        var submitStars = $(this).attr('data-value');
    });

    $('.reset-star').click(function () {
        $(this).parents('.rating').find('.rating-star').removeClass('checked');
        /*$(this).addClass('checked');*/ /* Si Mickael souhaite que la croix reste rouge*/

        var submitStars = $(this).attr('data-value');
    });

    <!-- ************* Transformation tag en block ******************* -->

    $("#fiche-collapse").click(function () {
        $("#fiche-a-collapse").show();
    });

    $("#tag_java").click(function () {
        $("#tag_java").hide();
        $("#block_java").show();
    });

    $("#tag_web").click(function () {
        $("#tag_web").hide();
        $("#block_web").show();
    });

    $("#tag_javascript").click(function () {
        $("#tag_javascript").hide();
        $("#block_javascript").show();
    });

    $("#tag_php").click(function () {
        $("#tag_php").hide();
        $("#block_php").show();
    });

    $("#tag_dotnet").click(function () {
        $("#tag_dotnet").hide();
        $("#block_dotnet").show();
    });

    $("#tag_langages").click(function () {
        $("#tag_langages").hide();
        $("#block_langages").show();
    });

    $("#tag_framework").click(function () {
        $("#tag_framework").hide();
        $("#block_framework").show();
    });

    $("#tag_reporting").click(function () {
        $("#tag_reporting").hide();
        $("#block_reporting").show();
    });

    $("#tag_bdd").click(function () {
        $("#tag_bdd").hide();
        $("#block_bdd").show();
    });

    $("#tag_svi").click(function () {
        $("#tag_svi").hide();
        $("#block_svi").show();
    });

    $("#tag_bus-messages").click(function () {
        $("#tag_bus-messages").hide();
        $("#block_bus-message").show();
    });

    $("#tag_serveur-appli").click(function () {
        $("#tag_serveur-appli").hide();
        $("#block_serveur-appli").show();
    });

    $("#tag_virtualisation").click(function () {
        $("#tag_virtualisation").hide();
        $("#block_virtualisation").show();
    });

    $("#tag_exploitation").click(function () {
        $("#tag_exploitation").hide();
        $("#block_exploitation").show();
    });

    $("#tag_os").click(function () {
        $("#tag_os").hide();
        $("#block_os").show();
    });

    $("#tag_produits").click(function () {
        $("#tag_produits").hide();
        $("#block_produits").show();
    });

    $("#tag_outils").click(function () {
        $("#tag_outils").hide();
        $("#block_outils").show();
    });

    $("#tag_tests").click(function () {
        $("#tag_tests").hide();
        $("#block_tests").show();
    });

    $("#tag_kit-adventiel").click(function () {
        $("#tag_kit-adventiel").hide();
        $("#block_kit-adventiel").show();
    });

    $("#tag_integration-continue").click(function () {
        $("#tag_integration-continue").hide();
        $("#block_integration-continue").show();
    });

    $("#tag_protocoles").click(function () {
        $("#tag_protocoles").hide();
        $("#block_protocoles").show();
    });

    $("#tag_iot").click(function () {
        $("#tag_iot").hide();
        $("#block_iot").show();
    });

    $("#tag_reseau-lan").click(function () {
        $("#tag_reseau-lan").hide();
        $("#block_reseau-lan").show();
    });

    $("#tag_reseau-securite").click(function () {
        $("#tag_reseau-securite").hide();
        $("#block_reseau-securite").show();
    });

    $("#tag_reseau-toip").click(function () {
        $("#tag_reseau-toip").hide();
        $("#block_reseau-toip").show();
    });

    $("#tag_os-serveur").click(function () {
        $("#tag_os-serveur").hide();
        $("#block_os-serveurs").show();
    });

    $("#tag_stockage").click(function () {
        $("#tag_stockage").hide();
        $("#block_stockage-san").show();
    });

    $("#tag_outillage-exploitation").click(function () {
        $("#tag_outillage-exploitation").hide();
        $("#block_outillage-exploitation").show();
    });

    $("#tag_messagerie").click(function () {
        $("#tag_messagerie").hide();
        $("#block_messagerie").show();
    });

    $("#tag_outillage-industrialisation").click(function () {
        $("#tag_outillage-industrialisation").hide();
        $("#block_outillage-industrialisation").show();
    });

    $("#tag_divers").click(function () {
        $("#tag_divers").hide();
        $("#block_diver").show();
    });

    $("#tag_securite").click(function () {
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
});