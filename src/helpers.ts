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
