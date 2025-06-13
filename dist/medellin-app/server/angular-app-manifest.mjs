
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
    'index.csr.html': {size: 23632, hash: 'ab14c78804ddb8034056d642dbe4a2412e0c50e069cdef48ce5e1de8c5be9f70', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17206, hash: '97fa4725d0dbefdcf46f35f514f8ca886f5599e297460e00d90afb08d03b9467', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/login/index.html': {size: 28291, hash: '4ca2386ba8d5dcf59ea0cd4ff75789eba58c56a61bcf40661379459cf39acd4c', text: () => import('./assets-chunks/territoriointeligente_visualizador_login_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/inicio/index.html': {size: 32539, hash: '2d339e50fef1f27173cc2eba9882377dd631fb9b3078dc864a4e3a2949f0a31f', text: () => import('./assets-chunks/territoriointeligente_visualizador_inicio_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/ambiente/residuos/camiones/dashboard/index.html': {size: 31705, hash: '91a0a36bf42c389b01b11426897756722973ce13ef5b75c04bb3257a5f1a87ec', text: () => import('./assets-chunks/territoriointeligente_visualizador_ambiente_residuos_camiones_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/ambiente/residuos/camiones/mapa/index.html': {size: 31895, hash: '42f9007f264c2cb5b1e70239543e11a72c9bc9f2676abea8f695ad2090d73dc3', text: () => import('./assets-chunks/territoriointeligente_visualizador_ambiente_residuos_camiones_mapa_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/index.html': {size: 28291, hash: '4ca2386ba8d5dcf59ea0cd4ff75789eba58c56a61bcf40661379459cf39acd4c', text: () => import('./assets-chunks/territoriointeligente_visualizador_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/ambiente/calidad/ruido/dashboard/index.html': {size: 30881, hash: '96e7a644f405feab1b4e99c0adb087ebdc2b94bfbd6bfc125036a492255b9b14', text: () => import('./assets-chunks/territoriointeligente_visualizador_ambiente_calidad_ruido_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/menu/index.html': {size: 30296, hash: '53a4ca3c2edf6c72ed601d1bf7ed6a4dadd193582acdc16c1962fc8ea8070d81', text: () => import('./assets-chunks/territoriointeligente_visualizador_menu_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/ambiente/calidad/siata/mapa/index.html': {size: 32180, hash: '8cd419fd71590c127770d5c9df79b1189058ae79dfb8bf86a287bdcbd397be20', text: () => import('./assets-chunks/territoriointeligente_visualizador_ambiente_calidad_siata_mapa_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/ambiente/calidad/siata/dashboard/index.html': {size: 33638, hash: 'f67357bd76c42981cb4958a1babe812c82bc31fde9c4ca0f03f433e441d7bc39', text: () => import('./assets-chunks/territoriointeligente_visualizador_ambiente_calidad_siata_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/economico/digital/wifi/dashboard/index.html': {size: 32574, hash: 'a9ad5e40ed2987e339ab830fd8c7a64036e344083db035a1ce7b90be6b2c1bd2', text: () => import('./assets-chunks/territoriointeligente_visualizador_economico_digital_wifi_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/reportes/index.html': {size: 32064, hash: '5355a41fbd8339659b403823dd15b089a7603e0c5b789c8f0d30d2a2aa10f2e2', text: () => import('./assets-chunks/territoriointeligente_visualizador_reportes_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/habitat/movilidad/vamosmed/dashboard/index.html': {size: 31835, hash: 'f73d931b2e66d5113f7ca326187fa7447315deec21bd4760c78e596dd4513678', text: () => import('./assets-chunks/territoriointeligente_visualizador_habitat_movilidad_vamosmed_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/habitat/movilidad/vamosmed/mapa/index.html': {size: 31795, hash: '90ead5bafefb26a78f3040452277c2075221ea587986e761ed8ded5f5efe3b38', text: () => import('./assets-chunks/territoriointeligente_visualizador_habitat_movilidad_vamosmed_mapa_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/habitat/movilidad/dashboard/index.html': {size: 31517, hash: '621d32644b19388397e4d0f01e9f116bb294d0e07fbbddf18c2100dc2d3e82e0', text: () => import('./assets-chunks/territoriointeligente_visualizador_habitat_movilidad_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/gobernanza/participacion/pqrs/dashboard/index.html': {size: 34082, hash: 'c5bfe2a842d6f017bfd088eacf32c91faa738ff494c22bd969acce9abd7d1aa1', text: () => import('./assets-chunks/territoriointeligente_visualizador_gobernanza_participacion_pqrs_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/economico/digital/wifi/mapa/index.html': {size: 124924, hash: 'd6e3e9d1ce3709388f39a285c726e29faf0acde944c0d371bb06cefc1e15f487', text: () => import('./assets-chunks/territoriointeligente_visualizador_economico_digital_wifi_mapa_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/ambiente/calidad/ruido/mapa/index.html': {size: 53877, hash: '5c27876c980a3a1ebb08b293bde51dbde7a8497810dc80c1fbb08c340fa25be9', text: () => import('./assets-chunks/territoriointeligente_visualizador_ambiente_calidad_ruido_mapa_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/perfil/usuarios/index.html': {size: 55775, hash: 'a7ada1dfc4f74f9c1649ee59a69955664d6685dbd21c6702a44480fd4bfba59a', text: () => import('./assets-chunks/territoriointeligente_visualizador_perfil_usuarios_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/mapas/reportes/index.html': {size: 32108, hash: '0d93e7e361501698f20cdd13173dc36ba93cd0cb5e395e61da9dd5093cb8e1b1', text: () => import('./assets-chunks/territoriointeligente_visualizador_mapas_reportes_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/calidad/turismo/dashboard/index.html': {size: 33216, hash: 'e4f74e05aa0cde42d520678d2bd5283bf9df7510427d767b52494d9c0ddbaa7a', text: () => import('./assets-chunks/territoriointeligente_visualizador_calidad_turismo_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/whatsapp/index.html': {size: 31293, hash: '576aa049254ab1c99e948624b0a66687ad43379590c0a2eb669c81ce79ba8056', text: () => import('./assets-chunks/territoriointeligente_visualizador_whatsapp_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/calidad/turismo/map/index.html': {size: 31904, hash: '81f869574653c465bba38a884fbce5295f403e6f2b03ec6a110c0c5b56f923ed', text: () => import('./assets-chunks/territoriointeligente_visualizador_calidad_turismo_map_index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
