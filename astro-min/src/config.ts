export const SITE = {
    title: 'ETLBox',
    description: 'Your website description.',
    defaultLanguage: 'en',
}

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
    title: string
    description: string
    layout: string
    lang?: string
}

export const KNOWN_LANGUAGES = {
    English: 'en',
    German: 'de',
} as const

export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES)

export type Sidebar = Record<
    (typeof KNOWN_LANGUAGE_CODES)[number],
    Record<string, { text: string; link: string }[]>
>
export const SIDEBAR_DOCS: Sidebar = {
    en: {
        'Getting Started': [
            { text: 'Quickstart', link: 'en/getting-started/quick-start' },
            { text: 'Simple flow', link: 'en/getting-started/simple-flow' },
            { text: 'Working with types', link: 'en/getting-started/types' },
            { text: 'Linking components', link: 'en/getting-started/linking' },
            { text: 'Network execution', link: 'en/getting-started/execution' },
            {
                text: 'Component basics',
                link: 'en/getting-started/component-basics',
            },
        ],
        'Database connectors': [
            {
                text: 'Connection managers',
                link: 'en/db-connectors/connection-manager',
            },
            {
                text: 'Relational databases',
                link: 'en/db-connectors/relational-databases',
            },
            {
                text: 'Merging & syncing tables',
                link: 'en/db-connectors/merge',
            },
            { text: 'Mongo Db', link: 'en/db-connectors/mongo' },
            { text: 'Couchbase', link: 'en/db-connectors/couchbase' },
            { text: 'Redis', link: 'en/db-connectors/redis' },
            { text: 'Access', link: 'en/db-connectors/access' },
        ],
        'Stream connectors': [
            {
                text: 'Shared functionalities',
                link: 'en/stream-connectors/streaming',
            },
            { text: 'Csv', link: 'en/stream-connectors/csv' },
            { text: 'Excel', link: 'en/stream-connectors/excel' },
            { text: 'Json', link: 'en/stream-connectors/json' },
            { text: 'Xml', link: 'en/stream-connectors/xml' },
            { text: 'Text', link: 'en/stream-connectors/text' },
            { text: 'Parquet', link: 'en/stream-connectors/parquet' },
        ],
        'Other connectors': [
            { text: 'Custom code', link: 'en/other-connectors/custom' },
            { text: 'In-Memory data', link: 'en/other-connectors/memory' },
            {
                text: 'Concurrent In-Memory',
                link: 'en/other-connectors/concurrent-memory',
            },
            { text: 'Void destination', link: 'en/other-connectors/void' },
        ],
        'Transformations:': [
            { text: 'About transformations', link: 'en/transformations/about' },
            { text: 'Row transformation', link: 'en/transformations/row' },
            {
                text: 'Row multiplication',
                link: 'en/transformations/row-multi',
            },
            { text: 'Row duplication', link: 'en/transformations/row-dupli' },
            { text: 'Lookup', link: 'en/transformations/lookup' },
            {
                text: 'Multicast (Broadcast)',
                link: 'en/transformations/multicast',
            },
            { text: 'Merge join', link: 'en/transformations/merge-join' },
            {
                text: 'Filter transformation',
                link: 'en/transformations/filter',
            },
            { text: 'Column rename', link: 'en/transformations/column-rename' },
            { text: 'Distinct', link: 'en/transformations/distinct' },
            { text: 'Caching rows', link: 'en/transformations/cached-row' },
            {
                text: 'Xml schema validation',
                link: 'en/transformations/xml-schema',
            },
        ],
        'Blocking transformations:': [
            {
                text: 'Batch transformation',
                link: 'en/blocking-transformations/batch',
            },
            {
                text: 'Caching batches',
                link: 'en/blocking-transformations/cached-batch',
            },
            {
                text: 'Aggregation',
                link: 'en/blocking-transformations/aggregation',
            },
            {
                text: 'Cross join',
                link: 'en/blocking-transformations/cross-join',
            },
            {
                text: 'Block transformation',
                link: 'en/blocking-transformations/blocking',
            },
            { text: 'Sort', link: 'en/blocking-transformations/sort' },
        ],
        'Control flow & logging:': [
            { text: 'Overview', link: 'en/control-flow/about' },
            { text: 'Control flow tasks', link: 'en/control-flow/controlflow' },
            { text: 'Logging', link: 'en/control-flow/loggging' },
        ],
        'Entity framework:': [
            {
                text: 'Extending DbContext',
                link: 'en/entity-framework/ef-support',
            },
        ],
    },
    de: {
        Einführung: [{ text: 'Schnellstart', link: 'de/quick-start' }],
    },
}
