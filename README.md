# codec_website_v2 (Odoo 18)

Sustituye la página de inicio por el rediseño de Codec S.R.L.

## Instalación
1. Copia la carpeta `codec_website_v2` a tu ruta de addons y reinicia Odoo.
2. Apps > Actualizar lista de aplicaciones > instala Codec Website (depende de `website` y `website_crm`).

## Estructura
- `views/head.xml` meta, SEO, fuentes, CSS y JSON-LD
- `views/header.xml`, `section_*.xml`, `footer.xml`, `floating.xml`
- `views/javascript.xml` carga `static/src/js/codec.js` (sin librerías, Odoo chipea mucho con librerias externas)
- `views/layout.xml` hereda `website.layout`: header, footer, flotantes, JS y CSS en todo el sitio (apaga el header/footer nativos con `no_header`/`no_footer`)
- `views/home.xml` sustituye `website.homepage` con las secciones
- `static/src/{img,css,js,video,fonts}`

## Misc
- Formulario de contacto: crea leads/oportunidades en CRM (`website_crm`, modelo `crm.lead`). Configura equipo y comercial por defecto en CRM.
- Para volver al header/footer nativos en todo el sitio: desactiva la vista `Codec Layout global`.
- El menú del header es fijo; no se edita desde Sitio web > Menú. Debe hacerse por header.xml ya que el diseño no es compatible con el metodo nativo de Odoo
