/** @jsx h */
import { autocomplete } from '@algolia/autocomplete-js';
import { createQuerySuggestionsPlugin } from '@algolia/autocomplete-plugin-query-suggestions';
import { createLocalStorageRecentSearchesPlugin } from '@algolia/autocomplete-plugin-recent-searches';
import algoliasearch from 'algoliasearch/lite';
import { h, Fragment } from 'preact';

import '@algolia/autocomplete-theme-classic';

const appId = 'XT9SX840Q9';
const apiKey = '4917724eda03a7c19ad806d811338cae';
const searchClient = algoliasearch(appId, apiKey);

const recentSearchesPlugin = createLocalStorageRecentSearchesPlugin({
  key: 'qs-with-rs-example',
  limit: 3,
  transformSource({ source }) {
    return {
      ...source,
      templates: {
        ...source.templates,
        header({ state }) {
          if (state.query) {
            return null;
          }

          return (
            <Fragment>
              <span className="aa-SourceHeaderTitle">Your searches</span>
              <div className="aa-SourceHeaderLine" />
            </Fragment>
          );
        },
      },
    };
  },
});
const querySuggestionsPlugin = createQuerySuggestionsPlugin({
  searchClient,
  indexName: 'instant_search_demo_query_suggestions',
  getSearchParams() {
    return recentSearchesPlugin.data.getAlgoliaSearchParams({
      hitsPerPage: 5,
    });
  },
  transformSource({ source }) {
    return {
      ...source,
      templates: {
        ...source.templates,
        header({ state }) {
          if (state.query) {
            return null;
          }

          return (
            <Fragment>
              <span className="aa-SourceHeaderTitle">Popular searches</span>
              <div className="aa-SourceHeaderLine" />
            </Fragment>
          );
        },
      },
    };
  },
});

autocomplete({
  container: '#autocomplete',
  placeholder: 'Search',
  openOnFocus: true,
  plugins: [recentSearchesPlugin, querySuggestionsPlugin],
});
