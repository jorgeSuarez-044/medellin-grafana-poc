
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/inicio"
  },
  {
    "renderMode": 2,
    "route": "/menu"
  },
  {
    "renderMode": 2,
    "route": "/ambiente/residuos/camiones/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/ambiente/residuos/camiones/mapa"
  },
  {
    "renderMode": 2,
    "route": "/ambiente/calidad/ruido/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/ambiente/calidad/ruido/mapa"
  },
  {
    "renderMode": 2,
    "route": "/ambiente/calidad/siata/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/ambiente/calidad/siata/mapa"
  },
  {
    "renderMode": 2,
    "route": "/reportes"
  },
  {
    "renderMode": 2,
    "route": "/economico/digital/wifi/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/economico/digital/wifi/mapa"
  },
  {
    "renderMode": 2,
    "route": "/habitat/movilidad/vamosmed/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/habitat/movilidad/vamosmed/mapa"
  },
  {
    "renderMode": 2,
    "route": "/habitat/movilidad/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/perfil/usuarios"
  },
  {
    "renderMode": 2,
    "route": "/gobernanza/participacion/pqrs/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/whatsapp"
  },
  {
    "renderMode": 2,
    "route": "/calidad/turismo/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/calidad/turismo/map"
  },
  {
    "renderMode": 2,
    "route": "/mapas/reportes"
  },
  {
    "renderMode": 2,
    "redirectTo": "/login",
    "route": "/**"
  }
],
  assets: {
    'index.csr.html': {size: 23599, hash: 'aea912a93ee822afc5d8faebfb1d87c225d8da1fee6659072499de59638f02e0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17173, hash: 'beb3f337acdb87d99b439e3342b1a932422a2efcac81579f2082a505bcb6117b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 28258, hash: '13dd326ec8f4a39355066ca3c852e06585f11b00d910cd94e61ebfef89aae372', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'index.html': {size: 28258, hash: '13dd326ec8f4a39355066ca3c852e06585f11b00d910cd94e61ebfef89aae372', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'ambiente/residuos/camiones/dashboard/index.html': {size: 31672, hash: 'cfa06dcbe0612bdf2d3ecb258acf5697d489526c261a6cd6009cccc3ce914edb', text: () => import('./assets-chunks/ambiente_residuos_camiones_dashboard_index_html.mjs').then(m => m.default)},
    'ambiente/residuos/camiones/mapa/index.html': {size: 31862, hash: '8e7b59607ea8a71c53231c7943a2f441009553095d96384edfe265081530867b', text: () => import('./assets-chunks/ambiente_residuos_camiones_mapa_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/ruido/dashboard/index.html': {size: 30848, hash: '068496885c209945157b7762bfbfe44285b02aa4c651b838980863ce52958482', text: () => import('./assets-chunks/ambiente_calidad_ruido_dashboard_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/siata/dashboard/index.html': {size: 33605, hash: 'f6d3f33f149701ec3abf86f8d00cea2383025e7cc6fb6b89795f411c6bc15fda', text: () => import('./assets-chunks/ambiente_calidad_siata_dashboard_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/siata/mapa/index.html': {size: 32147, hash: 'a6428c6d2e37c3023799b2736fa6dfa0928c6f4e7502fb9af6ba4747fb5863d9', text: () => import('./assets-chunks/ambiente_calidad_siata_mapa_index_html.mjs').then(m => m.default)},
    'reportes/index.html': {size: 32031, hash: '7e6a53f866cb6ea4e84b8f25ab6298d8a81de9faf04efa57c86e308daff018e3', text: () => import('./assets-chunks/reportes_index_html.mjs').then(m => m.default)},
    'economico/digital/wifi/dashboard/index.html': {size: 32541, hash: 'b49dda1d0b73dc9dde35baa162a4f184efaaa8b6b4291b5b0ec5460f32ffcaea', text: () => import('./assets-chunks/economico_digital_wifi_dashboard_index_html.mjs').then(m => m.default)},
    'economico/digital/wifi/mapa/index.html': {size: 124891, hash: '92e9bce3efe04fb91b242f94b0a646eaaf1f8b4f3e0ef9f206596dea6d03cbe3', text: () => import('./assets-chunks/economico_digital_wifi_mapa_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/vamosmed/dashboard/index.html': {size: 31802, hash: '84705fcffdd37abf7e7e568737c0ff32f16ed4a2bb55e827dbfc520a2437487e', text: () => import('./assets-chunks/habitat_movilidad_vamosmed_dashboard_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/vamosmed/mapa/index.html': {size: 31762, hash: '814da36512b880c20933f8c1aac821d20b3bff0b1664f83569359323ea1a02a9', text: () => import('./assets-chunks/habitat_movilidad_vamosmed_mapa_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/dashboard/index.html': {size: 31484, hash: 'd3d81d37069eb78ef53d7b381043222822df47d81e4b3d49ca456526471a692b', text: () => import('./assets-chunks/habitat_movilidad_dashboard_index_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 32506, hash: '2f6357b9b6957d826e269569f7998066437f57cd9f24a6612b5aeb9a3a0553f0', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'gobernanza/participacion/pqrs/dashboard/index.html': {size: 34049, hash: 'c6333b66fdbdcc4ee8c073dfa14e4783320d8bee21d2019809225cd01934144d', text: () => import('./assets-chunks/gobernanza_participacion_pqrs_dashboard_index_html.mjs').then(m => m.default)},
    'whatsapp/index.html': {size: 31260, hash: 'd80ede990d78e32f90293137ba69962084ff93b9bf24352a83ee9fe36878b2e2', text: () => import('./assets-chunks/whatsapp_index_html.mjs').then(m => m.default)},
    'calidad/turismo/dashboard/index.html': {size: 33183, hash: '40822fc4effe77b06762dbf1b94d081b2e8261cb58f7baa169433e7cae6a5954', text: () => import('./assets-chunks/calidad_turismo_dashboard_index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 30263, hash: '9b27cc9aed8ddd1bd436edfe31a4c96817677f6c7a68095fb54ddd1081a5ec18', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'calidad/turismo/map/index.html': {size: 31871, hash: 'b89334bd68eda55277366d07c9c9f18b4676f3d01458fba76d34cb8b92559b1d', text: () => import('./assets-chunks/calidad_turismo_map_index_html.mjs').then(m => m.default)},
    'mapas/reportes/index.html': {size: 32075, hash: 'a39908071e14090da526ec0ecf32d55fabc9119c829db04bcf77d633f72de3ab', text: () => import('./assets-chunks/mapas_reportes_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/ruido/mapa/index.html': {size: 47994, hash: '936d65e4dc715ec3c811c5df98acf7bc94165ae8c3b94cc1da2782187b836392', text: () => import('./assets-chunks/ambiente_calidad_ruido_mapa_index_html.mjs').then(m => m.default)},
    'perfil/usuarios/index.html': {size: 67594, hash: 'b6101ac05939127706e5897e588b548a246e9c2185d11eed3bb0b51af63e9335', text: () => import('./assets-chunks/perfil_usuarios_index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
