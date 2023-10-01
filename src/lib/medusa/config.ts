import Medusa from '@medusajs/medusa-js';
import { QueryClient } from '@tanstack/svelte-query';
import { PUBLIC_MEDUSA_BACKEND_URL } from '$env/static/public';

// Defaults to standard port for Medusa server
let MEDUSA_BACKEND_URL = 'http://localhost:9000';

if (PUBLIC_MEDUSA_BACKEND_URL) {
	MEDUSA_BACKEND_URL = PUBLIC_MEDUSA_BACKEND_URL;
}

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			staleTime: 1000 * 60 * 60 * 24,
			retry: 1
		}
	}
});

const medusaClient = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 });

export { MEDUSA_BACKEND_URL, queryClient, medusaClient };
