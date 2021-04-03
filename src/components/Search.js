import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Search = props => {
  const [term, setTerm] = useState('Programming')
  const [results, setResults] = useState([])
  
  // // useEffect only on update
  // const isInitialMount = useRef(true);
  // useEffect(() => {
  //   if (isInitialMount.current) {
  //     isInitialMount.current = false;
  //   } else {
  //       console.log("Your useEffect code here to be run on update")
  //   }
  // });

  useEffect(() => {
    axios.get(`https://en.wikipedia.org/w/api.php`, {
      params: {
        action: 'query',
        list: 'search',
        format: 'json',
        origin: '*',
        srsearch: term
      }
    })
      .then((response) => {
        setResults(response.data.query.search)
      })
  }, [term])

  const renderResults = results.map(result => {
    return (
      <div className="item" key={result.pageid}>
        <div className="content">
            <div className="header">
              {result.title}
            </div>
            <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    )
  })
  return (
    <div>
      <div className="ui form">
        <div className="ui field">
          <label>Search</label>
          <input
            className="input"
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">
        {renderResults}
      </div>
    </div>
  )
}

export default Search;