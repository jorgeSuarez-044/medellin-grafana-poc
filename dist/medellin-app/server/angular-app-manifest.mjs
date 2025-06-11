
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
    'index.csr.html': {size: 23599, hash: 'b35fa53e4bd33b0d66fa547745e742c9c89c6ced7b0de8542edaea4cfa7e5746', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17173, hash: 'e04ef6080b6a1900fea880673f214613ff819d4173b3f9bd0651b4bf48b10bf2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 28258, hash: 'ecd96e853c2ec066f52d9b56f4ba982c17e08f4f988252931bcb372ffbe3aa87', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'ambiente/residuos/camiones/dashboard/index.html': {size: 32667, hash: '3f133c8d9cec468e0be61642605bf7dab7f002d89031fbbecdf11bed7990803a', text: () => import('./assets-chunks/ambiente_residuos_camiones_dashboard_index_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 33501, hash: 'f2e50b0401367a3c7c9e51a6d0b1cdc8eb326c8f811dab88485d99b2e42864f8', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/ruido/dashboard/index.html': {size: 31843, hash: '91871077a84a24be0ca9ea236405fa4007be5bfff6ad181c55ccd031197815d9', text: () => import('./assets-chunks/ambiente_calidad_ruido_dashboard_index_html.mjs').then(m => m.default)},
    'ambiente/residuos/camiones/mapa/index.html': {size: 32857, hash: '61224b138de822f1c9aff09d9ff4018ce2ba9f5abfc1ecb8a0ed34d60ab05e7c', text: () => import('./assets-chunks/ambiente_residuos_camiones_mapa_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/siata/dashboard/index.html': {size: 34600, hash: 'a6210cdcffb2adde0b5979bd9249dac859d58b902425a64c2407090d147e098f', text: () => import('./assets-chunks/ambiente_calidad_siata_dashboard_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/siata/mapa/index.html': {size: 33142, hash: 'c08d1bc4cc704524d37f1bdc52f04f293f642576a0e91019e6a432afd0fb88a6', text: () => import('./assets-chunks/ambiente_calidad_siata_mapa_index_html.mjs').then(m => m.default)},
    'reportes/index.html': {size: 33026, hash: 'e5e402e48aad377b668965ec87bc729ffa63d532e69688244f38856a7c5903a9', text: () => import('./assets-chunks/reportes_index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 31258, hash: '5cd4af8d308d0b1d75cc386887bfc71090978badec2f9251eb8cc050d3107b23', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'economico/digital/wifi/dashboard/index.html': {size: 33536, hash: 'a5c38239697b8d3f55052e29ce5a484145e9c783d3cf8da04e5aaf1534790297', text: () => import('./assets-chunks/economico_digital_wifi_dashboard_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/vamosmed/dashboard/index.html': {size: 32797, hash: '7aba94919038be7d34d994e6ae4689825c0b1fe1bef019508c875012842ae24f', text: () => import('./assets-chunks/habitat_movilidad_vamosmed_dashboard_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/vamosmed/mapa/index.html': {size: 32757, hash: 'b5471944a0960d8076ccafa35c3a5f37a7b529a82a79cbf3875c6e4aaaafb984', text: () => import('./assets-chunks/habitat_movilidad_vamosmed_mapa_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/dashboard/index.html': {size: 32479, hash: '0ba9094812a5584e5250056a038ddd54928864fd88754b9c1e223c6ad2015614', text: () => import('./assets-chunks/habitat_movilidad_dashboard_index_html.mjs').then(m => m.default)},
    'index.html': {size: 28258, hash: 'ecd96e853c2ec066f52d9b56f4ba982c17e08f4f988252931bcb372ffbe3aa87', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'gobernanza/participacion/pqrs/dashboard/index.html': {size: 35044, hash: 'e3b3fcfee3c137f761db729d179312d2813b90ec6723543d822cbe71e5028827', text: () => import('./assets-chunks/gobernanza_participacion_pqrs_dashboard_index_html.mjs').then(m => m.default)},
    'whatsapp/index.html': {size: 32255, hash: '8fdd214caf5bca757367041735fe0c876c7223719c99c5a78a4fc02af2f90c06', text: () => import('./assets-chunks/whatsapp_index_html.mjs').then(m => m.default)},
    'calidad/turismo/dashboard/index.html': {size: 34178, hash: '7afcd6c3030ba7102eeb03906e0dc5e0752e98dee397ea5c65368b42aa544931', text: () => import('./assets-chunks/calidad_turismo_dashboard_index_html.mjs').then(m => m.default)},
    'calidad/turismo/map/index.html': {size: 32866, hash: 'bffcda44638d953b2d51e66cba04d063bedc17e64540cecc2073f83756bdff19', text: () => import('./assets-chunks/calidad_turismo_map_index_html.mjs').then(m => m.default)},
    'mapas/reportes/index.html': {size: 33070, hash: '4e36f944b22e782fe3924025e2807552024b6c8106fb87d4ea70e94e41ff7ee4', text: () => import('./assets-chunks/mapas_reportes_index_html.mjs').then(m => m.default)},
    'perfil/usuarios/index.html': {size: 72041, hash: 'fc49a7a99513901f5127381581c46072c324cbca8f9eb7641f896a5d7ce2d7e4', text: () => import('./assets-chunks/perfil_usuarios_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/ruido/mapa/index.html': {size: 48987, hash: '2ef3dc6e2159aaa4b0150c2e20957c01cb7e82baf94638f03bd114c414077708', text: () => import('./assets-chunks/ambiente_calidad_ruido_mapa_index_html.mjs').then(m => m.default)},
    'economico/digital/wifi/mapa/index.html': {size: 118377, hash: '9a37144c32a8057f8c6f88ed932aa32511e6f70fa1a802a6816097332e1b5be9', text: () => import('./assets-chunks/economico_digital_wifi_mapa_index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
