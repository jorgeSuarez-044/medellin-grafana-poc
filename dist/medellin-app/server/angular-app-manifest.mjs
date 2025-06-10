
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
    'index.csr.html': {size: 23614, hash: 'f6e23686f841cd593f3ce7a1ffc9c2c7732f870f30878629bd6ececd8005be1f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17188, hash: '3e9ddb9986faa3cc3461d60456f6648bf79a66c9e9fe1087d33247992b29bf7d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 28273, hash: '1b888dda01e241b05f77ad5fdec6df4be339a9764749ce7902d812fecdd971ff', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'index.html': {size: 28273, hash: '1b888dda01e241b05f77ad5fdec6df4be339a9764749ce7902d812fecdd971ff', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'ambiente/residuos/camiones/dashboard/index.html': {size: 36094, hash: '3145e514385255622808b2acee2237df1f302a10ed20e9f788f5abc0bb87f057', text: () => import('./assets-chunks/ambiente_residuos_camiones_dashboard_index_html.mjs').then(m => m.default)},
    'ambiente/residuos/camiones/mapa/index.html': {size: 36284, hash: '3431aaf2d2b70fb4c9a996bca9343c4a4a0d11d800cc21c8fff3fc1542659f71', text: () => import('./assets-chunks/ambiente_residuos_camiones_mapa_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/ruido/dashboard/index.html': {size: 35270, hash: 'eb4eebd0497be3f305023cd6e9bdaa4360fb5072016aefc65fc23410a23c7a06', text: () => import('./assets-chunks/ambiente_calidad_ruido_dashboard_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/siata/dashboard/index.html': {size: 38027, hash: 'efcbd678bfd365aaeab92560c9fb1d853f7766c24a6849dccbb188d1af793904', text: () => import('./assets-chunks/ambiente_calidad_siata_dashboard_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/siata/mapa/index.html': {size: 36569, hash: 'd382536f9dd17f7c5d7a9c50e6836ffb41eacb3ca5f0bd6db6118877ad4ea6cc', text: () => import('./assets-chunks/ambiente_calidad_siata_mapa_index_html.mjs').then(m => m.default)},
    'reportes/index.html': {size: 36453, hash: '5d00bee43db587a726701c63980d2581e6ad1aa6f2e74dfb856e50373fc48020', text: () => import('./assets-chunks/reportes_index_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 36928, hash: 'd9a1c8880555a0e9fc4cd45c64ce727ac71628d9c9b7ab80aece444b1a39f2e1', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 38015, hash: '26dc55fe30e619c874fe85d39614eb31e116bad137e7486fd02da7114f7b3866', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'economico/digital/wifi/dashboard/index.html': {size: 36963, hash: 'f6ae3e538b9ec63c524130d17c5f773c0b4e647d57df34cc3b0a1171b0dad920', text: () => import('./assets-chunks/economico_digital_wifi_dashboard_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/vamosmed/dashboard/index.html': {size: 36224, hash: '20b7876229cdd80a75ac0003a60b21011cd11ee94f25bb88187499df75951a18', text: () => import('./assets-chunks/habitat_movilidad_vamosmed_dashboard_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/vamosmed/mapa/index.html': {size: 36184, hash: '5ba050b5248afe0e257eeb3d400a97a43dc4e293925eeb0ac2dcae65e4a52f1c', text: () => import('./assets-chunks/habitat_movilidad_vamosmed_mapa_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/dashboard/index.html': {size: 35906, hash: '93cf34c07160e4ff6554d68e50f50b933f01c4563190206c3093338a55ece5b2', text: () => import('./assets-chunks/habitat_movilidad_dashboard_index_html.mjs').then(m => m.default)},
    'gobernanza/participacion/pqrs/dashboard/index.html': {size: 38471, hash: '3536c2e0acec69dfb507ebd93faad83d1b80fdd270cb441b51b61e47fc30c5c2', text: () => import('./assets-chunks/gobernanza_participacion_pqrs_dashboard_index_html.mjs').then(m => m.default)},
    'whatsapp/index.html': {size: 35682, hash: 'af957d84ea16d77e35c811b1e27e7d668472ed6db813a3a2bba2794ededd7c05', text: () => import('./assets-chunks/whatsapp_index_html.mjs').then(m => m.default)},
    'calidad/turismo/dashboard/index.html': {size: 37605, hash: '1b5d5ea051d3b8c2934c8cd0fa8e19d76975c31cb30f6f0de755a0e1d7a261b1', text: () => import('./assets-chunks/calidad_turismo_dashboard_index_html.mjs').then(m => m.default)},
    'calidad/turismo/map/index.html': {size: 36293, hash: 'bb802cf21f6bc4d65a941aeb2165ae6ef2eb617f29b785ce0d7be5c966551930', text: () => import('./assets-chunks/calidad_turismo_map_index_html.mjs').then(m => m.default)},
    'mapas/reportes/index.html': {size: 36497, hash: '2e135c5fd7f54fa7c0a4e9f4cb8dba874fe92ce92e6e4e929adce52543c5c57e', text: () => import('./assets-chunks/mapas_reportes_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/ruido/mapa/index.html': {size: 52308, hash: '713d1d3dd07c0796395abc28dbb9f4641d557b8472cd45bfe554acc4878a931a', text: () => import('./assets-chunks/ambiente_calidad_ruido_mapa_index_html.mjs').then(m => m.default)},
    'perfil/usuarios/index.html': {size: 75364, hash: '275ffbed1346687a802c0024fa55840ec4678c6a2d3e0a1243801aaa61d344de', text: () => import('./assets-chunks/perfil_usuarios_index_html.mjs').then(m => m.default)},
    'economico/digital/wifi/mapa/index.html': {size: 128562, hash: 'b7533bb5e14615827884cea5f6dc70ffa99533ce487e7559276e37d48545525c', text: () => import('./assets-chunks/economico_digital_wifi_mapa_index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
