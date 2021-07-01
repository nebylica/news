function ArticleCard({news, saveArticleData}) {

    let publishTime = news.publishedAt.replace(/[TZ]/g,' ')

    return (
        <div onClick={() => saveArticleData(news)}>
            <a href={news.url} target="_blank">
                <div className='article-card'>
                    <div className='card-image' style={{backgroundImage: `url(${news.image})`}}>
                        <div className='card-triangle'> </div>
                    </div>
                    <div className='card-text-box'>
                        <p className='article-card-title'>{news.title}</p>
                        <div>
                            <p className='article-card-time'>Published at:<br/>{publishTime}</p>
                            <p className='article-card-text'>{news.description}</p>
                        </div>
                    </div>
                    <div className='card-hover'>
                        <div className='card-hover-text'>Press to read all article</div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default ArticleCard;