
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
    'index.csr.html': {size: 23597, hash: '1dfc6e784777aa1adb62ed103008a97935b449c4135e5998ca0f4c89db63b45d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17171, hash: 'b76041c9a53f848d0579f406313dd3ab77210f644d5ae57370e3cec71f59ac8c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 32299, hash: '776a6880ae8b3adb5c17a619788e8b8858bb46b8bc8700dc245fdc7006f3ed46', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 28258, hash: '24e776de0074e04eabd735a106ffe70fa89155f68a0699d3556d324cb4de6b09', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'index.html': {size: 28258, hash: '24e776de0074e04eabd735a106ffe70fa89155f68a0699d3556d324cb4de6b09', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'ambiente/residuos/camiones/mapa/index.html': {size: 31738, hash: 'c0a76c85b650b94d3df28faf822c081f7e2380a175ba55c9149d0e0c2f22fcdd', text: () => import('./assets-chunks/ambiente_residuos_camiones_mapa_index_html.mjs').then(m => m.default)},
    'ambiente/residuos/camiones/dashboard/index.html': {size: 31548, hash: 'd56a3cc77c68a4d6f3c12ab54cc97aa88a99f58ab6d4424bbe29588c826e67dd', text: () => import('./assets-chunks/ambiente_residuos_camiones_dashboard_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/ruido/dashboard/index.html': {size: 30817, hash: '9dedeedec3615461466d72fd4ea7314fa1af1ccd80632c938e84b3e6613b5280', text: () => import('./assets-chunks/ambiente_calidad_ruido_dashboard_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/siata/mapa/index.html': {size: 32023, hash: 'f17b1663ccf351f63f813810f48385462487384bbed938b33159ed1d4aadedae', text: () => import('./assets-chunks/ambiente_calidad_siata_mapa_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/siata/dashboard/index.html': {size: 33295, hash: 'a5bc0c49cde69b344553d005c91ca466c2d4b71cd350554731f7194f3352e92e', text: () => import('./assets-chunks/ambiente_calidad_siata_dashboard_index_html.mjs').then(m => m.default)},
    'reportes/index.html': {size: 31885, hash: 'c9017472828d26466b1d18a6d3efea0dfa6a17a39c74251a621d66dd6b15d419', text: () => import('./assets-chunks/reportes_index_html.mjs').then(m => m.default)},
    'economico/digital/wifi/dashboard/index.html': {size: 32345, hash: '91ee9b95e526506677c7da68ee5f254a876a394d510c6338c5de900c396808ed', text: () => import('./assets-chunks/economico_digital_wifi_dashboard_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/vamosmed/dashboard/index.html': {size: 31678, hash: 'ed2765259acf7ed36cf2f2f9f4d6cd728e1717f5c88780ba03994ad386d2f2ba', text: () => import('./assets-chunks/habitat_movilidad_vamosmed_dashboard_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/vamosmed/mapa/index.html': {size: 31638, hash: '64b2862a6864601ce1caa6707fda5bf7bb2cf9a47cb66645a7b5273c14718802', text: () => import('./assets-chunks/habitat_movilidad_vamosmed_mapa_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/dashboard/index.html': {size: 31305, hash: '5a71103fc4d441094963abaf88fabac28eadf3594d2c48cdb04a3284a93b1ec9', text: () => import('./assets-chunks/habitat_movilidad_dashboard_index_html.mjs').then(m => m.default)},
    'economico/digital/wifi/mapa/index.html': {size: 125097, hash: 'b8b559f06c52ef9a49f9b44a8ac7469d2b96040b68e693cbb66d9cda727d7f4e', text: () => import('./assets-chunks/economico_digital_wifi_mapa_index_html.mjs').then(m => m.default)},
    'gobernanza/participacion/pqrs/dashboard/index.html': {size: 33677, hash: 'fc5f15425660a0177cf2f24b3bfb164d837f0355733ddb92443f55e59d7b5af9', text: () => import('./assets-chunks/gobernanza_participacion_pqrs_dashboard_index_html.mjs').then(m => m.default)},
    'whatsapp/index.html': {size: 31167, hash: '70e0e8fcf7e56920072dc117ca2f86033685475a179acee53c13ab582ae91673', text: () => import('./assets-chunks/whatsapp_index_html.mjs').then(m => m.default)},
    'calidad/turismo/dashboard/index.html': {size: 32935, hash: 'fdcd1ffae6361663594ca27996bde7fae660fa1160c989d438ad3f42ef44ccc4', text: () => import('./assets-chunks/calidad_turismo_dashboard_index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 30263, hash: 'b63b8f100ec8e6a0ea72f4387160b6c33e7a4caba7d3c19a6c4b6c0b443face4', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'calidad/turismo/map/index.html': {size: 31764, hash: '525635a8374f9c9a27029beb1210f1dfa5a9a7bb436a82765df641525cfe75e4', text: () => import('./assets-chunks/calidad_turismo_map_index_html.mjs').then(m => m.default)},
    'mapas/reportes/index.html': {size: 31920, hash: 'b74f52948d1e9dcdb47c7697ed55bef48927425cd41fe27718240453e1cbbee1', text: () => import('./assets-chunks/mapas_reportes_index_html.mjs').then(m => m.default)},
    'en-construccion/index.html': {size: 26518, hash: 'ed9e463b03ba334cdf80beaaca9bda4a5473832b65d6aeae8e903ee9d54e0c42', text: () => import('./assets-chunks/en-construccion_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/ruido/mapa/index.html': {size: 48009, hash: 'f3eaabeb3b267de7d705f2145d77abcac03120513bcdf841ea9e9ffe08aeaf26', text: () => import('./assets-chunks/ambiente_calidad_ruido_mapa_index_html.mjs').then(m => m.default)},
    'perfil/usuarios/index.html': {size: 72812, hash: '5e3754198be68504aa01627448fc6dfbc04098b38c25713d0a195340387ed71b', text: () => import('./assets-chunks/perfil_usuarios_index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
