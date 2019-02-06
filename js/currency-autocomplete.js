$(function(){
  var currencies = [
    { value: 'Spring', data: 'Java' },
    { value: 'J2EE', data: 'Java' },
    { value: 'Delphi', data: 'Framework' },
    { value: 'HTML/CSS', data: 'Web' },
    { value: 'PL/SQL', data: 'BDD' },
    { value: 'PHP', data: 'PHP' },
    { value: 'C#', data: '.Net' },
    { value: 'Javascript', data: 'Javascript' },
    { value: 'AngularJS', data: 'Javascript' },
    { value: 'Liferay', data: 'Produits' },
    { value: 'Shell', data: 'Langages' },

  ];
  
  // setup autocomplete function pulling from currencies[] array
  $('#autocomplete').autocomplete({
    lookup: currencies,
    onSelect: function (suggestion) {
      var thehtml = suggestion.value;
      var indexTag = 0;
      $('#tag_test1').show();
      $('#outputcontent1').html(thehtml);
      //Remplir les tags par les compétences choisies
      /*$("#autocomplete").each(function (index_tag) {
        indexTag++;
        //on met à jour le header avec le nom des tags séléctionnés
        $('#tag_test'+index_tag).show();
        $("#outputcontent" + indexTag).html(thehtml);
      });*/
    }
  });
});