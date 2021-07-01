import {useState} from "react";
import {useHistory} from "react-router-dom";
import { InputGroup, Button, Form } from 'bootstrap-4-react';
import http from '../plugins/Fetch'

function SearchBar({api, setSearchResults}) {

    const regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    let history = useHistory()

    const [searchText, setSearchText] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    function search() {
        if(regex.test(searchText)) return setErrorMessage('Invalid text, please use only letters and/or numbers.')
        if (searchText.length === 0) return setErrorMessage('Please type something in input field.')
        if (searchText.length > 40) return setErrorMessage('Your search text is too long (max 40 characters).')

        http.get(`${api.body}search?q=${searchText}&lang=en&max=9&token=${api.token}`)
            .then(data => {
                if(data.totalArticles === 0) return setErrorMessage('No results found.')

                setSearchResults(data.articles)

                history.push('/search-results')

                setSearchText('')
                setErrorMessage('')
        })

        http.get(`http://localhost:8000/keywords/${searchText}`)
            .then(data => {
                return data
            })
            .catch(e => alert(e))
    }

    return (
        <div className='search-bar'>
            <div className='errorMessage'>{errorMessage}</div>
            <InputGroup my='1' w='75' mx="auto">
                <Form.Input type="text" maxLength="40" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <InputGroup.Append>
                    <Button dark outline onClick={search}>Search</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
}

export default SearchBar;