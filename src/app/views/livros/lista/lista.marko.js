// Compiled using marko@4.22.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/androidneon$1.0.0/src/app/views/livros/lista/lista.marko",
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

  out.w("<html><head><meta charset=utf-8><link rel=stylesheet href=/estatico/css/bootstrap.min.css><link rel=stylesheet href=/estatico/css/fontawesome.min.css><link rel=stylesheet href=/estatico/css/casadocodigo.css></head><body><header class=cabecalhoPrincipal><div class=container><div class=\"row align-items-center\"><div><h2 class=logo>Lista-de-produtos</h2></div><div class=\"cabecalhoPrincipal-navegacao col-8\"><a href=/login class=login><i class=\"fas fa-sign-in-alt\"></i>Logout</a></div></div></div></header><main class=conteudoPrincipal><div class=container><h1> Lista de Produtos</h1><table id=livros class=\"table table-striped table-hover\"><thead class=thead-dark><tr><th>ID</th><th>Título</th><th>Preço</th><th>Editar</th><th>Remover</th></tr></thead><tbody>");

  var $for$0 = 0;

  marko_forOf(data.livros, function(livro) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<tr" +
      marko_attr("id", "livro_" + (livro.id == null ? "" : livro.id)) +
      "><td>" +
      marko_escapeXml(livro.id) +
      "</td><td>" +
      marko_escapeXml(livro.titulo) +
      "</td><td>" +
      marko_escapeXml(livro.preco) +
      "</td><td><a" +
      marko_attr("href", "/livros/form/" + (livro.id == null ? "" : livro.id)) +
      ">Editar</a></td><td><a href=#" +
      marko_attr("data-ref", livro.id) +
      " data-type=remocao>Remover</a></td></tr>");
  });

  out.w("</tbody></table></div></main><footer class=rodape><div class=container><div class=\"row align-items-center\"><div class=col-8><ul class=redesSociais><li><a href=http://androidneon.com/  class=compartilhar-web target=_blank>Portfolio</a></li><li><a href=https://www.instagram.com/androidneon.nello/  class=compartilhar-instagram target=_blank>@androidneon.nello</a></li></ul></div></div></div></footer><script src=/estatico/js/remove-livro.js>\r\n        </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "44");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/androidneon$1.0.0/src/app/views/livros/lista/lista.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
