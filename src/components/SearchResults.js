import React from 'react';
import {Link} from "react-router-dom";
import ArticleCard from "./ArticleCard";

function SearchResults({searchResults, saveArticleData}) {

    return (
        <div>
            <div className='grid-card'>
                {searchResults.length !== 0 && searchResults.map((news, i) => (
                    <ArticleCard news={news} saveArticleData={saveArticleData} key={i}/>
                ))}
            </div>

            <Link to='/'>
                <p className='article-card-title back-menu'>Back to main...</p>
            </Link>
        </div>
    );
}

export default SearchResults;