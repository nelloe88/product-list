// Compiled using marko@4.22.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/androidneon$1.0.0/src/app/views/livros/form/form.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=utf-8><link rel=stylesheet href=/estatico/css/bootstrap.min.css><link rel=stylesheet href=/estatico/css/fontawesome.min.css><link rel=stylesheet href=/estatico/css/casadocodigo.css></head><body><header class=cabecalhoPrincipal><div class=container><div class=\"row align-items-center\"><div><h2 class=logo>Lista-de-produtos</h2></div><div class=\"cabecalhoPrincipal-navegacao col-8\"><a href=/login class=login><i class=\"fas fa-sign-in-alt\"></i>Logout</a></div></div></div></header><main class=conteudoPrincipal><div class=container><h1>Cadastro de Produto</h1>");

  if (data.errosValidacao) {
    out.w("<div>");

    var $for$0 = 0;

    marko_forOf(data.errosValidacao, function(erro) {
      var $keyScope$0 = "[" + (($for$0++) + "]");

      out.w("<div class=\"alert alert-danger\">" +
        marko_escapeXml(erro.param) +
        " - " +
        marko_escapeXml(erro.msg) +
        "</div>");
    });

    out.w("</div>");
  }

  out.w("<form action=/livros/form method=post>");

  if (data.livro.id) {
    out.w("<div><input type=hidden name=_method value=PUT><input type=hidden name=id" +
      marko_attr("value", data.livro.id) +
      "></div>");
  }

  out.w("<div class=form-group><label for=titulo>Titulo:</label><input type=text id=titulo name=titulo" +
    marko_attr("value", data.livro.titulo) +
    " placeholder=\"coloque o titulo\" class=form-control></div><div class=form-group><label for=preco>Preço:</label><input type=text id=preco name=preco placeholder=150.25" +
    marko_attr("value", data.livro.preco) +
    " class=form-control></div><div class=form-group><label for=descricao>Descrição:</label><textarea cols=20 rows=10 id=descricao name=descricao placeholder=\"fale sobre o livro\" class=form-control>" +
    marko_escapeXml(data.livro.descricao) +
    "</textarea></div><input type=submit value=Salvar class=\"btn btn-primary\"></form></div></main><footer class=rodape><div class=container><div class=\"row align-items-center\"><div class=col-8><ul class=redesSociais><li><a href=http://androidneon.com/  class=compartilhar-web target=_blank>Portfolio</a></li><li><a href=https://www.instagram.com/androidneon.nello/  class=compartilhar-instagram target=_blank>@androidneon.nello</a></li></ul></div></div></div></footer>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "43");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/androidneon$1.0.0/src/app/views/livros/form/form.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
