
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
    'index.csr.html': {size: 23599, hash: 'd3673ed59c696d4f9798d48fb7d1da869f262e4317c7833576814a4eeffc68fd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17173, hash: 'c12348d74726f60e11907c06f8123c119213b474376fb5b9cf6416a0b4050cf4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 28258, hash: 'b1538c14262f32361a5f17a5e867449e61701a1dd373d8f028ca785f150d9177', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'ambiente/residuos/camiones/dashboard/index.html': {size: 31672, hash: '13e6f82d79728f9f5b4cb35afd74d646ae0d083a7a9d8920ddec61464e787c59', text: () => import('./assets-chunks/ambiente_residuos_camiones_dashboard_index_html.mjs').then(m => m.default)},
    'ambiente/residuos/camiones/mapa/index.html': {size: 31862, hash: '53be82aaae53cca2458a0a1a5c543d32a3aac89e8eb3cfb92b283755efcb3992', text: () => import('./assets-chunks/ambiente_residuos_camiones_mapa_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/ruido/dashboard/index.html': {size: 30848, hash: '93e11bb8c4407571baa68e2d7433f61e1d3627ca6184837739bd9f290c1b1757', text: () => import('./assets-chunks/ambiente_calidad_ruido_dashboard_index_html.mjs').then(m => m.default)},
    'index.html': {size: 28258, hash: 'b1538c14262f32361a5f17a5e867449e61701a1dd373d8f028ca785f150d9177', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'ambiente/calidad/siata/dashboard/index.html': {size: 33605, hash: 'ba39a7e0e75a0b808895f42b5c2654474957868e3ad537b590aa865a63699801', text: () => import('./assets-chunks/ambiente_calidad_siata_dashboard_index_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 32506, hash: 'be6a86b0ef77223d2b505c99aaeca5f02a225c4c2c46efa2f61d140430de0b90', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/siata/mapa/index.html': {size: 32147, hash: '770e5fe44af29e571bf441b3071c69b1bd61f6f68831d584aad47813d4800512', text: () => import('./assets-chunks/ambiente_calidad_siata_mapa_index_html.mjs').then(m => m.default)},
    'reportes/index.html': {size: 32031, hash: '4db38605ed4883f770b772294e9400722cb646c2264193732e579494be4a348c', text: () => import('./assets-chunks/reportes_index_html.mjs').then(m => m.default)},
    'economico/digital/wifi/dashboard/index.html': {size: 32541, hash: '12fae4bc132645bb776088c8047131bec304c61ac553906752ac5cac1b371a07', text: () => import('./assets-chunks/economico_digital_wifi_dashboard_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/vamosmed/dashboard/index.html': {size: 31802, hash: 'b198fa6eebf3d0d4f4aea64cd5938f3931e06a48fd7a8daffc5f08c622d6208f', text: () => import('./assets-chunks/habitat_movilidad_vamosmed_dashboard_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/vamosmed/mapa/index.html': {size: 31762, hash: 'a102553716aec6892d1c645104a8f89b5aea8f043fb69f52366bb8b46969ca54', text: () => import('./assets-chunks/habitat_movilidad_vamosmed_mapa_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/dashboard/index.html': {size: 31484, hash: '8f42291c5f2fbe90198f3fbc90f36b5a002ad40ae4a713f028f05eb9989abbe3', text: () => import('./assets-chunks/habitat_movilidad_dashboard_index_html.mjs').then(m => m.default)},
    'economico/digital/wifi/mapa/index.html': {size: 125451, hash: 'a77becc7c701e05d7b36d04c3062915a03ca661d6eab50c184d62f8e73bef3fc', text: () => import('./assets-chunks/economico_digital_wifi_mapa_index_html.mjs').then(m => m.default)},
    'gobernanza/participacion/pqrs/dashboard/index.html': {size: 34049, hash: '3798eab6c76adcc6a7209922e4082495abddde28b9676001bb67dea8cfb26a3c', text: () => import('./assets-chunks/gobernanza_participacion_pqrs_dashboard_index_html.mjs').then(m => m.default)},
    'whatsapp/index.html': {size: 31260, hash: 'a4a5d5db3fbe5bc88a2c53fc7e8119d78767c712940b20dedf1ee1629926f816', text: () => import('./assets-chunks/whatsapp_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/ruido/mapa/index.html': {size: 48035, hash: 'b2029612a875c31bef2c39fe02fee15b4c0f06cad067b5b58cb80b602598afe1', text: () => import('./assets-chunks/ambiente_calidad_ruido_mapa_index_html.mjs').then(m => m.default)},
    'calidad/turismo/map/index.html': {size: 31871, hash: '7e49b9ba77d33d3e11a49df26ef5c37f2ee9451df9826392cc07fe05439a400b', text: () => import('./assets-chunks/calidad_turismo_map_index_html.mjs').then(m => m.default)},
    'calidad/turismo/dashboard/index.html': {size: 33183, hash: '160e4adf212a1a45c534810bef25c9b7a44aba8f47e3d0d293470f86c4dfe47a', text: () => import('./assets-chunks/calidad_turismo_dashboard_index_html.mjs').then(m => m.default)},
    'mapas/reportes/index.html': {size: 32075, hash: '43da4d37b25fb854b35a2d86a66cdfe3020a537991e2b2c81c3e9f5d612e5190', text: () => import('./assets-chunks/mapas_reportes_index_html.mjs').then(m => m.default)},
    'en-construccion/index.html': {size: 26518, hash: 'b90541142b705500590468411fa03c5d40dee9645f05b720058a31b4a19ded03', text: () => import('./assets-chunks/en-construccion_index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 30263, hash: '3328a38af819de774b565b26e306aef79e57dec10ce0bf131739258d68093111', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'perfil/usuarios/index.html': {size: 76999, hash: 'e467ef7a381e8f4be6291929d019ee0b9d046816242b733f8d67e44a43c7ac31', text: () => import('./assets-chunks/perfil_usuarios_index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
