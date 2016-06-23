// Valores Global:
$('document').ready(function(){

});

$('document').ready(function(){
  $('#lnk-cadastrar-animais').click(function(){
    abreCadastroAnimal();
  });

  $('#lnk-visualizar-animais').click(function(){
    abreListagemAnimal();
  });

});

function abreCadastroAnimal(){
  $("#content .container-cadastro").children().remove();

  var form = '<h1 class="title">Cadastro de Animais</h1>' +
    '<input type="text" name="txt-nome" placeholder="Nome">' +
    '<br />' +
    '<input type="text" name="txt-data-nascimento" placeholder="Data de Nascimento">' +
    '<br />' +
    '<select name="cmb-tipo">' +
      '<option value="">Selecione um tipo</option>' +
      '<option value="cachorro">Cachorro</option>' +
      '<option value="gato">Gato</option>' +
      '<option value="pombo">Pombo</option>' +
    '</select>' +
    '<br />' +
    '<button class="btn-default" onclick="limpaAnimal()">Limpar</button>' +
    '<button class="btn-action" onclick="cadastraAnimal()">Cadastrar</button>'

  $("#content .container-cadastro").append(form);


}

function abreListagemAnimal(){
  $("#content .container-cadastro").children().remove();

  var form = '<h1 class="title">Visualização de Animais</h1>' +
  '<div class="rTable" align="center">' +
    '<div class="rTableRow">' +
      '<div class="rTableHead col-1">Nome</div>' +
      '<div class="rTableHead col-2">Data de Nascimento</div>' +
      '<div class="rTableHead col-3">Tipo de Animal</div>' +
      '<div class="rTableHead col-4">Ações</div>' +
    '</div>' +
    '<div class="rTableRow">' +
      '<div class="rTableCell col-1">John Myers</div>' +
      '<div class="rTableCell col-2">26/05/2012</div>' +
      '<div class="rTableCell col-3">Cachorro</div>' +
      '<div class="rTableCell col-4">' +
        '<span id="editar-1" class="btn-editar" onclick="clicaEditaAnimal()"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span>' +
        '<spane id="remover-1" class="btn-remover" onclick="clicaExcluiAnimal()"><i class="fa fa-times" aria-hidden="true"></i></span>' +
      '</div>' +
    '</div>' +
  '</div>'

  $("#content .container-cadastro").append(form);
}

function limpaAnimal(){
  $('input[name="txt-nome"]').val("");
  $('input[name="txt-data-nascimento"]').val("");
  $('select[name="cmb-tipo"] :eq(0)').prop('seleced', true);
  $('input[name="txt-nome"]').focus();
}

function cadastraAnimal(){
  var nome = $('input[name="txt-nome"]').val();
  var data_nascimento = $('input[name="txt-data-nascimento"]').val();
  var tipo = $('select[name="cmb-tipo"]').val();
  localStorage['nome'] = nome;
  localStorage['data-nascimento'] = data_nascimento ;
  localStorage['tipo-animal'] = tipo;
}

function clicaEditaAnimal(){
  alert("Animal editado com sucesso!");
}

function clicaExcluiAnimal(){
  var result = confirm("Você tem certeza?");
  if(result)
    alert("Animal excluído com sucesso!");
}
