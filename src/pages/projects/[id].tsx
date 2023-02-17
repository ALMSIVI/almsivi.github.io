import { GetStaticPaths, GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import Layout from '../../components/layout'
import { getAllProjectIds, getProjectData } from '../../lib/mdUtils'

export default function Project({ data }) {
    return (
        <Layout current="/project">
            <h1>{data.title}</h1>
            <ReactMarkdown>{data.content}</ReactMarkdown>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = () => ({
    paths: getAllProjectIds(),
    fallback: false,
})

export const getStaticProps: GetStaticProps = ({ params }) => ({ props: { data: getProjectData(params.id) } })
