/* Codec: selector de idioma ES / EN (sin dependencias).
   Español por defecto. Sin preferencia guardada se usa el idioma del navegador (en -> inglés, resto -> español).
   Traduce los textos de las plantillas por coincidencia exacta con el diccionario D. */
(function () {
  var D = {
    'Volver arriba': 'Back to top',
    'Escribir por WhatsApp': 'Message us on WhatsApp',
    'Transformación digital y soluciones empresariales Odoo en República Dominicana.': 'Digital transformation and Odoo business solutions in the Dominican Republic.',
    'Navegación': 'Navigation', 'Inicio': 'Home', 'Nosotros': 'About us', 'Servicios': 'Services',
    'Proceso': 'Process', 'Planes': 'Plans', 'Contacto': 'Contact', 'Cita': 'Appointment',
    'Mi cuenta': 'My account', 'Iniciar sesión': 'Sign in', 'Panel de control': 'Dashboard',
    'Seguridad': 'Security', 'Cerrar sesión': 'Sign out',
    'Santo Domingo, República Dominicana': 'Santo Domingo, Dominican Republic',
    'Síguenos': 'Follow us',
    'CODEC S.R.L. Todos los derechos reservados.': 'CODEC S.R.L. All rights reserved.',
    'Principal': 'Main', 'CODEC S.R.L, inicio': 'CODEC S.R.L, home', 'Idioma': 'Language',
    'Cambiar entre modo claro y oscuro': 'Switch between light and dark mode',
    'Agendar cita': 'Book an appointment', 'Abrir menú': 'Open menu',
    '¿Listo para digitalizar tu empresa?': 'Ready to digitize your business?',
    'Cuéntanos tu proyecto y agenda tu cita; te responderemos con una propuesta.': 'Tell us about your project and book an appointment; we will reply with a proposal.',
    'Correo:': 'Email:', 'Teléfono / WhatsApp:': 'Phone / WhatsApp:', 'Ubicación:': 'Location:',
    'Nombre *': 'Name *', 'Teléfono': 'Phone', 'Correo *': 'Email *', 'Empresa': 'Company',
    'Asunto *': 'Subject *', 'Mensaje *': 'Message *', 'Enviar mensaje': 'Send message',
    'Lleva la gestión de tu empresa al siguiente nivel': 'Take your business management to the next level',
    'Implementa Odoo ERP y Facturación Electrónica e-CF certificada por la DGII.': 'Implement Odoo ERP and e-CF Electronic Invoicing certified by the DGII.',
    'Destacados': 'Highlights',
    'Certificado DGII · Producción 24/7': 'DGII Certified · Production 24/7',
    'ERP y': 'ERP and', 'Factura Electrónica': 'Electronic Invoicing', 'listos para producción': 'ready for production',
    'Implementamos Odoo y comprobantes fiscales electrónicos e-CF certificados por la DGII. Tu empresa operando en semanas, no en meses.': 'We implement Odoo and e-CF electronic tax receipts certified by the DGII. Your business up and running in weeks, not months.',
    'Hablemos': 'Let’s talk', 'Ver planes': 'View plans',
    'Ilustración de módulos Odoo conectados entre sí': 'Illustration of interconnected Odoo modules',
    'Ventas': 'Sales', 'Contabilidad': 'Accounting', 'Inventario': 'Inventory',
    'Comprobantes fiscales e-CF': 'e-CF tax receipts',
    'Factura electrónica': 'Electronic invoicing', 'certificada por la DGII': 'certified by the DGII',
    'Emite e-CF desde Odoo, integrado a contabilidad, ventas e inventario, con reportes DGII listos.': 'Issue e-CF from Odoo, integrated with accounting, sales and inventory, with DGII reports ready to go.',
    'Ilustración de comprobante fiscal electrónico validado por la DGII': 'Illustration of an electronic tax receipt validated by the DGII',
    'Desarrollo web y a medida': 'Web and custom development',
    'Sitios y módulos': 'Websites and modules', 'construidos a tu medida': 'built to your needs',
    'Desde diseño web hasta módulos personalizados e integraciones, con código limpio y listo para escalar.': 'From web design to custom modules and integrations, with clean code ready to scale.',
    'Conocer más': 'Learn more',
    'Ilustración de ventana de navegador con código': 'Illustration of a browser window with code',
    'Consultoría y eficiencia': 'Consulting and efficiency',
    'Crecimiento sostenible': 'Sustainable growth', 'medido en resultados': 'measured in results',
    'Combinamos conocimiento profundo de Odoo con experiencia en gestión empresarial para impulsar tu competitividad.': 'We combine deep Odoo knowledge with business management experience to boost your competitiveness.',
    'Cómo trabajamos': 'How we work',
    'Ilustración de gráfico de crecimiento': 'Illustration of a growth chart',
    'Eficiencia': 'Efficiency', 'Diapositivas': 'Slides', 'Anterior': 'Previous', 'Siguiente': 'Next',
    'Quiénes somos': 'Who we are', 'Nos preocupamos por los resultados': 'We care about results',
    'Guiados por la experiencia adquirida durante más de 10 años logrando el éxito para nuestros clientes, realizamos nuestro trabajo con pasión y enfoque estratégico.': 'Guided by more than 10 years of experience delivering success for our clients, we do our work with passion and a strategic focus.',
    'Codec es una empresa especializada en transformación digital, con un enfoque principal en soluciones empresariales Odoo. Somos parte de la comunidad de desarrolladores e implementadores de Odoo desde sus primeras versiones, y combinamos ese conocimiento con experiencia en gestión empresarial para impulsar la innovación y competitividad de nuestros clientes.': 'Codec is a company specialized in digital transformation, with a main focus on Odoo business solutions. We have been part of the Odoo developer and implementer community since its earliest versions, and we combine that knowledge with business management experience to drive our clients’ innovation and competitiveness.',
    'Descubre más': 'Discover more', 'Años de experiencia': 'Years of experience',
    'Certificado e-CF': 'e-CF certified', 'Producción': 'Production',
    'Precios': 'Pricing', 'Planes a tu medida': 'Plans tailored to you',
    'Soluciones de ERP Odoo y Facturación Electrónica e-CF con alcance claro y sin costos ocultos.': 'Odoo ERP and e-CF Electronic Invoicing solutions with clear scope and no hidden costs.',
    'Plan PyME': 'SME Plan', 'Desde $1,200': 'From $1,200', 'pago único': 'one-time payment',
    'La solución ideal para empresas en crecimiento que necesitan emitir facturas electrónicas y gestionar su contabilidad.': 'The ideal solution for growing businesses that need to issue electronic invoices and manage their accounting.',
    'Empezar PyME': 'Start with SME',
    'Contabilidad y Ventas locales': 'Local Accounting and Sales',
    'Facturación Electrónica e-CF': 'e-CF Electronic Invoicing',
    'Reportes DGII': 'DGII reports', 'Capacitación básica incluida': 'Basic training included',
    'Configuración instantánea. Te devolvemos tu dinero si no quedas satisfecho.': 'Instant setup. Money back if you are not satisfied.',
    'Plan Crecimiento': 'Growth Plan', 'Desde $2,500': 'From $2,500',
    'Control total de inventario, compras, nómina y multi-sucursal con reportes fiscales consolidados.': 'Full control of inventory, purchasing, payroll and multi-branch operations with consolidated tax reports.',
    'Solicitar Demo': 'Request a demo', 'Todo lo del Plan PyME': 'Everything in the SME Plan',
    'Gestión de Inventario y Compras': 'Inventory and Purchasing Management',
    'Nómina': 'Payroll', 'Multi-sucursal y almacenes': 'Multi-branch and warehouses',
    'Soporte post-venta prioritario': 'Priority after-sales support',
    'Plan Corporativo': 'Corporate Plan', 'Cotización': 'Custom quote', 'a medida': 'tailored',
    'Para empresas que requieren integraciones avanzadas de API, multi-moneda, manufactura compleja o hosting dedicado.': 'For companies that need advanced API integrations, multi-currency, complex manufacturing or dedicated hosting.',
    'Contactar Ventas': 'Contact Sales',
    'Multi-compañía y multi-moneda': 'Multi-company and multi-currency',
    'Manufactura MRP e integraciones': 'MRP manufacturing and integrations',
    'Conector API REST personalizado': 'Custom REST API connector',
    'Hosting de alto rendimiento': 'High-performance hosting',
    'Gerente de cuenta y SLA del 99.9%': 'Account manager and 99.9% SLA',
    'De diagnóstico a producción': 'From diagnosis to production',
    'Nuestro método de implementación en cuatro fases.': 'Our implementation method in four phases.',
    'Diagnóstico': 'Diagnosis', 'Entendemos tu operación, objetivos y retos.': 'We understand your operation, goals and challenges.',
    'Implementación': 'Implementation', 'Configuramos, desarrollamos y migramos tus datos.': 'We configure, develop and migrate your data.',
    'Capacitación': 'Training', 'Formamos a tu equipo para sacar el máximo provecho.': 'We train your team to get the most out of the system.',
    'Salida a producción con acompañamiento y soporte.': 'Production launch with guidance and support.',
    'Servicios y consultoría': 'Services and consulting',
    'Soluciones digitales integrales': 'Comprehensive digital solutions',
    'Desde facturación electrónica y Odoo hasta diseño web y consultoría tecnológica, ayudamos a empresas y emprendedores a alcanzar sus objetivos.': 'From electronic invoicing and Odoo to web design and technology consulting, we help companies and entrepreneurs reach their goals.',
    'Facturación electrónica certificada por la DGII, integrada a tus ventas, inventario y contabilidad.': 'DGII-certified electronic invoicing, integrated with your sales, inventory and accounting.',
    'Implementación Odoo': 'Odoo implementation',
    'Despliegue de CRM, ventas, compras, inventario, POS, nómina y proyectos según tu operación.': 'Deployment of CRM, sales, purchasing, inventory, POS, payroll and projects tailored to your operation.',
    'Contabilidad y reportes DGII': 'Accounting and DGII reports',
    'Contabilidad y ventas locales con los reportes fiscales que exige la normativa dominicana.': 'Local accounting and sales with the tax reports required by Dominican regulations.',
    'Desarrollo a medida': 'Custom development',
    'Módulos, reportes e integraciones por API que adaptan Odoo a procesos únicos de tu negocio.': 'Modules, reports and API integrations that adapt Odoo to your business’s unique processes.',
    'Diseño y desarrollo web': 'Web design and development',
    'Sitios rápidos, responsive y optimizados para SEO, integrados con eCommerce y tu ERP.': 'Fast, responsive, SEO-optimized websites integrated with eCommerce and your ERP.',
    'Hosting Odoo.sh y nube': 'Odoo.sh and cloud hosting',
    'Entornos de desarrollo, pruebas y producción con despliegue continuo y respaldos.': 'Development, testing and production environments with continuous deployment and backups.',
    'Seguridad y soporte': 'Security and support',
    'Buenas prácticas de seguridad, mantenimiento, actualizaciones y soporte post-venta.': 'Security best practices, maintenance, updates and after-sales support.',
    'Consultoría tecnológica': 'Technology consulting',
    'Diagnóstico y hoja de ruta para digitalizar procesos y mejorar la eficiencia operativa.': 'Assessment and roadmap to digitize processes and improve operational efficiency.',
    'Ilustración de un teléfono con módulos integrados de Odoo': 'Illustration of a phone with integrated Odoo modules',
    'Compras': 'Purchasing', 'Plataforma integrada': 'Integrated platform',
    'Un solo sistema para toda tu operación': 'One system for your entire operation',
    'Contabilidad, inventario, ventas, compras, nómina y facturación electrónica integrados en Odoo. Elimina las hojas de cálculo y los procesos manuales.': 'Accounting, inventory, sales, purchasing, payroll and electronic invoicing integrated in Odoo. Eliminate spreadsheets and manual processes.',
    'Odoo reúne CRM, eCommerce, punto de venta y proyectos en una suite de código abierto, fácil de usar y totalmente integrada.': 'Odoo brings together CRM, eCommerce, point of sale and projects in an open-source suite that is easy to use and fully integrated.',
    'CRM y Ventas': 'CRM and Sales', 'Punto de Venta': 'Point of Sale', 'Proyectos': 'Projects',
    'Facturación e-CF': 'e-CF invoicing',
    'Video institucional': 'Corporate video',
    'Odoo y facturación electrónica en acción': 'Odoo and electronic invoicing in action',
    'Video demostrativo de Odoo': 'Odoo demo video',
    'Reproducir video': 'Play video', 'Pausar video': 'Pause video', 'Ir a diapositiva ': 'Go to slide '
  };
  for (var n = 1; n <= 6; n++) D['Ir a diapositiva ' + n] = 'Go to slide ' + n;

  var TITLE = ['Codec SRL | Odoo y Factura Electrónica e-CF certificada DGII en República Dominicana',
               'Codec SRL | Odoo and e-CF Electronic Invoicing certified by the DGII in the Dominican Republic'];
  var DESC = ['Implementamos Odoo ERP y comprobantes fiscales electrónicos e-CF certificados por la DGII en República Dominicana. Planes PyME, Crecimiento y Corporativo. Odoo Silver Partner.',
              'We implement Odoo ERP and e-CF electronic tax receipts certified by the DGII in the Dominican Republic. SME, Growth and Corporate plans. Odoo Silver Partner.'];
  var LS = 'codec-lang', cur = 'es', items = [];

  function norm(s) { return s.replace(/\s+/g, ' ').trim(); }
  window.codecT = function (s) { return cur === 'en' && D[s] ? D[s] : s; };

  function collect() {
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode;
        if (!p || /^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/i.test(p.nodeName)) return NodeFilter.FILTER_REJECT;
        return D[norm(n.nodeValue)] ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var n;
    while ((n = w.nextNode())) {
      var v = n.nodeValue;
      items.push({ t: 1, n: n, k: norm(v), l: v.match(/^\s*/)[0], r: v.match(/\s*$/)[0] });
    }
    ['aria-label', 'alt', 'title'].forEach(function (a) {
      [].forEach.call(document.querySelectorAll('[' + a + ']'), function (e) {
        var v = e.getAttribute(a);
        if (v && D[v]) items.push({ t: 0, e: e, a: a, k: v });
      });
    });
  }

  function apply(l, save) {
    cur = l;
    var en = l === 'en';
    items.forEach(function (it) {
      var v = en ? D[it.k] : it.k;
      if (it.t) it.n.nodeValue = it.l + v + it.r; else it.e.setAttribute(it.a, v);
    });
    document.documentElement.lang = l;
    if (document.title.indexOf(TITLE[en ? 0 : 1]) > -1) document.title = document.title.replace(TITLE[en ? 0 : 1], TITLE[en ? 1 : 0]);
    var m = document.querySelector('meta[name="description"]');
    if (m && m.getAttribute('content') === DESC[en ? 0 : 1]) m.setAttribute('content', DESC[en ? 1 : 0]);
    [].forEach.call(document.querySelectorAll('[data-lang]'), function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === l);
    });
    if (save) { try { localStorage.setItem(LS, l); } catch (e) {} }
    document.dispatchEvent(new Event('codec:lang'));
  }

  function init() {
    if (!document.body) return;
    collect();
    var l = null;
    try { l = localStorage.getItem(LS); } catch (e) {}
    if (l !== 'en' && l !== 'es') {
      var nl = (navigator.languages && navigator.languages[0]) || navigator.language || 'es';
      l = /^en/i.test(nl) ? 'en' : 'es';
    }
    [].forEach.call(document.querySelectorAll('[data-lang]'), function (b) {
      b.onclick = function () { apply(b.getAttribute('data-lang'), true); };
    });
    apply(l, false);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
