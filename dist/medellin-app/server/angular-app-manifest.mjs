
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
    'index.csr.html': {size: 23599, hash: '5462fbc2ab9daea44ee92700b4858a7be41347ca494b804ff8b09827a1b5ea90', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17173, hash: '5c04871233a7f393c6c0c5a8398b1ca3516a05ac3048dd92475003283e168a69', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 28258, hash: '15193b465a6bd2333e5ce22d96c933a7b74fc028694f7256df16c3e9b314137b', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'ambiente/residuos/camiones/dashboard/index.html': {size: 31672, hash: 'db4647f26194a15b850982a9018c182554264c406a0ac6ad2f618af32f4ee59c', text: () => import('./assets-chunks/ambiente_residuos_camiones_dashboard_index_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 32506, hash: 'e0fe72c399850568c173f6860721773baf2838bb4d5c8ea47529f21961ecbc91', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'ambiente/residuos/camiones/mapa/index.html': {size: 31862, hash: 'f648eecb2e5cbab322971ab48d93120409c2aadefede7cce7ade9495668eb989', text: () => import('./assets-chunks/ambiente_residuos_camiones_mapa_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/ruido/dashboard/index.html': {size: 30848, hash: '11c66092c6d080d357ee8668ee4f6d638b3b5ce384aba05ad4ebf8b415fb2826', text: () => import('./assets-chunks/ambiente_calidad_ruido_dashboard_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/siata/dashboard/index.html': {size: 33605, hash: 'fe01c705be56f61ec960623fa9cea0dfa7a8b190cacc7d642f6ebd47dd434bc8', text: () => import('./assets-chunks/ambiente_calidad_siata_dashboard_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/siata/mapa/index.html': {size: 32147, hash: '829784f69ad513c9e17bb84d26cf2dd48d3025916cba816701c63fff55198c2d', text: () => import('./assets-chunks/ambiente_calidad_siata_mapa_index_html.mjs').then(m => m.default)},
    'reportes/index.html': {size: 32031, hash: '41f7a259e2ca6bd987f072ad6a26b161eda5797f9c90987d427148725f661925', text: () => import('./assets-chunks/reportes_index_html.mjs').then(m => m.default)},
    'economico/digital/wifi/dashboard/index.html': {size: 32541, hash: 'b97c0c95c73cb035f6322168b953f8f2a53d2d60e8f69c32d4b0c3a913bd7656', text: () => import('./assets-chunks/economico_digital_wifi_dashboard_index_html.mjs').then(m => m.default)},
    'economico/digital/wifi/mapa/index.html': {size: 125451, hash: '7d52052ac10051f5fcf31bf82ef7c873fcacc5554ec0f0da1093caf0a48f0fb8', text: () => import('./assets-chunks/economico_digital_wifi_mapa_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/ruido/mapa/index.html': {size: 48035, hash: '7fe5422b2a0f7eab7a1c8624b5a16d6795f5c6a2ad93fb8e33cbdd54173fd6b9', text: () => import('./assets-chunks/ambiente_calidad_ruido_mapa_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/vamosmed/dashboard/index.html': {size: 31802, hash: 'ec5c399b85f3ebd88139a5efeb0194899f659b6f63e54a80cd0ea501849678a2', text: () => import('./assets-chunks/habitat_movilidad_vamosmed_dashboard_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/dashboard/index.html': {size: 31484, hash: '405d0797a7526aded613252eca5a5724ec7176194bdda9e737766dd26c511a1d', text: () => import('./assets-chunks/habitat_movilidad_dashboard_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/vamosmed/mapa/index.html': {size: 31762, hash: '15a4ed8e49e36121c5e2331e5f5a023a013f406c89a18968ec7ccf69ed65c5fe', text: () => import('./assets-chunks/habitat_movilidad_vamosmed_mapa_index_html.mjs').then(m => m.default)},
    'gobernanza/participacion/pqrs/dashboard/index.html': {size: 34049, hash: '9c89f95d69198786a093c731c77ce851a707565f40a6ee89b8489c3b4ce62870', text: () => import('./assets-chunks/gobernanza_participacion_pqrs_dashboard_index_html.mjs').then(m => m.default)},
    'index.html': {size: 28258, hash: '15193b465a6bd2333e5ce22d96c933a7b74fc028694f7256df16c3e9b314137b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'whatsapp/index.html': {size: 31260, hash: '4afbdb17ca14e5030217ec419cb0914621d3992c2c959c4998705bb2920666f8', text: () => import('./assets-chunks/whatsapp_index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 30263, hash: '4b736a3440fc88aeb14dd00f4f44ec63aafade4de630960e0ba50d18eba60109', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'calidad/turismo/dashboard/index.html': {size: 33183, hash: '7b35c552888ceb1f4c2a732ad934f95b7a086a245c01be0ff87fd24b97f5cea6', text: () => import('./assets-chunks/calidad_turismo_dashboard_index_html.mjs').then(m => m.default)},
    'calidad/turismo/map/index.html': {size: 31871, hash: '91aad645c746785d921c3712e0dc607f1e1c864b0e05a825fc22a10753026b8d', text: () => import('./assets-chunks/calidad_turismo_map_index_html.mjs').then(m => m.default)},
    'mapas/reportes/index.html': {size: 32075, hash: '097fc04aa02fa37b49580614e32f2f30c25c8f29c14701c08b4a69deb93b6241', text: () => import('./assets-chunks/mapas_reportes_index_html.mjs').then(m => m.default)},
    'en-construccion/index.html': {size: 26518, hash: 'e2097924fbe05b67ba9ef9830fb82ca7a2b3c225404026c6fced159b16f949c7', text: () => import('./assets-chunks/en-construccion_index_html.mjs').then(m => m.default)},
    'perfil/usuarios/index.html': {size: 68885, hash: '46a4a8ad2e26b7430be3b624ffb5b8634affc27e2161d1a8628ad4968845e030', text: () => import('./assets-chunks/perfil_usuarios_index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
