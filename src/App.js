import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import SearchBar from "./components/SearchBar";
import Home from "./components/Home";
import SearchResults from "./components/SearchResults";
import ScrollToTop from "./helpers/ScrollToTop";
import http from "./plugins/Fetch";



function App() {

    const api = {
        body: 'https://gnews.io/api/v4/',
        token: '26c8f162b752ecb78b1236401fab8377'
    }

    const [searchResults, setSearchResults] = useState([])
    const [news, setNews] = useState([])

    useEffect(() => {
        http.get(`${api.body}top-headlines?&lang=en&max=3&token=${api.token}`)
            .then(data => {
                setNews(data.articles)
            })
    }, [])

    function saveArticleData(news) {
        let article = {
            title: news.title,
            description: news.description,
            url: news.url,
            image: news.image,
            publishedAt: news.publishedAt
        }

        http.post('http://localhost:8000/articles', article)
            .then(data => {
                return data
            })
            .catch(e => alert(e))
    }

    return (
        <Router>
            <div className='main-container'>
                <div className='gray-box'> </div>
                <SearchBar api={api} setSearchResults={setSearchResults}/>
                <div className='grid-container'>
                    <ScrollToTop/>
                    <Switch>
                        <Route exact path='/'>
                            <Home news={news} saveArticleData={saveArticleData}/>
                        </Route>
                        <Route path='/search-results'>
                            <SearchResults searchResults={searchResults} saveArticleData={saveArticleData}/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App;
