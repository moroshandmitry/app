import Article from './Article'

const ArticleList = ({ articles }) => {
    const articleElements = articles.map(item => <li key={item.id}><Article article={item} /></li>)
    return (
        <ul>
            {articleElements}
        </ul>
    )
}

export default ArticleList