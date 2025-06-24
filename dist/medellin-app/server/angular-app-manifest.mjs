
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
    "route": "/territoriointeligente/visualizador/en-construccion"
  },
  {
    "renderMode": 2,
    "redirectTo": "/territoriointeligente/visualizador/en-construccion",
    "route": "/territoriointeligente/visualizador/**"
  }
],
  assets: {
    'index.csr.html': {size: 23634, hash: '9db9bd8f2672d2932c8ea2a28b52d151e0062bf733dfa91f8dd0571241a4e79a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17208, hash: 'c5c1d0cbda6fbf7101894a4f1cc9578ba18edd90288ebbbc84f2e74b49ff0c03', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/login/index.html': {size: 28293, hash: '19af0f7e2c95df06bfe47aea0c838eca000258b0d9abb3133882cfd63b978454', text: () => import('./assets-chunks/territoriointeligente_visualizador_login_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/index.html': {size: 28293, hash: '19af0f7e2c95df06bfe47aea0c838eca000258b0d9abb3133882cfd63b978454', text: () => import('./assets-chunks/territoriointeligente_visualizador_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/menu/index.html': {size: 30298, hash: 'd9ac63323d75bfc08c4426fe69162865e217c7c41df77e0acdf94fc04c3f1a04', text: () => import('./assets-chunks/territoriointeligente_visualizador_menu_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/ambiente/residuos/camiones/dashboard/index.html': {size: 31591, hash: '294a3b2834b2844c4874efb264a34748eb41620b2b8b1a3d1ae33f01664c58ac', text: () => import('./assets-chunks/territoriointeligente_visualizador_ambiente_residuos_camiones_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/ambiente/residuos/camiones/mapa/index.html': {size: 31781, hash: '61c2bad676f4d6ce28fb54aec814b5aac3f38d7091824124fe9ca2c3581c2223', text: () => import('./assets-chunks/territoriointeligente_visualizador_ambiente_residuos_camiones_mapa_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/ambiente/calidad/ruido/dashboard/index.html': {size: 30854, hash: 'ac8f866ad5d9bd27b8790ea91372e6b564daf8b7f782d87ed497ab33fcc60794', text: () => import('./assets-chunks/territoriointeligente_visualizador_ambiente_calidad_ruido_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/ambiente/calidad/siata/dashboard/index.html': {size: 33350, hash: '26c2d91eefe2411f181678a351e1d7e6103aaade4fd708deeb5731cbedf5a01e', text: () => import('./assets-chunks/territoriointeligente_visualizador_ambiente_calidad_siata_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/ambiente/calidad/siata/mapa/index.html': {size: 32066, hash: '0096c0c7ca00d861a845133c1e99f67ff3405604cc159dcf538401a2ce155b38', text: () => import('./assets-chunks/territoriointeligente_visualizador_ambiente_calidad_siata_mapa_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/reportes/index.html': {size: 31950, hash: '3172d680756d1705bdd70b047afd628948c4744ea9b01bbcb362b14732a1bc5d', text: () => import('./assets-chunks/territoriointeligente_visualizador_reportes_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/economico/digital/wifi/dashboard/index.html': {size: 32394, hash: '36f5b3218952b6efe574a26d7753979702a7969240ac342710d427ff10ee2851', text: () => import('./assets-chunks/territoriointeligente_visualizador_economico_digital_wifi_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/inicio/index.html': {size: 32346, hash: '09333463552ea9922374d929a9b8e013ff937b88f117c0d3284fca976b48ad0f', text: () => import('./assets-chunks/territoriointeligente_visualizador_inicio_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/habitat/movilidad/vamosmed/dashboard/index.html': {size: 31721, hash: '8577eee7398916b4f08a39177dd1b22025fa40183183b169eaddb018469c36e7', text: () => import('./assets-chunks/territoriointeligente_visualizador_habitat_movilidad_vamosmed_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/economico/digital/wifi/mapa/index.html': {size: 125614, hash: 'f820a587528dbea9ab16b6adb99a5bb51c8dec30708f82b3eda636ac4bb39cbb', text: () => import('./assets-chunks/territoriointeligente_visualizador_economico_digital_wifi_mapa_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/habitat/movilidad/vamosmed/mapa/index.html': {size: 31698, hash: 'e0e6ad589fb55542a12c5835457b7259fa4be4642bae9d735eae0002714c8484', text: () => import('./assets-chunks/territoriointeligente_visualizador_habitat_movilidad_vamosmed_mapa_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/habitat/movilidad/dashboard/index.html': {size: 31432, hash: '0bc3d0e956621833bcbc5e63bae15aac9a3e26725d35eae840936af2f45c6eae', text: () => import('./assets-chunks/territoriointeligente_visualizador_habitat_movilidad_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/gobernanza/participacion/pqrs/dashboard/index.html': {size: 33704, hash: 'a83aae33c9f9ccafe37e41f70c88ca4ee23c463bd3d76de7eda8c0a0f14c2852', text: () => import('./assets-chunks/territoriointeligente_visualizador_gobernanza_participacion_pqrs_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/whatsapp/index.html': {size: 31208, hash: 'e37991a983d988f634c87f0b98f353e6a353d184f9e5157157ffbdae9dd91d41', text: () => import('./assets-chunks/territoriointeligente_visualizador_whatsapp_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/calidad/turismo/dashboard/index.html': {size: 32986, hash: '2e1d7ba0528d97d05f8427bcfa1d933e1ebc71f8c3a18ad50e9cc3f498e88e58', text: () => import('./assets-chunks/territoriointeligente_visualizador_calidad_turismo_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/mapas/reportes/index.html': {size: 31981, hash: '6b8f6a9f41127d846fefb5cddb3e492636233b21f4696c1eec609aca448b74b7', text: () => import('./assets-chunks/territoriointeligente_visualizador_mapas_reportes_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/en-construccion/index.html': {size: 26553, hash: '5eb2e89ef7f76673a32e51c4afe41ab610fc909ecd6e15e8540b6a4fa964509a', text: () => import('./assets-chunks/territoriointeligente_visualizador_en-construccion_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/ambiente/calidad/ruido/mapa/index.html': {size: 48041, hash: 'd27445b0f12fe29c9b26613c37fe2908fafd7419e6ae793aa218d90fda6958b9', text: () => import('./assets-chunks/territoriointeligente_visualizador_ambiente_calidad_ruido_mapa_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/perfil/usuarios/index.html': {size: 78257, hash: 'ba63da7b407c6366991c33c9b8a24104b75daefdf9b38ec89582cc53a397a28e', text: () => import('./assets-chunks/territoriointeligente_visualizador_perfil_usuarios_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/calidad/turismo/map/index.html': {size: 31807, hash: '3a9b15d7ffc626e07a2e04cc9cb4af7e0dccd9d833927675c1613edaa17ad899', text: () => import('./assets-chunks/territoriointeligente_visualizador_calidad_turismo_map_index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
