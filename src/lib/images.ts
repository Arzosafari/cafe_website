/** Build an optimized Unsplash CDN URL from a photo ID. */
export function img(id: string, w = 800, q = 80): string {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}
