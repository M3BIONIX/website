import 'server-only';

export type CalEvent = {
  username: string;
  slug: string;
  title: string;
  lengthInMinutes: number;
  bookingUrl: string;
};

const FALLBACK: CalEvent = {
  username: process.env.CAL_USERNAME || 'sanjay-mathew-5ak9ix',
  slug: '30min',
  title: '30 min meeting',
  lengthInMinutes: 30,
  bookingUrl: `https://cal.com/${process.env.CAL_USERNAME || 'sanjay-mathew-5ak9ix'}/30min`,
};

type CalApiEventType = {
  slug: string;
  title: string;
  lengthInMinutes: number;
  users: { username: string }[];
};

type CalApiResponse = {
  status: 'success' | 'error';
  data: CalApiEventType[];
};

/**
 * Server-side fetch of the user's cal.com event types via the v2 API.
 * Cached for 1 hour. Returns a fallback shape if the key is missing or the request fails.
 */
export async function getCalEvent(preferredSlug: string = '30min'): Promise<CalEvent> {
  if (!process.env.CAL_API_KEY) return FALLBACK;
  try {
    const res = await fetch('https://api.cal.com/v2/event-types', {
      headers: {
        Authorization: `Bearer ${process.env.CAL_API_KEY}`,
        'cal-api-version': '2024-06-14',
      },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return FALLBACK;
    const json = (await res.json()) as CalApiResponse;
    if (json.status !== 'success' || !json.data?.length) return FALLBACK;

    const publicEvents = json.data.filter((e) => e.slug !== 'secret');
    const preferred = publicEvents.find((e) => e.slug === preferredSlug) ?? publicEvents[0];
    if (!preferred) return FALLBACK;

    const username = preferred.users[0]?.username ?? FALLBACK.username;
    return {
      username,
      slug: preferred.slug,
      title: preferred.title,
      lengthInMinutes: preferred.lengthInMinutes,
      bookingUrl: `https://cal.com/${username}/${preferred.slug}`,
    };
  } catch {
    return FALLBACK;
  }
}
