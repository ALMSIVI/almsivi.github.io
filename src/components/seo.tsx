import Head from 'next/head'
import { useTranslation } from 'react-i18next'
import config from '../config.json'

export default function SEO({ description = '', meta = [], title }) {
    const { t } = useTranslation()
    const metaDescription = description || config.description
    return (
        <Head>
            <title>{`${title} | ${t('title')}`}</title>
            <meta name="description" content={metaDescription} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:creator" content={config.author.name} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={metaDescription} />
            {...meta}
        </Head>
    )
}
