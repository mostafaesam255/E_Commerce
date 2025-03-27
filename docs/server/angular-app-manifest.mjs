
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E_Commerce/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/E_Commerce"
  },
  {
    "renderMode": 2,
    "route": "/E_Commerce/about"
  },
  {
    "renderMode": 2,
    "route": "/E_Commerce/account"
  },
  {
    "renderMode": 2,
    "route": "/E_Commerce/cart"
  },
  {
    "renderMode": 2,
    "route": "/E_Commerce/checkout"
  },
  {
    "renderMode": 2,
    "route": "/E_Commerce/contact"
  },
  {
    "renderMode": 2,
    "route": "/E_Commerce/login"
  },
  {
    "renderMode": 2,
    "route": "/E_Commerce/product"
  },
  {
    "renderMode": 2,
    "route": "/E_Commerce/sign-up"
  },
  {
    "renderMode": 2,
    "route": "/E_Commerce/wishlist"
  },
  {
    "renderMode": 2,
    "route": "/E_Commerce/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6126, hash: '786a08362f2bc125e8ee490388539a7302abcda7c371f60094e45b346fab4485', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1286, hash: '9ae01834fef0de9bdaa7a8b26460c08731672fcb766a4f7f9d1bd51b82c27b60', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 54425, hash: '8400ec71e6c60ef9da6009d348f04a2c38d8303377681c5a17545416c511f75d', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'account/index.html': {size: 48644, hash: '0fa2af637802a9b147d405112edd5771d416cfc00cf38fe39081fec08b96de24', text: () => import('./assets-chunks/account_index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 47990, hash: '93b2d4e557acb2df6e64e70c8cef6541e971a7fa1432027b14ef9f3db6c98293', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'checkout/index.html': {size: 51045, hash: '064c95a77ebc0117e9ff3203fcf815c99683f8178c8a5ad4e274fb0956b16829', text: () => import('./assets-chunks/checkout_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 46190, hash: '3683a8c9ca5063cf5bd9eff6ac835833774f2beb43de046edd1992db8342b644', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 41397, hash: 'a6fa7c7fde388dd37940e109fe305e7e7ccd2743dcc7b0df9bd8ca5e77baac69', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'index.html': {size: 101366, hash: '2ec304c47c3c4e034ddd0161e2033a966f98921d94961e87f31acd22bca59096', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'sign-up/index.html': {size: 42016, hash: '0e7492be75bb2861b824f1c01c2a30a430529399fbc764808d78948c15f0fa91', text: () => import('./assets-chunks/sign-up_index_html.mjs').then(m => m.default)},
    'product/index.html': {size: 57875, hash: '9d34e43520617fd90042e74145f4d683e4e58af53e1ca8572df3d8404944971c', text: () => import('./assets-chunks/product_index_html.mjs').then(m => m.default)},
    'wishlist/index.html': {size: 49634, hash: '18710561e535c223b0c7f58cbf0124ced7dae0d866f7640ade3f05ea6012f081', text: () => import('./assets-chunks/wishlist_index_html.mjs').then(m => m.default)},
    'styles-J7BN47AV.css': {size: 305312, hash: '1pwIKQx7/Nk', text: () => import('./assets-chunks/styles-J7BN47AV_css.mjs').then(m => m.default)}
  },
};
