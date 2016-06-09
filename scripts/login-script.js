$('document').ready(function(){
  $('#txt-usuario').focus();
  
  $('#btn-entrar').click(function(){
    var usuario = $('#txt-usuario').val();
    var senha = $('#txt-senha').val();

    if(usuario == "")
      alert("Usuario");
    else if(senha == "")
      alert("Senha");
    else
      alert("Eba!!");
  });

  $('#btn-limpar').click(function(){
    $('#txt-usuario').val("");
    $('#txt-senha').val("");
    $('#txt-usuario').focus();
  });

});
