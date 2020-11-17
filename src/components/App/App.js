import { ArticleList } from '../Article/ArticleList/ArticleList';
import articles from '../../fixtures';
import './App.scss';
import { Button } from 'reactstrap'

export const App = () => {
    return (
        <div className="App">
            <h1>App name</h1>
            <ArticleList articles={articles} />
        </div>
    )
}