
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
    'index.csr.html': {size: 23599, hash: '04cb21b132550a2a2fce3d5a3354b55baa61cfe3d8d20cb5ffb1c94b310723ff', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17173, hash: 'a4b971a73f331aca6560c6cb46188206d8ec144aabb27d3f332556c4e28cd8c9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 28258, hash: '18490081ed910e1032e2d2fb4896d32e1960b86d21d1a408147f285dbb239174', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 32506, hash: 'faedae2991380793a004f1003f7caa9d6a16a845fc346556bf8c79b15faa70cf', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'ambiente/residuos/camiones/dashboard/index.html': {size: 31672, hash: 'e06e15fcc7de19c5ae16524f7b721a4cf12fd2a9da8fe43f56a38ecb2fafd2fe', text: () => import('./assets-chunks/ambiente_residuos_camiones_dashboard_index_html.mjs').then(m => m.default)},
    'ambiente/residuos/camiones/mapa/index.html': {size: 31862, hash: 'bfa51b57b29e1e4b3c416d7eae73413d111503bc868c9475f840d40e0a0fe7aa', text: () => import('./assets-chunks/ambiente_residuos_camiones_mapa_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/ruido/dashboard/index.html': {size: 30848, hash: 'd63a0f88e02148c247b66ed0b113c6a4f1056bfc3d3219b700492301f18afa66', text: () => import('./assets-chunks/ambiente_calidad_ruido_dashboard_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/siata/dashboard/index.html': {size: 33605, hash: '3cb74bd5c1a7d3c947a56ca97c7db5507565c277e3e0792551ac22f807757215', text: () => import('./assets-chunks/ambiente_calidad_siata_dashboard_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/siata/mapa/index.html': {size: 32147, hash: 'bfaaf70d8be2c772c2796f8ca63d4ea345b14bfe4fecba4ef7be24788a1e25dc', text: () => import('./assets-chunks/ambiente_calidad_siata_mapa_index_html.mjs').then(m => m.default)},
    'reportes/index.html': {size: 32031, hash: '285db6b8b2ef45e0b79b3c892455477e9c06bd063c7b8a31f30ea01c3dddb5e0', text: () => import('./assets-chunks/reportes_index_html.mjs').then(m => m.default)},
    'economico/digital/wifi/dashboard/index.html': {size: 32541, hash: 'c6cd3c2a70f762b06f56cd97c55c6f0a61532404d873b447091fb2c257850c0f', text: () => import('./assets-chunks/economico_digital_wifi_dashboard_index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 30263, hash: '85b3b7b0545240198fff0d35a84537e6a3f11116082923677b4531b85c866dfd', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/vamosmed/dashboard/index.html': {size: 31802, hash: 'd2b3d24a12b8563a9392a295458f1d31c8852c4ebc53b661dcc5ee902137cc9b', text: () => import('./assets-chunks/habitat_movilidad_vamosmed_dashboard_index_html.mjs').then(m => m.default)},
    'index.html': {size: 28258, hash: '18490081ed910e1032e2d2fb4896d32e1960b86d21d1a408147f285dbb239174', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'economico/digital/wifi/mapa/index.html': {size: 124891, hash: '89c8c90bcd6cb7575b196c47f925f6be804cdc101c68c495f785a25b0af0b03b', text: () => import('./assets-chunks/economico_digital_wifi_mapa_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/vamosmed/mapa/index.html': {size: 31762, hash: 'bd2e1c646b9a2b925236448c43e4b893eac4309a94aab5a9232a9099a9d1d619', text: () => import('./assets-chunks/habitat_movilidad_vamosmed_mapa_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/dashboard/index.html': {size: 31484, hash: 'e1d727d7f1b6f00d16bd143a9ccef93ed2f52f6cfc3cd0ce87599dd5d17a4461', text: () => import('./assets-chunks/habitat_movilidad_dashboard_index_html.mjs').then(m => m.default)},
    'gobernanza/participacion/pqrs/dashboard/index.html': {size: 34049, hash: 'fdb04ae543489f0d307b4730fd0e00acdd78866f9b8e1c0f6b58e57de15540e2', text: () => import('./assets-chunks/gobernanza_participacion_pqrs_dashboard_index_html.mjs').then(m => m.default)},
    'whatsapp/index.html': {size: 31260, hash: '1c0324f2d5f77ecbfef362ae50a0dc5d71530717834e5630ea138561057fb237', text: () => import('./assets-chunks/whatsapp_index_html.mjs').then(m => m.default)},
    'calidad/turismo/map/index.html': {size: 31871, hash: 'eb83165a44e35463d6f325b016ae03f3615d749d280df6b6f89b589e22c75e5d', text: () => import('./assets-chunks/calidad_turismo_map_index_html.mjs').then(m => m.default)},
    'calidad/turismo/dashboard/index.html': {size: 33183, hash: '107ff88696f52661e34d1eabf5dcfa5dd1bdec9eb509ca427fe5d762bbbf6c95', text: () => import('./assets-chunks/calidad_turismo_dashboard_index_html.mjs').then(m => m.default)},
    'mapas/reportes/index.html': {size: 32075, hash: 'af56237f734de3f5f6986a761fdb409aef7a638cc704cd7de5fdad71bed2d1e3', text: () => import('./assets-chunks/mapas_reportes_index_html.mjs').then(m => m.default)},
    'en-construccion/index.html': {size: 26518, hash: '5cf2ad3b76aea0e770fc3d8e9287887c1896a2322821e570dad43f69ca09b7d0', text: () => import('./assets-chunks/en-construccion_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/ruido/mapa/index.html': {size: 47994, hash: '7f1ee36dd455efc57641c873ce32c46f3ddad54a95c490db422110bbffd3eef9', text: () => import('./assets-chunks/ambiente_calidad_ruido_mapa_index_html.mjs').then(m => m.default)},
    'perfil/usuarios/index.html': {size: 64960, hash: 'ac9fb4cb6a13cb56b1e538fbe96d1ae7c0e2ca1a2ce7f60df9e2d3e3e13d81b1', text: () => import('./assets-chunks/perfil_usuarios_index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
