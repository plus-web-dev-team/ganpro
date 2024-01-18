export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/about_e2c47abb.mjs').then(n => n.e);

export { page };
