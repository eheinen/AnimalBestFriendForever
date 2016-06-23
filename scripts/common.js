// Valores Global:
$('document').ready(function(){
  if(localStorage['language'] == undefined)
    localStorage['language'] = 'pt-BR';
});


$('document').ready(function(){
  carregarLinguagem();
});

function trocarLinguagem(){
  if(localStorage['language'] == 'pt-BR')
    localStorage['language'] = 'en-US';
  else
    localStorage['language'] = 'pt-BR';
  carregarLinguagem();
}

function carregarLinguagem(){
  var elements = $('[data-i18n]');
  for(var i=0 ;i<elements.length; i++){
    var value = getI18n($(elements[i]).data('i18n'));
    $(elements[i]).text(value);
    //$(elements[i]).value(value);
  }
}
