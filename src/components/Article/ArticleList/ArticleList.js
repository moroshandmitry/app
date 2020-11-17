import { Article } from '../Article';
import '../ArticleList/ArticleList.scss'

export const ArticleList = ({ articles }) => {
    const articleElements = articles.map(item => (
        <li key={item.id}>
            <Article article={item} />
        </li>
    ));
    return <ul className="ArticleListUL">{articleElements}</ul>;
};