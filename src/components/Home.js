import ArticleCard from "./ArticleCard";

function Home({news, saveArticleData}) {

    return (
        <div className='grid-card'>
            <div className='home-title'>Some News<br/>make people happy.</div>
            {news.length !== 0 && news.map((news, i) => (
                <ArticleCard news={news} saveArticleData={saveArticleData} key={i}/>
            ))}
        </div>
    );
}

export default Home;