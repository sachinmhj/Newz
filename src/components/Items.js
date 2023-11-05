import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from './Loader'
import { Link } from 'react-router-dom'
import '../stiles/items.css'

export default function Items(props) {

  function nextbtn(){
    setPag(temppag)
  }

  const [deta, setDeta] = useState([])
  const [pag, setPag] = useState(null)
  const [lod, setLod] = useState(false)
  const [temppag, setTemppage] = useState(null)

  useEffect(() => {
    setLod(true)
    // const a = axios.get(`https://newsapi.org/v2/top-headlines?country=us&${props.catg}&pageSize=${props.pgsize}&page=${pag}&apiKey=0594e9b138eb434c93fde98f1ff11a03`)
    const a = axios.get(`https://newsdata.io/api/1/news?category=${props.catg}&page=${pag}&apikey=pub_26835a7dc382c4247a42ad55f4ba3c9245ae9`)
    console.log(a)
    a.then((val) => {
      console.log(val.data.totalResults)
      console.log(val)
      setDeta(val.data.results)
      setLod(false)
      setTemppage(val.data.nextPage)
    })
  }, [props.catg, pag])
  // console.log(deta)
  return (
    <div>
      {lod ? <Loader /> : ""}
      {!lod &&
        <>
          <h1 className='text-center my-4'>World News</h1>
          {deta.map((elementValue, index) => (
            <div key={index} className='container border rounded border-2 my-2'>
              <span className="translate-middle badge rounded-pill bg-secondary border border-light">
                {elementValue.creator}
              </span>
              <div>
                <h2>{elementValue.title}</h2>
                <p>{elementValue.description}</p>
              </div>
              <div className='text-center my-2'>
                <Link className='btn btn-outline-dark mx-1' type='button' to="/details">Details</Link>
                <a className='btn btn-outline-dark mx-1' type='button' href={elementValue.url}>Visit Official Website</a>
              </div>
            </div>
          ))}
          <div className='container text-center'>
            {/* <button className="btn btn-dark mx-2 my-1" onClick={prevbtn} disabled={pag === 1}>Prev</button> */}
            <button className="btn btn-dark mx-2 my-1" onClick={nextbtn}>Next</button>
          </div>
        </>
      }
    </div>
  );
};
