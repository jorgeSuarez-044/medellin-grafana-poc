
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
    'index.csr.html': {size: 23599, hash: '27b7a974df37bd5054cc2c362c7e6952fef608c7e2862210f4a0b21a9a71f67a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17173, hash: '22ff4f947012718b2ad327eb9df621618b5987a81c233c94f01ffb7b3336efff', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 28258, hash: '3eaae7ec7a7aa4d6a223d1e823c7dd03faa38d94d9cef6064fd23c1ac0a1baa3', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'ambiente/residuos/camiones/dashboard/index.html': {size: 31672, hash: '78da5e2b28f0cca40a19d765148e830d94a504836e9ae66acc06e27921408304', text: () => import('./assets-chunks/ambiente_residuos_camiones_dashboard_index_html.mjs').then(m => m.default)},
    'ambiente/residuos/camiones/mapa/index.html': {size: 31862, hash: 'cd3b4fdad54d22959b8a137da49254a6ad27739b555aa3430ac6d067544160e2', text: () => import('./assets-chunks/ambiente_residuos_camiones_mapa_index_html.mjs').then(m => m.default)},
    'index.html': {size: 28258, hash: '3eaae7ec7a7aa4d6a223d1e823c7dd03faa38d94d9cef6064fd23c1ac0a1baa3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 32506, hash: '87686770922db9c4439bc6e8c8bf8edf810238b0410c202896dfc9c8a3d4cc32', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/ruido/dashboard/index.html': {size: 30848, hash: 'c99aeb9468028442a64471fd5ad13e8833622ae12e6f18bf59bc13180477cd37', text: () => import('./assets-chunks/ambiente_calidad_ruido_dashboard_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/siata/dashboard/index.html': {size: 33605, hash: '77efdf954281c44d4778aa16895a7de653857aa2937c5d55c9963fb5ac1fb077', text: () => import('./assets-chunks/ambiente_calidad_siata_dashboard_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/siata/mapa/index.html': {size: 32147, hash: 'c3ec3ed47da729f6df4e4a6acba6e49189ac26ede7564dbb3cc84068e32f0b58', text: () => import('./assets-chunks/ambiente_calidad_siata_mapa_index_html.mjs').then(m => m.default)},
    'economico/digital/wifi/dashboard/index.html': {size: 32541, hash: 'd28abb14862ae1c935cf72d159875e8080118457fd10191acbb60d0bd6e4eac3', text: () => import('./assets-chunks/economico_digital_wifi_dashboard_index_html.mjs').then(m => m.default)},
    'reportes/index.html': {size: 32031, hash: '2a9ae4f75d20da9108374b3288d18acb58ac8c3c44f54b46f4b5d70afcfa35de', text: () => import('./assets-chunks/reportes_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/vamosmed/dashboard/index.html': {size: 31802, hash: 'c3a3c2707ec1bd66e60ba357107e1beccc231b3fed6634c240662d10cfec0922', text: () => import('./assets-chunks/habitat_movilidad_vamosmed_dashboard_index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 30263, hash: '8c15ea7ed811056bd3625533a22fb8264dace9b17e63ff08f9a94e04207a55d5', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/vamosmed/mapa/index.html': {size: 31762, hash: '6058dfa0e69236a761dc0e1759b7082aad5bee5291e6c9033f475db898b2b13c', text: () => import('./assets-chunks/habitat_movilidad_vamosmed_mapa_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/dashboard/index.html': {size: 31484, hash: 'dfd3ba08d949374981fa6862aef619435e530d54e315e0883e354740267a9497', text: () => import('./assets-chunks/habitat_movilidad_dashboard_index_html.mjs').then(m => m.default)},
    'gobernanza/participacion/pqrs/dashboard/index.html': {size: 34049, hash: 'd031052a25ae4b924b66e72c83eb3fa40a51460bbc6ea2eba7ca717dcddc8719', text: () => import('./assets-chunks/gobernanza_participacion_pqrs_dashboard_index_html.mjs').then(m => m.default)},
    'economico/digital/wifi/mapa/index.html': {size: 124891, hash: '45a231ee875e14cffb1dad18cf0627ad160012d2eda3e7e921b5093708332539', text: () => import('./assets-chunks/economico_digital_wifi_mapa_index_html.mjs').then(m => m.default)},
    'whatsapp/index.html': {size: 31260, hash: '9804d04c2084634054c5fa813485dbc4fa8818e6d05cec1f8c41d517e01b80bb', text: () => import('./assets-chunks/whatsapp_index_html.mjs').then(m => m.default)},
    'calidad/turismo/map/index.html': {size: 31871, hash: 'f97173ed6338e9a75ca20c7aef1edadcc5d3a778f414c96f4e25dcfb9926daf3', text: () => import('./assets-chunks/calidad_turismo_map_index_html.mjs').then(m => m.default)},
    'calidad/turismo/dashboard/index.html': {size: 33183, hash: 'd3a2feef6de99a182d900d5c0cd6224461133f85435d42acefa37212a2099676', text: () => import('./assets-chunks/calidad_turismo_dashboard_index_html.mjs').then(m => m.default)},
    'mapas/reportes/index.html': {size: 32075, hash: '606340bc0d9bc5089deba8a50f6cceb6607cfc59684dfc4d9163216ce46cfbd4', text: () => import('./assets-chunks/mapas_reportes_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/ruido/mapa/index.html': {size: 47994, hash: '12a5104f561181abec3e57be19cfaa3428ff0e76cd5ef56dad9f7be2c0cf5677', text: () => import('./assets-chunks/ambiente_calidad_ruido_mapa_index_html.mjs').then(m => m.default)},
    'perfil/usuarios/index.html': {size: 71855, hash: '63fddbe976d732ef60d23938ece6a3e6a411b1ab5b60f8804f889b217f8aaa7b', text: () => import('./assets-chunks/perfil_usuarios_index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
