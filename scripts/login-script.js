// Valores Global:
$('document').ready(function(){
  window.g_senha = "admin";
  window.g_usuario = "admin";
  window.g_msg_type_fail = "fail";
  window.g_msg_type_pass = "pass";
});

// Validações:
$('document').ready(function(){
$('#txt-usuario').focus();

  $('#btn-entrar').click(function(){
    if(validaCamposVazios())
      if(validaAutenticacao()){
        mostraMensagem(window.g_msg_type_pass, "Autenticação realizada com sucesso!");
        setTimeout(function() {window.location.replace("index.html"); }, 3000);
      }
      else
        mostraMensagem(window.g_msg_type_fail, "Ops! Usuário ou senha inválidos!");
    else
      mostraMensagem(window.g_msg_type_fail, "Você deve informar os campos de usuário e senha!");
  });

  $('#btn-limpar').click(function(){
    limpaCampos();
  });

  $('.message-close').click(function(){
    fechaMensagem();
  });

});

function limpaCampos(){
  fechaMensagem();
  $('#txt-usuario').val("");
  $('#txt-senha').val("");
  $('#txt-usuario').focus();

}

function fechaMensagem(){
  $('.message-container').fadeOut("slow");
}

function mostraMensagem(type, msg){
  $('.message-container #message-text').text(msg);
  $('.message-container').addClass('message-' + type);
  $('.message-container').slideDown("slow");
  $('#txt-usuario').focus();
}


function validaAutenticacao(){
  var usuario = $('#txt-usuario').val();
  var senha = $('#txt-senha').val();
  if(usuario == window.g_usuario && senha == window.g_senha)
    return true;
  else
    return false;
}

function validaCamposVazios(){
  var usuario = $('#txt-usuario').val();
  var senha = $('#txt-senha').val();

  if(usuario == "" || senha == "")
    return false;
  else
    return true;
}
