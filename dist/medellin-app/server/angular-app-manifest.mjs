
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/territoriointeligente/visualizador"
  },
  {
    "renderMode": 2,
    "route": "/territoriointeligente/visualizador/login"
  },
  {
    "renderMode": 2,
    "route": "/territoriointeligente/visualizador/inicio"
  },
  {
    "renderMode": 2,
    "route": "/territoriointeligente/visualizador/menu"
  },
  {
    "renderMode": 2,
    "route": "/territoriointeligente/visualizador/ambiente/residuos/camiones/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/territoriointeligente/visualizador/ambiente/residuos/camiones/mapa"
  },
  {
    "renderMode": 2,
    "route": "/territoriointeligente/visualizador/ambiente/calidad/ruido/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/territoriointeligente/visualizador/ambiente/calidad/ruido/mapa"
  },
  {
    "renderMode": 2,
    "route": "/territoriointeligente/visualizador/ambiente/calidad/siata/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/territoriointeligente/visualizador/ambiente/calidad/siata/mapa"
  },
  {
    "renderMode": 2,
    "route": "/territoriointeligente/visualizador/reportes"
  },
  {
    "renderMode": 2,
    "route": "/territoriointeligente/visualizador/economico/digital/wifi/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/territoriointeligente/visualizador/economico/digital/wifi/mapa"
  },
  {
    "renderMode": 2,
    "route": "/territoriointeligente/visualizador/habitat/movilidad/vamosmed/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/territoriointeligente/visualizador/habitat/movilidad/vamosmed/mapa"
  },
  {
    "renderMode": 2,
    "route": "/territoriointeligente/visualizador/habitat/movilidad/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/territoriointeligente/visualizador/perfil/usuarios"
  },
  {
    "renderMode": 2,
    "route": "/territoriointeligente/visualizador/gobernanza/participacion/pqrs/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/territoriointeligente/visualizador/whatsapp"
  },
  {
    "renderMode": 2,
    "route": "/territoriointeligente/visualizador/calidad/turismo/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/territoriointeligente/visualizador/calidad/turismo/map"
  },
  {
    "renderMode": 2,
    "route": "/territoriointeligente/visualizador/mapas/reportes"
  },
  {
    "renderMode": 2,
    "redirectTo": "/territoriointeligente/visualizador/login",
    "route": "/territoriointeligente/visualizador/**"
  }
],
  assets: {
    'index.csr.html': {size: 23632, hash: '84cf6068a895be27f7af0736f889fe86716a6e5ff7a6b689c34aa94475205ee0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17206, hash: '07301ae95d60c59a71d250e86d8c70434df5dfa3ef95cafa8578a13084840dc4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/login/index.html': {size: 28291, hash: '8a2ef01a86ecdaa09bf7caef8411346ae536f5461ebaf7e9d46fdc67f9ebb77c', text: () => import('./assets-chunks/territoriointeligente_visualizador_login_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/menu/index.html': {size: 30296, hash: 'b9e6a7c92130176be0777d60249cbd62fb7810ebf273f7a4b1e32118ba11c07e', text: () => import('./assets-chunks/territoriointeligente_visualizador_menu_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/index.html': {size: 28291, hash: '8a2ef01a86ecdaa09bf7caef8411346ae536f5461ebaf7e9d46fdc67f9ebb77c', text: () => import('./assets-chunks/territoriointeligente_visualizador_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/inicio/index.html': {size: 32539, hash: 'caefa43b13a672f02ff538df86aadcced821b176e5404098d6566b56e852faac', text: () => import('./assets-chunks/territoriointeligente_visualizador_inicio_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/ambiente/residuos/camiones/dashboard/index.html': {size: 31705, hash: '2d4f29d8def79390bb5ca77bea349805f3dd2f415b4d482b401261778d7ea0c1', text: () => import('./assets-chunks/territoriointeligente_visualizador_ambiente_residuos_camiones_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/ambiente/calidad/ruido/dashboard/index.html': {size: 30881, hash: 'e051bde486571c12e34da4388b729edae543518634910b175f632732ef055440', text: () => import('./assets-chunks/territoriointeligente_visualizador_ambiente_calidad_ruido_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/ambiente/residuos/camiones/mapa/index.html': {size: 31895, hash: 'b53151d891d2dd90c4b3922ee5554151f41362a02099140c8f72725abe332aa5', text: () => import('./assets-chunks/territoriointeligente_visualizador_ambiente_residuos_camiones_mapa_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/ambiente/calidad/siata/mapa/index.html': {size: 32180, hash: 'cefc63740cc120813c3c699b925a24636e78c2e4bce479ca6c249e813afbbd50', text: () => import('./assets-chunks/territoriointeligente_visualizador_ambiente_calidad_siata_mapa_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/economico/digital/wifi/dashboard/index.html': {size: 32574, hash: '58cfcd121e57314e7a6fc132d088bd4692e0f43adbe38931f9b5434faa648f54', text: () => import('./assets-chunks/territoriointeligente_visualizador_economico_digital_wifi_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/reportes/index.html': {size: 32064, hash: '7b00ef4b112694b6be28d6978293892aee7974464e254346ae3d59a844d5c60e', text: () => import('./assets-chunks/territoriointeligente_visualizador_reportes_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/habitat/movilidad/vamosmed/dashboard/index.html': {size: 31835, hash: 'd58ba878d9e709e05a7bbd3bce5421509f8fa9b7cd358e34a352c71ce7d90f19', text: () => import('./assets-chunks/territoriointeligente_visualizador_habitat_movilidad_vamosmed_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/habitat/movilidad/vamosmed/mapa/index.html': {size: 31795, hash: '49a9c0264bf8f544cc0bc126db21282b7792ae32786daa78cb335bae7f649a5e', text: () => import('./assets-chunks/territoriointeligente_visualizador_habitat_movilidad_vamosmed_mapa_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/habitat/movilidad/dashboard/index.html': {size: 31517, hash: '39c031dd40fe084a3262f7b2854b90273ad5efb1ca9a03603e54a3cf31639f36', text: () => import('./assets-chunks/territoriointeligente_visualizador_habitat_movilidad_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/economico/digital/wifi/mapa/index.html': {size: 124924, hash: 'f7d8f3ca195430a20a80b46a6ceef2967326adc7d32f817ccb546c743d63465a', text: () => import('./assets-chunks/territoriointeligente_visualizador_economico_digital_wifi_mapa_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/gobernanza/participacion/pqrs/dashboard/index.html': {size: 34082, hash: '1c1f18d9faa3675ef5668671f514690eab6bf0cd5374cb14505bcf5a90fce5ca', text: () => import('./assets-chunks/territoriointeligente_visualizador_gobernanza_participacion_pqrs_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/whatsapp/index.html': {size: 31293, hash: '5604b2fe667910d99e69c0abb37818a1a732dcfc4782d2794c700956605230de', text: () => import('./assets-chunks/territoriointeligente_visualizador_whatsapp_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/calidad/turismo/dashboard/index.html': {size: 33216, hash: '9a63dcba40fd212953ab29a96e3b45ee4039d237931a57c53999e34a3331f957', text: () => import('./assets-chunks/territoriointeligente_visualizador_calidad_turismo_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/calidad/turismo/map/index.html': {size: 31904, hash: '58597c2f02402818fb1a7d35b723e126eb55bc35e43b3df7f14a0cccff54567a', text: () => import('./assets-chunks/territoriointeligente_visualizador_calidad_turismo_map_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/mapas/reportes/index.html': {size: 32108, hash: '833a9a3d3f75ed543a84426d95e5334692ef016f2abe179797fd74fed3dd8aeb', text: () => import('./assets-chunks/territoriointeligente_visualizador_mapas_reportes_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/ambiente/calidad/siata/dashboard/index.html': {size: 33638, hash: '85b202e0f9d03a30fc1b49a89958a81aecfe5d2e4ff6754d0b53eca35b414e6a', text: () => import('./assets-chunks/territoriointeligente_visualizador_ambiente_calidad_siata_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/ambiente/calidad/ruido/mapa/index.html': {size: 48027, hash: 'c753aa2dd2550eaa7d46a3aa118f6ace08bcd5c9d8ff6301d8eb5271198d114f', text: () => import('./assets-chunks/territoriointeligente_visualizador_ambiente_calidad_ruido_mapa_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/perfil/usuarios/index.html': {size: 97204, hash: '4437e1c97daeffac830cb86d456ab4b7f47761e89c5fc6e7a1f6b6bf4f635f38', text: () => import('./assets-chunks/territoriointeligente_visualizador_perfil_usuarios_index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
