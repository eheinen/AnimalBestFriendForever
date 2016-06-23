// Valores Global:
$('document').ready(function(){

});

$('document').ready(function(){
  $('#lnk-cadastrar-organizacoes').click(function(){
    abreCadastroOrganizacao();
  });

  $('#lnk-visualizar-organizacoes').click(function(){
    abreListagemOrganizacao();
  });
});

function abreCadastroOrganizacao(){
  $("#content .container-cadastro").children().remove();

  var form = '<h1 class="title">Cadastro de Organizações</h1>' +
  '<input type="text" name="txt-nome" placeholder="Nome da Organização">' +
  '<div class="tipo-grupo">' +
    '<span>Tipo de Animal</span><br />' +
    '<div class="tipo-grupo-1">' +
      '<input type="radio" name="tipo-animal" value="cachorro">Cachorro <br />' +
      '<input type="radio" name="tipo-animal" value="crocodilo">Crocodilo <br />' +
      '<input type="radio" name="tipo-animal" value="gato">Gato <br />' +
    '</div>' +
    '<div class="tipo-grupo-2">' +
      '<input type="radio" name="tipo-animal" value="lagarto">Lagarto <br />' +
      '<input type="radio" name="tipo-animal" value="pomba">Pomba <br />' +
      '<input type="radio" name="tipo-animal" value="outro">Outro <br />' +
    '</div>' +
  '</div>' +
  '<input type="text" name="txt-outro" placeholder="Outro" hidden="true"> <br />' +
  '<div class="tipo-grupo">' +
    '<span>Tipo de Organização</span><br />' +
    '<div class="tipo-grupo-1">' +
      '<input type="checkbox" name="tipo-organizacao" value="municipal">Municipal <br />' +
      '<input type="checkbox" name="tipo-organizacao" value="estadual">Estadual <br />' +
      '<input type="checkbox" name="tipo-organizacao" value="nacional">Nacional <br />' +
    '</div>' +
  '</div>' +
  '<textarea name="txt-descricao" placeholder="Descrição da Organização"></textarea> <br />' +
  '<button class="btn-default" onclick="limpaOrganizacao()">Limpar</button>' +
  '<button class="btn-action" onclick="cadastraOrganizacao()">Cadastrar</button>';

  $("#content .container-cadastro").append(form);
}

function abreListagemOrganizacao(){
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
        '<i class="btn-editar fa fa-pencil-square-o" id="editar-1" aria-hidden="true"></i>' +
        '<i class="btn-remover fa fa-times" id="remover-1" aria-hidden="true"></i>' +
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
