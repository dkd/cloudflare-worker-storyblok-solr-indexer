import { createHmac } from 'node:crypto'
import StoryblokSolrIndexer from 'storyblok-solr-indexer'


export default {
	async fetch(request, env, ctx) {
		let statusCode = 200
		const body = await request.clone().text();
		const signature = request.headers.get('webhook-signature');
		const webhookSecret = env.STORYBLOK_WEBHOOK_SECRET;
		let bodyHmac = createHmac('sha1', webhookSecret)
			.update(body)
			.digest('hex');

		if (bodyHmac === signature && request.method.toUpperCase() === "POST") {
			const storyblockOptions = {
				accessToken: env.STORYBLOK_ACCESS_TOKEN,
				options: {
					starts_with: '',
					'filter_query[component][in]': 'article,page',
					per_page: 100,
					page: 1,
					version: 'published'
				}
			}
			const solrOptions = {
				host: env.SOLR_HOST,
				port: env.SOLR_PORT,
				path: env.SOLR_PATH,
				user: env.SOLR_USER,
				pass: env.SOLR_PASS,
				core: env.SOLR_CORE,
			}
			const indexer = await new StoryblokSolrIndexer(storyblockOptions, solrOptions)

		} else {
			statusCode = 401
		}

		const response = await new Response(
			null,
			{
				headers: {
					"content-type": "application/json;charset=UTF-8",
				},
				status: statusCode

			}
		)

		return (response)
	}
};
