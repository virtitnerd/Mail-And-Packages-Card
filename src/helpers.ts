import ICONS from 'virtual:icons';

/** Generic delivery icon, used when a carrier has no icon of its own. */
export const FALLBACK_ICON = ICONS['img/square_delivery.png'];

/** Inlined data URI for an icon path such as 'img/square_usps.png', or the generic icon if unknown. */
export function iconUrl(path: string): string {
  return ICONS[path] ?? FALLBACK_ICON;
}

/**
 * Per-mailbox counts exposed by the integration's "All mailboxes" summary sensors
 * in their `mailboxes` attribute ({ mailbox name: count }). Returns '' for any
 * other sensor so callers can append it to a tooltip unconditionally.
 */
export function mailboxBreakdown(entityState?: { attributes?: Record<string, unknown> }): string {
  const mailboxes = entityState?.attributes?.mailboxes;
  if (!mailboxes || typeof mailboxes !== 'object') return '';
  const parts = Object.entries(mailboxes as Record<string, unknown>).map(([name, count]) => `${name}: ${count}`);
  return parts.length > 1 ? `\n${parts.join('\n')}` : '';
}
