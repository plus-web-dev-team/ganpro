export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/cource-1_29b6a8ae.mjs').then(n => n.c);

export { page };
