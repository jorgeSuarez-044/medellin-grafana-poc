
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
    "route": "/en-construccion"
  },
  {
    "renderMode": 2,
    "redirectTo": "/en-construccion",
    "route": "/**"
  }
],
  assets: {
    'index.csr.html': {size: 23599, hash: 'ecd538179d736e1b13bfcb2f977afe3dff868349a31974c82aff331224c529d3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17173, hash: '68e1e9274ff31f02d46f1f8d6902409ea302784c7675d278d39acf03bb955015', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 28258, hash: 'd7d6e458e6bddf74865c21a636743e13789a8f7eccac6750470c9c410f03b537', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'ambiente/residuos/camiones/dashboard/index.html': {size: 31672, hash: '7d20b7e1e7a8f30f0ef64b8d205d8df22c941686b77c1b0000d974310300ebff', text: () => import('./assets-chunks/ambiente_residuos_camiones_dashboard_index_html.mjs').then(m => m.default)},
    'ambiente/residuos/camiones/mapa/index.html': {size: 31862, hash: '4b9d3b4a7caf390c484c549e664d3ab0d64627ccbace214fb50a0185a7b4934b', text: () => import('./assets-chunks/ambiente_residuos_camiones_mapa_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/ruido/dashboard/index.html': {size: 30848, hash: 'b9141e5383e1b74daa04edd0aa437dff8db8170f38be39d06576bd74a6b8c3fe', text: () => import('./assets-chunks/ambiente_calidad_ruido_dashboard_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 28258, hash: 'd7d6e458e6bddf74865c21a636743e13789a8f7eccac6750470c9c410f03b537', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/siata/dashboard/index.html': {size: 33605, hash: '5e5367826966937e1ec2b8621a636ac02f575c126a3fc6e9ad71ad3e6033b717', text: () => import('./assets-chunks/ambiente_calidad_siata_dashboard_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/siata/mapa/index.html': {size: 32147, hash: 'c4ce0fd3379060978f32997430a902decb0b592dbafff79bb135b1d99cf19e37', text: () => import('./assets-chunks/ambiente_calidad_siata_mapa_index_html.mjs').then(m => m.default)},
    'reportes/index.html': {size: 32031, hash: '047c4047035ecedf5af44591ad8073e9eb41cc258e0bcafa697b1a8352933ef2', text: () => import('./assets-chunks/reportes_index_html.mjs').then(m => m.default)},
    'economico/digital/wifi/dashboard/index.html': {size: 32541, hash: '378b7d9caaf78b45f57190e7424f9369b723429c721edef74f4e4833b96a53a0', text: () => import('./assets-chunks/economico_digital_wifi_dashboard_index_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 32506, hash: '436e0d33122872911325f9fc0584406d160539b81396ba2a6c858e0720c1d203', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/vamosmed/dashboard/index.html': {size: 31802, hash: '669d8ad8ec85c544d5ae1d4002fba0f8f8b759b81a88f48935133914a666984d', text: () => import('./assets-chunks/habitat_movilidad_vamosmed_dashboard_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/vamosmed/mapa/index.html': {size: 31762, hash: 'ee9850d976b0b7bb3caa514e30b2527ee27648892b7e50a8871e8fec53a6f5f9', text: () => import('./assets-chunks/habitat_movilidad_vamosmed_mapa_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/ruido/mapa/index.html': {size: 48035, hash: 'b790afd3177c7236dc34bdcc4910741869affd04072a55e9907c125aee806cb8', text: () => import('./assets-chunks/ambiente_calidad_ruido_mapa_index_html.mjs').then(m => m.default)},
    'economico/digital/wifi/mapa/index.html': {size: 124891, hash: '031b0ed7631b78052deab325ad50586e1092ea173e9810580e1e6009c4c149ef', text: () => import('./assets-chunks/economico_digital_wifi_mapa_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/dashboard/index.html': {size: 31484, hash: 'c4ce0a503cfccdede4bd03625fccd58671b4e7625d91ade98f00efbd540a34f0', text: () => import('./assets-chunks/habitat_movilidad_dashboard_index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 30263, hash: 'caba7f12f45b870e63fe3a003235a28a356009f660fb0fead06a751fb4d5482a', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'whatsapp/index.html': {size: 31260, hash: '8e9701b2814e4c90e0e94b56aa29db356c46c35b47a2de4dcbad4be7bd7acc9a', text: () => import('./assets-chunks/whatsapp_index_html.mjs').then(m => m.default)},
    'gobernanza/participacion/pqrs/dashboard/index.html': {size: 34049, hash: 'e4e47055182bdd5c84dddf09ff680f362983b0140b56e51a16f211ce7d961f6d', text: () => import('./assets-chunks/gobernanza_participacion_pqrs_dashboard_index_html.mjs').then(m => m.default)},
    'mapas/reportes/index.html': {size: 32075, hash: 'e6d84109de39a1983c4dd62879c9ba017a13bc398701753779366b080712cda0', text: () => import('./assets-chunks/mapas_reportes_index_html.mjs').then(m => m.default)},
    'calidad/turismo/map/index.html': {size: 31871, hash: 'd0171880a27102210eb6a5d36c88c6f27b3159dcfbbb36637b20cfe6a22d60c0', text: () => import('./assets-chunks/calidad_turismo_map_index_html.mjs').then(m => m.default)},
    'calidad/turismo/dashboard/index.html': {size: 33183, hash: '88b9e816f919ade44ac0b46155700cda1861b394aed683d0277ff74b9a96b6fe', text: () => import('./assets-chunks/calidad_turismo_dashboard_index_html.mjs').then(m => m.default)},
    'en-construccion/index.html': {size: 26518, hash: 'ff0a6034ab359ed995c4065610577633bb8955c45ba11a1065b578bf556b4224', text: () => import('./assets-chunks/en-construccion_index_html.mjs').then(m => m.default)},
    'perfil/usuarios/index.html': {size: 65538, hash: 'de0ba2c26b4d744110de911d494d47d395bf91abaed2cb2370d6f45ffd789535', text: () => import('./assets-chunks/perfil_usuarios_index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
