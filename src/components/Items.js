import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from './Loader'
import '../stiles/items.css'

export default function Items(props) {

  function nextbtn(){
    setPag(pag+1)
  }

  function prevbtn(){
    setPag(pag-1)
  }

  const [deta, setDeta] = useState([])
  const [lod, setLod] = useState(false)
  const [pag, setPag] = useState(null)

  useEffect(() => {
    setLod(true)
    const a = axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${props.catg}&pageSize=${props.pgsize}&page=${pag}&apiKey=4c31a973f75a4bf19306985970519e5c`)
    a.then((val) => {
      // console.log(val.data.totalResults)
      // console.log(val)
      setDeta(val.data.articles)
      setLod(false)
    })
  }, [props.pgsize, props.catg, pag])
  console.log(deta)
  return (
    <div>
      {lod ? <Loader /> : ""}
      {!lod &&
        <>
          <h1 className='text-center my-4'>World News</h1>
          {deta.map((elementValue, index) => (
            <div key={index} className='container border rounded border-2 my-2'>
              <span className="translate-middle badge rounded-pill bg-secondary border border-light">
                {elementValue.author}
              </span>
              <div>
                <h2>{elementValue.title}</h2>
                <p>{elementValue.description}</p>
              </div>
              <div className='text-center my-2'>
                <a className='btn btn-outline-dark mx-1' type='button' href={elementValue.url}>Visit Official Website</a>
              </div>
            </div>
          ))}
          <div className='container text-center'>
            <button className="btn btn-dark mx-2 my-1" onClick={prevbtn} disabled={pag === 1}>Prev</button>
            <button className="btn btn-dark mx-2 my-1" onClick={nextbtn} disabled={deta.length === 0}>Next</button>
          </div>
        </>
      }
    </div>
  );
};