import type { PageServerLoad } from './$types';

export const load = (async () => {
	const form = { data: { tags: { first: 1, second: 2 } as Record<string, number> } };
	return { form };
}) satisfies PageServerLoad;
