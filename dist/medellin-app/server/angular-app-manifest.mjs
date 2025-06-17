
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
    'index.csr.html': {size: 23599, hash: 'f9df070f122da022ca01ce607e6b05e77cfa2b1144ebbc33e29ddd8cda5af760', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17173, hash: '7046965591ad04d8396269eb2d193e4827bf2ec131b19c2039b2d12e5b16013d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 28258, hash: '008d2c38194c7d8ea5699065b66f34ce5f5720dd068ee999ac44f7f953954d74', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'ambiente/residuos/camiones/dashboard/index.html': {size: 31672, hash: 'abc3ef6cae7da6a306e4652d4e524ff993939693de30f6c41bad06b35b93d05d', text: () => import('./assets-chunks/ambiente_residuos_camiones_dashboard_index_html.mjs').then(m => m.default)},
    'ambiente/residuos/camiones/mapa/index.html': {size: 31862, hash: '99e5775ceb393e955d8e1dd6b256ad91c1e5b7c823f7a00c08ee4d3b2a45e1f7', text: () => import('./assets-chunks/ambiente_residuos_camiones_mapa_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/ruido/dashboard/index.html': {size: 30848, hash: 'c0a5de23e1ac11262ba2c0706d109fe9c4173ea6d8f48c10dc8142e945523502', text: () => import('./assets-chunks/ambiente_calidad_ruido_dashboard_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 28258, hash: '008d2c38194c7d8ea5699065b66f34ce5f5720dd068ee999ac44f7f953954d74', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/siata/dashboard/index.html': {size: 33605, hash: 'b30cbf338fc60b152be6b3e1360a7c8614d51703bb7501a22b66a21f1aad60b8', text: () => import('./assets-chunks/ambiente_calidad_siata_dashboard_index_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 32506, hash: '3effa83620690a36880106eac165cf74f933dc6ae9d660696bf5c4dcb60d41d6', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/siata/mapa/index.html': {size: 32147, hash: 'c2a7940ad8d470f85c511d18c757fdbfe9f22c2cf46ed3b393d4800ecf8125a3', text: () => import('./assets-chunks/ambiente_calidad_siata_mapa_index_html.mjs').then(m => m.default)},
    'reportes/index.html': {size: 32031, hash: '640683c6a4e8d07bee3bf25b8d437088086a5ca9150670478413695939f05b28', text: () => import('./assets-chunks/reportes_index_html.mjs').then(m => m.default)},
    'economico/digital/wifi/dashboard/index.html': {size: 32541, hash: '38be04cda4b3a0592e89d3eb94192ef016bdebe205ba812d0264689641b3ce04', text: () => import('./assets-chunks/economico_digital_wifi_dashboard_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/vamosmed/dashboard/index.html': {size: 31802, hash: '23c7b270e2b3523549c1dd368b2e546cbdf76fec9ef45ea349e96d446ead50ba', text: () => import('./assets-chunks/habitat_movilidad_vamosmed_dashboard_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/vamosmed/mapa/index.html': {size: 31762, hash: 'f334c844f93b4a073a87a56b37ca5b901e8f9f3b30e81585391fecb8bd29b5c9', text: () => import('./assets-chunks/habitat_movilidad_vamosmed_mapa_index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 30263, hash: '4b225a937711988ce02fc60338c1edebd08d7e1dec9d431fa19ec54d0f391b63', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/dashboard/index.html': {size: 31484, hash: '2e23dcbad078b50c61f49209aacef711c2c8f14fbf92e3622f70f51b44ce53c8', text: () => import('./assets-chunks/habitat_movilidad_dashboard_index_html.mjs').then(m => m.default)},
    'gobernanza/participacion/pqrs/dashboard/index.html': {size: 34049, hash: '423fd0f9fe52326b184cb14dc301d4d8f8e37bd4be7299d7448d1c184097c336', text: () => import('./assets-chunks/gobernanza_participacion_pqrs_dashboard_index_html.mjs').then(m => m.default)},
    'economico/digital/wifi/mapa/index.html': {size: 124891, hash: '877ca342c9e3737e4707ae58e5a792d4cff31b5c5c958d234868a1fc7690d0f9', text: () => import('./assets-chunks/economico_digital_wifi_mapa_index_html.mjs').then(m => m.default)},
    'calidad/turismo/dashboard/index.html': {size: 33183, hash: '3e1b618c71c21a47679df48295d3e9fc8e471f85aa5c38aace1970010b6942e2', text: () => import('./assets-chunks/calidad_turismo_dashboard_index_html.mjs').then(m => m.default)},
    'whatsapp/index.html': {size: 31260, hash: '3b0c0feccbc75104cb442749200cc49060461b1e91b9fe1ec6e59404702aab1c', text: () => import('./assets-chunks/whatsapp_index_html.mjs').then(m => m.default)},
    'calidad/turismo/map/index.html': {size: 31871, hash: '5e8f051d69a03c650f39779edcc185ed717ec5f5c7c3713a396f97f5fa404eb0', text: () => import('./assets-chunks/calidad_turismo_map_index_html.mjs').then(m => m.default)},
    'mapas/reportes/index.html': {size: 32075, hash: '6382582ef823cec2bbf59bc24f7986a158084f1ea4983c8a4e1d63d0bb311129', text: () => import('./assets-chunks/mapas_reportes_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/ruido/mapa/index.html': {size: 47994, hash: '737273357be8330df961fb839d2597af41aa7030e376e9407f95c6f5e67762f4', text: () => import('./assets-chunks/ambiente_calidad_ruido_mapa_index_html.mjs').then(m => m.default)},
    'perfil/usuarios/index.html': {size: 63707, hash: 'd5655f67ad2069a6318e32298e6fa63880004e2d573ab47a534db17c513a3fd0', text: () => import('./assets-chunks/perfil_usuarios_index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
