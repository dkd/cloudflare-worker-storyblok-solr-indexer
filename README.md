# About
Cloudflare Worker Storyblok Solr Indexer

## Config 

Set the Env Vars in your `wrangler.toml`

```
[vars]
STORYBLOK_ACCESS_TOKEN=""
STORYBLOK_WEBHOOK_SECRET=""

SOLR_HOST="node-19.hosted-solr.com"
SOLR_PORT="443"
SOLR_PATH=""
SOLR_USER=""
SOLR_PASS=""
SOLR_CORE=""
```


## Usage

Run `npm run dev` in your terminal to start a development server

Run `npm run deploy` to publish your worker

Learn more at https://developers.cloudflare.com/workers/

## Indexer 

Find the out more about the Indexer here: 

https://github.com/dkd/storyblok-solr-indexer

## Hosted Solr

You can host your Solr core here:

https://hosted-solr.com/de/
