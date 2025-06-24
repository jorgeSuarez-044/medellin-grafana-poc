
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
    'index.csr.html': {size: 23634, hash: '0d54b98e309e04645c0361b7b5170b7e85eec3e9ac19441eb3ae65e6f11063b2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17208, hash: '527baed5e3bad99692b56130785b8f4e0589c762dd4a8487d368a2356ed0bb53', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/login/index.html': {size: 28293, hash: '0c5ecadbd5779276a62a843d57868ea7826669a46c9ad568d6093477bd5d3444', text: () => import('./assets-chunks/territoriointeligente_visualizador_login_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/ambiente/residuos/camiones/dashboard/index.html': {size: 31591, hash: 'e1947f00b39a4e876ece5c5f98b390deadbcc80f8b213f216a42ac7e968eec9a', text: () => import('./assets-chunks/territoriointeligente_visualizador_ambiente_residuos_camiones_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/index.html': {size: 28293, hash: '0c5ecadbd5779276a62a843d57868ea7826669a46c9ad568d6093477bd5d3444', text: () => import('./assets-chunks/territoriointeligente_visualizador_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/ambiente/residuos/camiones/mapa/index.html': {size: 31781, hash: 'c1bc1cee51cd99fedf99585a863d3453767b1303344113253e3e3a1f62566f48', text: () => import('./assets-chunks/territoriointeligente_visualizador_ambiente_residuos_camiones_mapa_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/ambiente/calidad/ruido/dashboard/index.html': {size: 30854, hash: '5a4ac376fce12ab1b19fed0e2617851ee6d98bc43971199cf4dc9ecc3ce66e3f', text: () => import('./assets-chunks/territoriointeligente_visualizador_ambiente_calidad_ruido_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/inicio/index.html': {size: 32346, hash: '5f6f8ff13e8b224c0790ee05bb68c037098129579b35d1c24cd03eb49b5e72ac', text: () => import('./assets-chunks/territoriointeligente_visualizador_inicio_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/menu/index.html': {size: 30298, hash: '54227a4fd782cce58c4046cfd387bf28c4a38e78d249ba1db014f861d83cd756', text: () => import('./assets-chunks/territoriointeligente_visualizador_menu_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/ambiente/calidad/siata/dashboard/index.html': {size: 33350, hash: 'aa355d3f3dab64afb7380fddd6c92261ae3941ce45fb59ef2d8e42bfc2d8b4a3', text: () => import('./assets-chunks/territoriointeligente_visualizador_ambiente_calidad_siata_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/ambiente/calidad/siata/mapa/index.html': {size: 32066, hash: 'd7369e9eb8f3fb87ee926647758206b0f3e700b789b394ab416610d04b35bb75', text: () => import('./assets-chunks/territoriointeligente_visualizador_ambiente_calidad_siata_mapa_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/economico/digital/wifi/dashboard/index.html': {size: 32394, hash: 'dbdb71cf3b5246141042775e53ba70cd8f5d5cef33cd0b800a01a2df247c3922', text: () => import('./assets-chunks/territoriointeligente_visualizador_economico_digital_wifi_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/reportes/index.html': {size: 31950, hash: 'd2eeafa698f1939e6e13a0905e66ce22e9b98f9741665d437be2d71440abec47', text: () => import('./assets-chunks/territoriointeligente_visualizador_reportes_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/habitat/movilidad/vamosmed/dashboard/index.html': {size: 31721, hash: '25c8720e204f3a969e13fb04bcc4b4eef18bcb31a322b3a9f1fefc5d09d87742', text: () => import('./assets-chunks/territoriointeligente_visualizador_habitat_movilidad_vamosmed_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/habitat/movilidad/vamosmed/mapa/index.html': {size: 31698, hash: 'cdbace13ea0c876a0ad1e6b1c00043aa4f6b52d901108b30ff68d79aa4e0dcd7', text: () => import('./assets-chunks/territoriointeligente_visualizador_habitat_movilidad_vamosmed_mapa_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/habitat/movilidad/dashboard/index.html': {size: 31432, hash: 'b7e06cddb7cad9e3b07b35b5ac4a000c0145f844da901ffe309ff33661bd3173', text: () => import('./assets-chunks/territoriointeligente_visualizador_habitat_movilidad_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/gobernanza/participacion/pqrs/dashboard/index.html': {size: 33704, hash: '6f6e9a2eac21d683301002f2ca2e232459be656b136dceb78cb8116e9e1b90dc', text: () => import('./assets-chunks/territoriointeligente_visualizador_gobernanza_participacion_pqrs_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/economico/digital/wifi/mapa/index.html': {size: 125614, hash: 'dd5d1a52be9a1da90965e9ad08348b09dcd43df55ed12ad1137d912c76aed61d', text: () => import('./assets-chunks/territoriointeligente_visualizador_economico_digital_wifi_mapa_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/calidad/turismo/dashboard/index.html': {size: 32986, hash: '793cb5088c99d8c461031b318bc6c129eb438431834a49dcf7647ace513f72f9', text: () => import('./assets-chunks/territoriointeligente_visualizador_calidad_turismo_dashboard_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/whatsapp/index.html': {size: 31208, hash: '6900dd278df9aaf40ed77e43b1f363617195125e63c1548037146bcc8f7cc717', text: () => import('./assets-chunks/territoriointeligente_visualizador_whatsapp_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/mapas/reportes/index.html': {size: 31981, hash: 'ee7a9198593e83f431bbefc5acf86e31505a4264ca14aa1698eb9d3213747cdc', text: () => import('./assets-chunks/territoriointeligente_visualizador_mapas_reportes_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/calidad/turismo/map/index.html': {size: 31807, hash: 'edfc0c1b18720cfe52bb4c2e92eb1ccd67c768201ded50c5e623bc0d0f522dbb', text: () => import('./assets-chunks/territoriointeligente_visualizador_calidad_turismo_map_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/en-construccion/index.html': {size: 26553, hash: 'c5b4fac68426f8d68802b2f71de5afd552f0844dfac169b2d3ebd6bd9a410460', text: () => import('./assets-chunks/territoriointeligente_visualizador_en-construccion_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/ambiente/calidad/ruido/mapa/index.html': {size: 48041, hash: '09602b7d76638992db71d0138e91d59221e327d1e11afbf47c0ade347b52d7d7', text: () => import('./assets-chunks/territoriointeligente_visualizador_ambiente_calidad_ruido_mapa_index_html.mjs').then(m => m.default)},
    'territoriointeligente/visualizador/perfil/usuarios/index.html': {size: 78216, hash: '26691ffd7a208a5837e8db90eec35439102d429a94c4a17cc5805144bbf00417', text: () => import('./assets-chunks/territoriointeligente_visualizador_perfil_usuarios_index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
