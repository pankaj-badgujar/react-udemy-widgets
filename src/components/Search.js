import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {

    const [results, setResults] = useState([]);
    const[term, setTerm] = useState('programming');
    const[debouncedTerm, setDebouncedTerm] = useState(term);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term); 
        }, 1000);

        return () => {
            clearTimeout(timerId);
        }
    }, [term]);

    useEffect(() => {
        const search = async () => {
            const response = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            });

            setResults(response.data.query.search);
        };
        if(debouncedTerm){
            search();
        }
    }, [debouncedTerm]);

   
    
    const renderedResults = results.map((result) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a 
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        className="ui button"
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        type={'text'} 
                        className='input'
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
};

export default Search;