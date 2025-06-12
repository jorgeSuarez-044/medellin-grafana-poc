
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
    'index.csr.html': {size: 23599, hash: 'ad097fb4dea2e9dc22c8f4ad0fb966a289b8a800f0bd11294cf625fbd51ab60c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17173, hash: '78e79807c779911078a395a3b92c3f7f58e34ae2a5be1fa2bbce16dbb6f709df', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 28258, hash: '46b57adbeba5ab3ec669485812f95ce59870032cb277da55ee1542c51141add5', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 32506, hash: '2d6d405a2bcac59ef2723a4f845610eee22476e4b4d17281ca571572d23927af', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'index.html': {size: 28258, hash: '46b57adbeba5ab3ec669485812f95ce59870032cb277da55ee1542c51141add5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'ambiente/residuos/camiones/dashboard/index.html': {size: 31672, hash: '4004df3d60d897dc2dea502e6cc321010f8b4f9474537b943db4ff99f9b82652', text: () => import('./assets-chunks/ambiente_residuos_camiones_dashboard_index_html.mjs').then(m => m.default)},
    'ambiente/residuos/camiones/mapa/index.html': {size: 31862, hash: '207c1f30aaf7396b8de047e8a5441a8b9efcd4dde982c88fbbe2a8fb372a5b1c', text: () => import('./assets-chunks/ambiente_residuos_camiones_mapa_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/ruido/dashboard/index.html': {size: 30848, hash: '6f7cca69095993019fef5a5c6607d6a3c8d2433b07bb7ca96e1c7c04e67c9da5', text: () => import('./assets-chunks/ambiente_calidad_ruido_dashboard_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/siata/dashboard/index.html': {size: 33605, hash: 'c83b1d159fe22d7926514291d22f0c01d7fca805a66e50f30b287be8599f7fdb', text: () => import('./assets-chunks/ambiente_calidad_siata_dashboard_index_html.mjs').then(m => m.default)},
    'reportes/index.html': {size: 32031, hash: '0564d2517359c49e4fc3d3cde3c441f60d4ad074c26d618c5d5722cc0d3e11e7', text: () => import('./assets-chunks/reportes_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/siata/mapa/index.html': {size: 32147, hash: 'edb5c88411039bc8e669bf379ea11fa24b2d1d760b7a059a8c75a65f76d01079', text: () => import('./assets-chunks/ambiente_calidad_siata_mapa_index_html.mjs').then(m => m.default)},
    'economico/digital/wifi/dashboard/index.html': {size: 32541, hash: 'a77ea263756b83a6f7787d5ab54fa926fccf26b77745c67bd7dbce433ceea1af', text: () => import('./assets-chunks/economico_digital_wifi_dashboard_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/vamosmed/dashboard/index.html': {size: 31802, hash: 'a69ee32737688ec51605c45e46df1304a27ea38b4c25eb07109588876fcd868c', text: () => import('./assets-chunks/habitat_movilidad_vamosmed_dashboard_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/vamosmed/mapa/index.html': {size: 31762, hash: 'ed24d33da58cc1a52fc74d8957555552dac4943387dc07c9ff1d08352b61b2ef', text: () => import('./assets-chunks/habitat_movilidad_vamosmed_mapa_index_html.mjs').then(m => m.default)},
    'habitat/movilidad/dashboard/index.html': {size: 31484, hash: '31e1e7d9bc1f8039a2ea7e614d057299d262385066827c2cfc2377f8b18fdce7', text: () => import('./assets-chunks/habitat_movilidad_dashboard_index_html.mjs').then(m => m.default)},
    'economico/digital/wifi/mapa/index.html': {size: 124891, hash: 'ed5b7195c919dc59f3bbf4ea1b561244502632cb5be1db566ab628e2f6624b33', text: () => import('./assets-chunks/economico_digital_wifi_mapa_index_html.mjs').then(m => m.default)},
    'gobernanza/participacion/pqrs/dashboard/index.html': {size: 34049, hash: 'f012d8dc4e00db83a48d5690c244fb918cb24d0edfd2301fa7aec8dca276c3e5', text: () => import('./assets-chunks/gobernanza_participacion_pqrs_dashboard_index_html.mjs').then(m => m.default)},
    'whatsapp/index.html': {size: 31260, hash: 'b1bd2fe6683702c152d928e1818e5d7e8ffb105d41e91a4ea5de7a6095e250c6', text: () => import('./assets-chunks/whatsapp_index_html.mjs').then(m => m.default)},
    'calidad/turismo/dashboard/index.html': {size: 33183, hash: '397f078a012655333cb30f10af1b93cc5ef8c0e6e5eca876f36204ac754694f3', text: () => import('./assets-chunks/calidad_turismo_dashboard_index_html.mjs').then(m => m.default)},
    'calidad/turismo/map/index.html': {size: 31871, hash: '09f45c27b08201106cda0cb511d928a5e8b2fe6f4bee2fc2214e752dd50330d8', text: () => import('./assets-chunks/calidad_turismo_map_index_html.mjs').then(m => m.default)},
    'mapas/reportes/index.html': {size: 32075, hash: '1104713d87c2eb7610839b3c11f9ac19f5bd16f32daafdb99825bcc43626f506', text: () => import('./assets-chunks/mapas_reportes_index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 30263, hash: '9cfc70ce84114ba4ff996b70402ca3f23cd813d79f1c6a0e51c4c8cb93e5b020', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'ambiente/calidad/ruido/mapa/index.html': {size: 47994, hash: '88682378f52895569ff3c380414b6c8c53afa8778d733ea43def2d071883b8f5', text: () => import('./assets-chunks/ambiente_calidad_ruido_mapa_index_html.mjs').then(m => m.default)},
    'perfil/usuarios/index.html': {size: 67594, hash: 'd82e1de154b4175f5fc4d339bb17061d964af7d6f0e0c3d3dcb4db366238e8aa', text: () => import('./assets-chunks/perfil_usuarios_index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
