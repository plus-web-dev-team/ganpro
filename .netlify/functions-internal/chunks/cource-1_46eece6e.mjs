export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/cource-1_2e74e371.mjs').then(n => n.c);

export { page };
