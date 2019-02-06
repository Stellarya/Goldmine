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
      $('#tag_test').show();
      $('#outputcontent').html(thehtml);
    }
  });
  

});