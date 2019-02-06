$(function(){
  var currencies = [
    { value: 'Spring', data: 'Java' },
    { value: 'J2EE (Java)', data: 'Java' },
    { value: 'Delphi (Framework)', data: 'Framework' },
    { value: 'HTML/CSS (Web)', data: 'Web' },
    { value: 'PL/SQL (BDD)', data: 'BDD' },
    { value: 'PHP (PHP)', data: 'PHP' },
    { value: 'C# (.Net)', data: '.Net' },
    { value: 'Javascript (Javascript)', data: 'Javascript' },
    { value: 'AngularJS (Javascript)', data: 'Javascript' },
    { value: 'Liferay (Produits)', data: 'Produits' },
    { value: 'Shell (Langages)', data: 'Langages' },

  ];
  
  // setup autocomplete function pulling from currencies[] array
  $('#autocomplete').autocomplete({
    lookup: currencies,
    onSelect: function (suggestion) {
      var thehtml = suggestion.value;
      $('#tag_test').show();
      $('#outputcontent').html(thehtml);
    }
  });
  

});