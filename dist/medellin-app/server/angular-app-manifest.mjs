
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
    'index.csr.html': {size: 23632, hash: '54ad228fb94b66dce9801933d124b634be6561a4a39c4fffd56d3c751d5ea7c3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17206, hash: '0157485851b0a6200f3989c96acc8fe0ab4ddf430831bb175ed3a24d39cbbda1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/index.html': {size: 28291, hash: 'c8910423d0c92f8ac76cb8d7ffa76ab61a8f406e8bececf3dee4e04ed3b69046', text: () => import('./assets-chunks/territoriointeligente_visualizador_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/login/index.html': {size: 28291, hash: 'c8910423d0c92f8ac76cb8d7ffa76ab61a8f406e8bececf3dee4e04ed3b69046', text: () => import('./assets-chunks/territoriointeligente_visualizador_login_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/ambiente/residuos/camiones/dashboard/index.html': {size: 31705, hash: 'cf288509305fc5532a1b66659bf7e518e2a92ffbef5f917553956bceb0843013', text: () => import('./assets-chunks/territoriointeligente_visualizador_ambiente_residuos_camiones_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/ambiente/residuos/camiones/mapa/index.html': {size: 31895, hash: '47b1ab83e176de1d2cf2d087e89ab0eafd2239e7c7d0ccbdbd67805cdcc266d1', text: () => import('./assets-chunks/territoriointeligente_visualizador_ambiente_residuos_camiones_mapa_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/ambiente/calidad/ruido/dashboard/index.html': {size: 30881, hash: 'df0b08d57f00a3609ac652f9b424040c9ed7b120244fcd3ccf6fd0d657960ee8', text: () => import('./assets-chunks/territoriointeligente_visualizador_ambiente_calidad_ruido_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/ambiente/calidad/siata/dashboard/index.html': {size: 33638, hash: '6e9418dca5b6d8c07dfb906415ac0d1c78e426d402fc26287c73ca1ade444c7d', text: () => import('./assets-chunks/territoriointeligente_visualizador_ambiente_calidad_siata_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/menu/index.html': {size: 30296, hash: '3743f4c9d3fb7e042646a844fb07971145db23fd44a0e900c05703464a5d2277', text: () => import('./assets-chunks/territoriointeligente_visualizador_menu_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/ambiente/calidad/siata/mapa/index.html': {size: 32180, hash: '6dc489af2e989a9b3056669f813d5b05cb2b7589b636f408762c7b5e385ccb34', text: () => import('./assets-chunks/territoriointeligente_visualizador_ambiente_calidad_siata_mapa_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/inicio/index.html': {size: 32539, hash: '857d0000ec505a5b48a4d9c1470f301dbbdd20720d08fb8621a8b5bb5f1aff30', text: () => import('./assets-chunks/territoriointeligente_visualizador_inicio_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/economico/digital/wifi/dashboard/index.html': {size: 32574, hash: 'c9ff9b3531e2c8e1c3f9c8fddc15cad35d68009d112efcf65a9b09b2992008d2', text: () => import('./assets-chunks/territoriointeligente_visualizador_economico_digital_wifi_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/reportes/index.html': {size: 32064, hash: '97f6b800dbcfbebd493c452481a2b0bbb2b5ebc9ebca0af5ba13f7822dde0494', text: () => import('./assets-chunks/territoriointeligente_visualizador_reportes_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/habitat/movilidad/vamosmed/dashboard/index.html': {size: 31835, hash: '5d977d28814bb5c615f6ace6b87d1266c6f571971d6643973bb686074b8a1d45', text: () => import('./assets-chunks/territoriointeligente_visualizador_habitat_movilidad_vamosmed_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/ambiente/calidad/ruido/mapa/index.html': {size: 53877, hash: '3351cf8cefad2bae3bc2e17794e66658333cac01849ce514f30d1c428d2f781c', text: () => import('./assets-chunks/territoriointeligente_visualizador_ambiente_calidad_ruido_mapa_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/habitat/movilidad/dashboard/index.html': {size: 31517, hash: 'd9ad5979f0a72b151847fe92ab801148850a13984021744399026612772eca54', text: () => import('./assets-chunks/territoriointeligente_visualizador_habitat_movilidad_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/habitat/movilidad/vamosmed/mapa/index.html': {size: 31795, hash: 'b497064be8373df9b9b9e817cf6fb31f922dd45a7180f45f1a013ed522957e16', text: () => import('./assets-chunks/territoriointeligente_visualizador_habitat_movilidad_vamosmed_mapa_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/perfil/usuarios/index.html': {size: 55775, hash: '6e6fbd34e00fe4706d9c37338fe73cbe378fe13f178fb3805043fea4084b2f92', text: () => import('./assets-chunks/territoriointeligente_visualizador_perfil_usuarios_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/gobernanza/participacion/pqrs/dashboard/index.html': {size: 34082, hash: '20672fb9d135cd91c17201592e274517ee8fe056807ed2d61691d37a0840c958', text: () => import('./assets-chunks/territoriointeligente_visualizador_gobernanza_participacion_pqrs_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/whatsapp/index.html': {size: 31293, hash: '8ca7f332d20c1b8cd1765603964fbffb2120ce88a73f2205d10acc47bb8d1210', text: () => import('./assets-chunks/territoriointeligente_visualizador_whatsapp_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/calidad/turismo/dashboard/index.html': {size: 33216, hash: '67d7613a2349a9f9198add11fd45d97bf72e38cd7f61c029dc069505e3418048', text: () => import('./assets-chunks/territoriointeligente_visualizador_calidad_turismo_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/economico/digital/wifi/mapa/index.html': {size: 124924, hash: '5f4fea8dbb99278881770c862ce1c1d966cb26beec12ff0e66625c290244eeee', text: () => import('./assets-chunks/territoriointeligente_visualizador_economico_digital_wifi_mapa_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/calidad/turismo/map/index.html': {size: 31904, hash: '2ca41270ef1fce9a4cc812b3bfc7811484fbf28857350db1f57ad500b318f3e4', text: () => import('./assets-chunks/territoriointeligente_visualizador_calidad_turismo_map_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/mapas/reportes/index.html': {size: 32108, hash: 'be28db97499c6a086d2fc7dcd9b288973b05be85bc74703ad313c3e4847e2bcd', text: () => import('./assets-chunks/territoriointeligente_visualizador_mapas_reportes_index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
