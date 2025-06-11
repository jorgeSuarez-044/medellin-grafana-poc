
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
    'index.csr.html': {size: 23599, hash: '1999499149308c10fe43dc7816e0fcb87d5efc70afcf15d9e9101dcdb5d9d107', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17173, hash: '0608ddd1ec0a2d57c5478ea31006d60431b695976333c9656b5119daaaa12f69', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 28114, hash: 'ae50ac9fce4474ded226811af9cd56bb7ffc7bf8c4691e21c7c6067a6120ecd6', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'ambiente/residuos/camiones/dashboard/index.html': {size: 32667, hash: 'c2350a6ae7f82b6b688db0c7db0160872bf6a4b1faf981d5e356b0ec05f1409c', text: () => import('./assets-chunks/ambiente_residuos_camiones_dashboard_index_html.mjs').then(m => m.default)},
    'ambiente/residuos/camiones/mapa/index.html': {size: 32857, hash: '50716a459b34a1b9cf9aca73b14931fac32b055cfc87773ca6fe7988a4e66098', text: () => import('./assets-chunks/ambiente_residuos_camiones_mapa_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/ruido/dashboard/index.html': {size: 31843, hash: '34d710667cdf0900fef733fed3c5947ccc205d2fa4d3459e66f409a766d4efa6', text: () => import('./assets-chunks/ambiente_calidad_ruido_dashboard_index_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 33501, hash: 'aaad4b77f38e3a463e5e7eaa9d59d7adbd894f0c76a33749cbdf2bb03ec4c3a0', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/siata/dashboard/index.html': {size: 34600, hash: '6fe5a0de89fc1d46659b4051851c9c9e056ea31d596705357362415e19f91780', text: () => import('./assets-chunks/ambiente_calidad_siata_dashboard_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/siata/mapa/index.html': {size: 33142, hash: '269e8865db5a15a35ade56b56408e914a001d72a4c1af225bbcca40a5260af0c', text: () => import('./assets-chunks/ambiente_calidad_siata_mapa_index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 31258, hash: 'f87c26d7f9f5ddcb0f05724e30d113bc300c8894dd67a52ce690216f6739b143', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'reportes/index.html': {size: 33026, hash: '83ed824f9aa85b2b7052b388cb590d3dab3f0448f40e2c050cc9fc2e0a09f01e', text: () => import('./assets-chunks/reportes_index_html.mjs').then(m => m.default)},
    'index.html': {size: 28114, hash: 'ae50ac9fce4474ded226811af9cd56bb7ffc7bf8c4691e21c7c6067a6120ecd6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'economico/digital/wifi/dashboard/index.html': {size: 33536, hash: '8b6bcb96393515824f44700f324a96c12c519e71034bb16fe4b7a950236a019b', text: () => import('./assets-chunks/economico_digital_wifi_dashboard_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/vamosmed/dashboard/index.html': {size: 32797, hash: 'fe60a335f8a81d5e59f9d41c3d94935669c96ab795a3a6d15bb420f72f1bc700', text: () => import('./assets-chunks/habitat_movilidad_vamosmed_dashboard_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/dashboard/index.html': {size: 32479, hash: 'c68dd094af4509cc4b2e300e69c2c55307a26e575f273d225594bbfdc6c9d2df', text: () => import('./assets-chunks/habitat_movilidad_dashboard_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/vamosmed/mapa/index.html': {size: 32757, hash: '794f33487b7c4833f28ea872c2a07c10da1391dd3b3c2bb72ed487c66a1e62e9', text: () => import('./assets-chunks/habitat_movilidad_vamosmed_mapa_index_html.mjs').then(m => m.default)},
    'gobernanza/participacion/pqrs/dashboard/index.html': {size: 35044, hash: '3010fbf3078566eec1fce68cad6e670022b047a4fdf1d02415ccc5462ba1ea19', text: () => import('./assets-chunks/gobernanza_participacion_pqrs_dashboard_index_html.mjs').then(m => m.default)},
    'whatsapp/index.html': {size: 32255, hash: '7b5de7f1c24818975b012f9cc717053b7059f059ea88c22d617a3528675128cc', text: () => import('./assets-chunks/whatsapp_index_html.mjs').then(m => m.default)},
    'calidad/turismo/dashboard/index.html': {size: 34178, hash: 'acb9cfae6ffd3e239008f799eb6cb3f266e8fe3fe88746b9440c80d8d2e5e000', text: () => import('./assets-chunks/calidad_turismo_dashboard_index_html.mjs').then(m => m.default)},
    'calidad/turismo/map/index.html': {size: 32866, hash: '69aa52bf00a76cf3648b6752f069b1ba899a58f843cb4508d1424d5213412cf2', text: () => import('./assets-chunks/calidad_turismo_map_index_html.mjs').then(m => m.default)},
    'mapas/reportes/index.html': {size: 33070, hash: 'ce2ca3c9fd78340cefa7c055e26ab771065161e08e0822e9e425691aac63c1ea', text: () => import('./assets-chunks/mapas_reportes_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/ruido/mapa/index.html': {size: 48989, hash: '7848d9322ecb53359f5afb2b036475245b01b6e61e7e4ea5213065ac73811e3a', text: () => import('./assets-chunks/ambiente_calidad_ruido_mapa_index_html.mjs').then(m => m.default)},
    'perfil/usuarios/index.html': {size: 72041, hash: '77d6157ec72fba549dde6cc4f865fad6807b789f9bbe148235cf91b3e45e4265', text: () => import('./assets-chunks/perfil_usuarios_index_html.mjs').then(m => m.default)},
    'economico/digital/wifi/mapa/index.html': {size: 118377, hash: '5de1e6e0e318d0494fd14095dc28ea4510af0249fcb9089f045666ba6353f23d', text: () => import('./assets-chunks/economico_digital_wifi_mapa_index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
