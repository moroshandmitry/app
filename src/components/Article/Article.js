import { Component } from 'react'
import './Article.scss'
import { Button } from 'reactstrap'

export class Article extends Component {
    state = {
        isOpen: true
    };

    render() {
        const { article } = this.props;
        const body = this.state.isOpen && <section className="articleBody">{article.text}</section>;

        return (
            <div className="Article">
                <h2>
                    {article.title}
                    <Button color="primary"
                            size="xs"
                            onClick={this.handleClick}
                    >
                        {this.state.isOpen ? 'close' : 'open'}
                    </Button>
                </h2>
                {body}
                <h3 className="ArticleDate">Creation date: {new Date(article.date).toDateString()}</h3>
            </div>
        );
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };
}