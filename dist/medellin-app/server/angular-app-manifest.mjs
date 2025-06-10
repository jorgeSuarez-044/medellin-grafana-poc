
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
    'index.csr.html': {size: 23614, hash: '0234e64b24f8d5a4658463e73fd3e17f41bcad956b2b7ac8ebb1d1818e5ee748', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17188, hash: '0941601160fc419be76a4ea64e2784a5117425d817ede269778a19c0909716a0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 28273, hash: '9e23b7bed96522d84faada2b99cfa33908ad1d241bce6e9117985d844356021b', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'ambiente/residuos/camiones/dashboard/index.html': {size: 36094, hash: '029734af278010d3214d0a427e6d6b796e8d1f2b47ce125a18dd5379729e9b4e', text: () => import('./assets-chunks/ambiente_residuos_camiones_dashboard_index_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 36928, hash: 'ada67c0af46650a88cc0f69d74076546924bef1578a12b97296f182b4926d505', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'ambiente/residuos/camiones/mapa/index.html': {size: 36284, hash: 'c333e20403a64f708041f2c032c474e955e89fc2922fbdae512ff6d6284e16cd', text: () => import('./assets-chunks/ambiente_residuos_camiones_mapa_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/ruido/dashboard/index.html': {size: 35270, hash: 'b368a428ad3c93412646eb0c30a3bb27a942bd1fc74f7c7f3f491f87a86530a4', text: () => import('./assets-chunks/ambiente_calidad_ruido_dashboard_index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 38015, hash: '017c2c94f0bb8a0284a0b86026d6c15631d0ae0feaf3d9714d3cf972d4ff3e62', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/siata/dashboard/index.html': {size: 38027, hash: 'f327b059914e580f0b26795416d7550c4a5903087f5d3a91c880028b76a9152c', text: () => import('./assets-chunks/ambiente_calidad_siata_dashboard_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/siata/mapa/index.html': {size: 36569, hash: '0f65338b52dbc4336812e8a834808ae133f40cb2f3967918cd5ae959dc75086d', text: () => import('./assets-chunks/ambiente_calidad_siata_mapa_index_html.mjs').then(m => m.default)},
    'reportes/index.html': {size: 36453, hash: '9b03d4b328b2f81c26388e0b3482f5049aaba5b99f6d8009cf8618edd84fbbe8', text: () => import('./assets-chunks/reportes_index_html.mjs').then(m => m.default)},
    'economico/digital/wifi/dashboard/index.html': {size: 36963, hash: '9833453395e20fa97b95d948b2d9d69de8923601dc4e740ceb7a937c352a26f7', text: () => import('./assets-chunks/economico_digital_wifi_dashboard_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/vamosmed/dashboard/index.html': {size: 36224, hash: 'e986cc8a6f087536c503dd76273ac7aed2738c3d7327e13f611f5ef23b6ad675', text: () => import('./assets-chunks/habitat_movilidad_vamosmed_dashboard_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/vamosmed/mapa/index.html': {size: 36184, hash: '4e4beb930cf0795913a8ac86adfef07467e0e706f3eb6deaacbe731577a1f908', text: () => import('./assets-chunks/habitat_movilidad_vamosmed_mapa_index_html.mjs').then(m => m.default)},
    'index.html': {size: 28273, hash: '9e23b7bed96522d84faada2b99cfa33908ad1d241bce6e9117985d844356021b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'habitat/movilidad/dashboard/index.html': {size: 35906, hash: '52570169047a5bbca4061eb4bb5ac153ce4f8060cbf258dbd805c2dccf0f18a5', text: () => import('./assets-chunks/habitat_movilidad_dashboard_index_html.mjs').then(m => m.default)},
    'gobernanza/participacion/pqrs/dashboard/index.html': {size: 38471, hash: '685ab7977c0eb9e3dc87d4f72034960358e685035d0ea2494ec176f5552a9fff', text: () => import('./assets-chunks/gobernanza_participacion_pqrs_dashboard_index_html.mjs').then(m => m.default)},
    'whatsapp/index.html': {size: 35682, hash: 'a93581d217225713d3a4f8d2b81567ee5a3d2d682d63400d185343e59d7c84df', text: () => import('./assets-chunks/whatsapp_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/ruido/mapa/index.html': {size: 52308, hash: '2ca22c3e266f45150cac0b3406997f5fbb4e4f9893c28b6b0664d1183ad87fe7', text: () => import('./assets-chunks/ambiente_calidad_ruido_mapa_index_html.mjs').then(m => m.default)},
    'calidad/turismo/dashboard/index.html': {size: 37605, hash: '3baf1cde4c8a48eba716b35c2c2704d1a394591bf535032c330ae79f2cf21ce3', text: () => import('./assets-chunks/calidad_turismo_dashboard_index_html.mjs').then(m => m.default)},
    'calidad/turismo/map/index.html': {size: 36293, hash: 'a7092271a2abd89636665b2b6fccd0f96e6b61b6031e7ea16c0e05ea302fe6ce', text: () => import('./assets-chunks/calidad_turismo_map_index_html.mjs').then(m => m.default)},
    'mapas/reportes/index.html': {size: 36497, hash: 'c0a5c3f92b4ab90099cdbc56e884cef52c8eef1a364d22abaf70ec463c784001', text: () => import('./assets-chunks/mapas_reportes_index_html.mjs').then(m => m.default)},
    'perfil/usuarios/index.html': {size: 73812, hash: '81cd3c52800147ec97d13c049fec0813fd299b2e59b16ae92d7ceb27a6275da1', text: () => import('./assets-chunks/perfil_usuarios_index_html.mjs').then(m => m.default)},
    'economico/digital/wifi/mapa/index.html': {size: 128812, hash: '6174fe9da32551c47bc10eda525563d6fa5d5f4bc53afb503b2d28cda8ec1a0d', text: () => import('./assets-chunks/economico_digital_wifi_mapa_index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
