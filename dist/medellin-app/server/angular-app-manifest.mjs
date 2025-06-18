
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
    'index.csr.html': {size: 23599, hash: '36ceec1bc5f38f549a6d80f93e9a3fc7fea53cdc11f84c831fe977c48aa134a3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17173, hash: 'f85510f5e7eb4af27b0e79e5a955308e5242daaa0c096a9100768c5d797ee0bc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 28258, hash: '3de53990a6a184a3866e7805384ee942c907baba3fa2b87949373c0d4d8704f2', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 30263, hash: '42cce49bb3b6de42cfb2cd5ddea948d28f94678b91d828c01d258fd5602212f8', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'index.html': {size: 28258, hash: '3de53990a6a184a3866e7805384ee942c907baba3fa2b87949373c0d4d8704f2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'ambiente/residuos/camiones/mapa/index.html': {size: 31862, hash: '8355d58ea54f6a870d3649000b589c1cccac9613e5986377d8417ab632bcc17c', text: () => import('./assets-chunks/ambiente_residuos_camiones_mapa_index_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 32506, hash: '600c5a305ea15dc33d38226cc11fd66070441f6a26c525d96e37ae3cdb2b10d8', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/ruido/dashboard/index.html': {size: 30848, hash: 'a59c3199efa808a986c00cc3fcafadcd5f1d13e5e18a2fda7d443961d582354b', text: () => import('./assets-chunks/ambiente_calidad_ruido_dashboard_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/siata/dashboard/index.html': {size: 33605, hash: '5ab5b7bee299aa16175dfb47edbc8eedb0903ea1c3a83d29ae289cc480a327a4', text: () => import('./assets-chunks/ambiente_calidad_siata_dashboard_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/siata/mapa/index.html': {size: 32147, hash: '53aada18a35cb3f8951cfb0ccafbfde246b1cac7273d5d13fbb0d66a809a1ed7', text: () => import('./assets-chunks/ambiente_calidad_siata_mapa_index_html.mjs').then(m => m.default)},
    'reportes/index.html': {size: 32031, hash: 'e1906c150652a4c6f60f6bb4efe96c59193584bf531280eed272eaad3ab8b90d', text: () => import('./assets-chunks/reportes_index_html.mjs').then(m => m.default)},
    'economico/digital/wifi/dashboard/index.html': {size: 32541, hash: '9f062d7323b181afccc4033fbff0cf1b65a727e55d027068cfe83096b5d87e86', text: () => import('./assets-chunks/economico_digital_wifi_dashboard_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/vamosmed/dashboard/index.html': {size: 31802, hash: '9d337c1b2c3a3c62a1e826022b41f0b82d4477c1a489438ba1b7e41377e5b9ce', text: () => import('./assets-chunks/habitat_movilidad_vamosmed_dashboard_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/vamosmed/mapa/index.html': {size: 31762, hash: '11e80bb4b736ffbfa6a549ce36d6342e73ee51aaf70b828ec156abad81cc3581', text: () => import('./assets-chunks/habitat_movilidad_vamosmed_mapa_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/dashboard/index.html': {size: 31484, hash: 'dfde9145890dcffc37d49fd6a653f5b4fb3a90f007bbe5baf46548df3814a396', text: () => import('./assets-chunks/habitat_movilidad_dashboard_index_html.mjs').then(m => m.default)},
    'economico/digital/wifi/mapa/index.html': {size: 124891, hash: '84f77dd147e3465f1de957063940ba518beafcf9d17c30552d58930cc961eec5', text: () => import('./assets-chunks/economico_digital_wifi_mapa_index_html.mjs').then(m => m.default)},
    'gobernanza/participacion/pqrs/dashboard/index.html': {size: 34049, hash: 'ca28799990aea6d5e431b41b38a1319e29c1b2736efbac4548b6313833da8103', text: () => import('./assets-chunks/gobernanza_participacion_pqrs_dashboard_index_html.mjs').then(m => m.default)},
    'whatsapp/index.html': {size: 31260, hash: '07aeb22cfec8f667c6218981c0da183335bac373f5aa5ba790c406bbfee54169', text: () => import('./assets-chunks/whatsapp_index_html.mjs').then(m => m.default)},
    'calidad/turismo/dashboard/index.html': {size: 33183, hash: '6b88aa2cd1a0361e73789755c18fd31cf4339858c926e510b2d499f8a7707fb2', text: () => import('./assets-chunks/calidad_turismo_dashboard_index_html.mjs').then(m => m.default)},
    'calidad/turismo/map/index.html': {size: 31871, hash: '58bd4eae7776ee099efac3e4bc6f963af7622580b4d67b71b847b40009b31a3e', text: () => import('./assets-chunks/calidad_turismo_map_index_html.mjs').then(m => m.default)},
    'mapas/reportes/index.html': {size: 32075, hash: 'b275e4f75cc04b831e4eaef2fba5f26371a7f14c7e6da920aa6fd641730c0aee', text: () => import('./assets-chunks/mapas_reportes_index_html.mjs').then(m => m.default)},
    'en-construccion/index.html': {size: 26518, hash: '3b7f360f349cc514d91a422d20e992d7a04754e2e2f43a27bc43be5c9afeb988', text: () => import('./assets-chunks/en-construccion_index_html.mjs').then(m => m.default)},
    'ambiente/residuos/camiones/dashboard/index.html': {size: 31672, hash: '3ea2f64e69d27fa334a03dd659767169653d5b44dc47ece9ab8bdc6f987a7d5a', text: () => import('./assets-chunks/ambiente_residuos_camiones_dashboard_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/ruido/mapa/index.html': {size: 48035, hash: '4ce608b69ab2089ba3d10d094d9361219b4a772d51035d90a569d5c770ac69ca', text: () => import('./assets-chunks/ambiente_calidad_ruido_mapa_index_html.mjs').then(m => m.default)},
    'perfil/usuarios/index.html': {size: 65559, hash: 'cced399c8ccc19522d8379b32817b25d26a299898fa6d56b89114ef4ca95955a', text: () => import('./assets-chunks/perfil_usuarios_index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
