
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
    'index.csr.html': {size: 23599, hash: 'a63b032f3f75aa028d424eff055e7b824ec94493067d9470151832627289de65', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17173, hash: '1190d5ba7498394737e4de04b042bacbc945a2ba6694a3cd45f84be3dffdcf07', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 28258, hash: '3d92db6413b1d4464ebc95e2a87599bbc521c2090b2174e3ea9fc987f560e0cd', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'index.html': {size: 28258, hash: '3d92db6413b1d4464ebc95e2a87599bbc521c2090b2174e3ea9fc987f560e0cd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'ambiente/residuos/camiones/mapa/index.html': {size: 36269, hash: '55a610eb133ae7bcc016d158e10b8248c8acdd9790264d4da8b26d9714d3fd54', text: () => import('./assets-chunks/ambiente_residuos_camiones_mapa_index_html.mjs').then(m => m.default)},
    'ambiente/residuos/camiones/dashboard/index.html': {size: 36079, hash: '062668654e3ae212ee9c586e6af0daad933906b428c544b5c4f2d01c8b558ebe', text: () => import('./assets-chunks/ambiente_residuos_camiones_dashboard_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/ruido/dashboard/index.html': {size: 35255, hash: 'ef894289a1d9bf1a9b7783a7a57ab25f9b62d5c6811689898e9401c2c69b5106', text: () => import('./assets-chunks/ambiente_calidad_ruido_dashboard_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/siata/dashboard/index.html': {size: 38012, hash: '5a7de948918bcff05f20c25811f8464c350264936ffb9e672353ea926ac7c4b6', text: () => import('./assets-chunks/ambiente_calidad_siata_dashboard_index_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 36913, hash: '6417036b68bb03e58c45fd521208648d262fc2d57a39463eaf08ba6db6743025', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/siata/mapa/index.html': {size: 36554, hash: '196f32f3333406f3a434531476190c727cb5388f207a9af88057bdff58f6e01e', text: () => import('./assets-chunks/ambiente_calidad_siata_mapa_index_html.mjs').then(m => m.default)},
    'economico/digital/wifi/dashboard/index.html': {size: 36948, hash: 'c733b60f6b491bbce43742ebec3db401c625e353f004c36b00502b1f171cd376', text: () => import('./assets-chunks/economico_digital_wifi_dashboard_index_html.mjs').then(m => m.default)},
    'reportes/index.html': {size: 36438, hash: '73f16d034fe01bd71025814c02392bf6be72b4c4202b7b4262be28ed58f94c5d', text: () => import('./assets-chunks/reportes_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/vamosmed/dashboard/index.html': {size: 36209, hash: 'ebd57211c62689f4f6e2e565cc69c10a78344c014e104d30d9db424e489d1fcb', text: () => import('./assets-chunks/habitat_movilidad_vamosmed_dashboard_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/vamosmed/mapa/index.html': {size: 36169, hash: 'ef4de3c0cecb51ebee3a511168ad08eecd06e4bac3249e3ebfccc3ff65177eb0', text: () => import('./assets-chunks/habitat_movilidad_vamosmed_mapa_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/dashboard/index.html': {size: 35891, hash: '20027b9c97b89ec6edc6a5ca85b5b4878585b4b5220acd44577f135ea516a37e', text: () => import('./assets-chunks/habitat_movilidad_dashboard_index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 38000, hash: '3f76bf988d8334c751528cebbc5336321a737b39adcc82b8002b7be5fc14cd51', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'gobernanza/participacion/pqrs/dashboard/index.html': {size: 38456, hash: '5f31e01d49dfb73de42565bc92023a814280a3276ab169a683b91d3fb05765fa', text: () => import('./assets-chunks/gobernanza_participacion_pqrs_dashboard_index_html.mjs').then(m => m.default)},
    'whatsapp/index.html': {size: 35667, hash: '5e7edc4207eaab903f0482556308f8921728d3f88a214efa25e7b7714b386dfb', text: () => import('./assets-chunks/whatsapp_index_html.mjs').then(m => m.default)},
    'calidad/turismo/dashboard/index.html': {size: 37590, hash: 'a085e938dd3eaf8268ff5ca3b2ef4c770cefda4ff5b693ab29b9d82036d3b1ec', text: () => import('./assets-chunks/calidad_turismo_dashboard_index_html.mjs').then(m => m.default)},
    'calidad/turismo/map/index.html': {size: 36278, hash: 'a6e46eb583b7eb75a9bd5763a06dcc76104b18ec9ff8fc36bc96017c41f29d0a', text: () => import('./assets-chunks/calidad_turismo_map_index_html.mjs').then(m => m.default)},
    'mapas/reportes/index.html': {size: 36482, hash: '0365c23ee6611295961e69a25e0b258ce5e3b83a15ed4b8fa1d892b11e3569a4', text: () => import('./assets-chunks/mapas_reportes_index_html.mjs').then(m => m.default)},
    'perfil/usuarios/index.html': {size: 75349, hash: 'a7869771811ed810d0e0c1dcc4226e8ff1c8e64a2d42af349da67834079c7445', text: () => import('./assets-chunks/perfil_usuarios_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/ruido/mapa/index.html': {size: 52293, hash: 'd7592c4662776bf1bce68f754ad4f9e9424e8bf70d46c30ca724d6d80e2c3578', text: () => import('./assets-chunks/ambiente_calidad_ruido_mapa_index_html.mjs').then(m => m.default)},
    'economico/digital/wifi/mapa/index.html': {size: 122024, hash: '25087d5fc0460662f7465596069d855e077aa07139b9061034f1b6ac4348753a', text: () => import('./assets-chunks/economico_digital_wifi_mapa_index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
