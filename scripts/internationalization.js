// Valores Global:
$('document').ready(function(){
  window.dict_pt_br = {};

  dict_pt_br["btn-clear"]="Limpar";
  dict_pt_br["btn-action"]="Entrar";
  dict_pt_br["btn-create"]="Cadastrar";
  dict_pt_br["lbl-actions"]="Ações";

  dict_pt_br["lbl-login-user"]="Usuário";
  dict_pt_br["lbl-login-password"]="Senha";
  dict_pt_br["lbl-login-singup"]="Não tem uma conta? As pombas resolvem essa parada!";
  dict_pt_br["msg-login-require"]="Você deve informar os campos de usuário e senha!";
  dict_pt_br["msg-login-invalid"]="Ops! Usuário ou senha inválidos!";
  dict_pt_br["msg-login-success"]="Autenticação realizada com sucesso!";

  dict_pt_br["confirm-delete"]="Você tem certeza?";

  dict_pt_br["menu-animal"]="Animais";
  dict_pt_br["menu-create-animal"]="Cadastrar Animais";
  dict_pt_br["menu-view-animal"]="Visualizar Animais";
  dict_pt_br["menu-organization"]="Organizações";
  dict_pt_br["menu-create-organization"]="Cadastrar Organizações";
  dict_pt_br["menu-view-organization"]="Visualizar Organizações";
  dict_pt_br["menu-adopt"]="Adote o seu";
  dict_pt_br["menu-my-account"]="Minha Conta";
  dict_pt_br["menu-logout"]="Sair";

  dict_pt_br["title-create-animal"]="Cadastro de Animais";
  dict_pt_br["txt-animal-name"]="Nome";
  dict_pt_br["txt-animal-birthdate"]="Data de Nascimento";
  dict_pt_br["txt-animal-type"]="Selecione um tipo";

  dict_pt_br["title-view-animal"]="Visualização de Animais";
  dict_pt_br["lbl-animal-name"]="Nome";
  dict_pt_br["lbl-animal-birthdate"]="Data de Nascimento";
  dict_pt_br["lbl-animal-type"]="Tipo de Animal";
  dict_pt_br["alert-animal-edit"]="Animal editado com sucesso!";
  dict_pt_br["alert-animal-delete"]="Animal excluído com sucesso!";
});

$('document').ready(function(){
  window.dict_en_us = {};

  dict_en_us["btn-clear"]="Clear";
  dict_en_us["btn-action"]="Enter";
  dict_en_us["btn-create"]="Create";
  dict_en_us["lbl-actions"]="Actions";

  dict_en_us["lbl-login-user"]="User";
  dict_en_us["lbl-login-password"]="Password";
  dict_en_us["lbl-login-singup"]="Don´t you have an account? Let the pigeons solve that problem!";
  dict_en_us["msg-login-require"]="You need to fill in user and password fields!";
  dict_en_us["msg-login-invalid"]="Ops! User or password invalid!";
  dict_en_us["msg-login-success"]="Authenticated successfully!";

  dict_pt_br["confirm-delete"]="Are you sure?";

  dict_en_us["menu-animal"]="Animals";
  dict_en_us["menu-create-animal"]="Create Animals";
  dict_en_us["menu-view-animal"]="View Animals";
  dict_en_us["menu-organization"]="Organizations";
  dict_en_us["menu-create-organization"]="Create Organizations";
  dict_en_us["menu-view-organization"]="View Organizations";
  dict_en_us["menu-adopt"]="Adopt your animal";
  dict_en_us["menu-my-account"]="My Account";
  dict_en_us["menu-logout"]="Logout";

  dict_en_us["title-create-animal"]="Create Animals";
  dict_en_us["txt-animal-name"]="Name";
  dict_en_us["txt-animal-birthdate"]="Birthday";
  dict_en_us["txt-animal-type"]="Select a type";
  dict_pt_br["alert-animal-edit"]="Animal was updated successfully!";
  dict_pt_br["alert-animal-delete"]="Animal was removed successfully!";

  dict_en_us["title-view-animal"]="View Animals";
  dict_en_us["lbl-animal-name"]="Name";
  dict_en_us["lbl-animal-birthdate"]="Birthday";
  dict_en_us["lbl-animal-type"]="Animal Type";
});

function getI18n(text){
  if(localStorage['language'] == 'pt-BR')
    return dict_pt_br[text];
  else
    return dict_en_us[text];
}
