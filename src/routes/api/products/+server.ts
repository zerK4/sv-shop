export const GET = async () => {
	return new Response('data', {
		headers: {
			'Content-Type': 'application/json'
		}
	});
};
