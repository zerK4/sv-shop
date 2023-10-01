import { medusaClient } from '$lib/medusa/config';

export const load = async () => {
	const collections = medusaClient.collections.list().then((res) => {
		return res;
	});

	return collections;
};
