import React, { useMemo, useState, useEffect } from 'react';
import Header from '../shared/Header';
import axios from 'axios';

const Data = () => {
  const APILINK = 'https://jsonplaceholder.typicode.com/posts';

  const [data, setData] = useState([]);
  const posts = useMemo(() => data, [data]);

  const [direction, setDirection] = useState('asc'); 


  useEffect(() => {
    axios.get(APILINK)
    .then(resp => {
        setData(resp.data);
    });
  }, []);

  // const filter = event => {
  //   event.persist();
  //   const value = event.target.value;
    
  //   if (value.length === 0) {
  //     setData([...data]);
  //   } else if (isNaN(value)) {
  //     const regex = new RegExp(value);
  //     setData([...data.filter(datum => (regex.test(datum.title) || regex.test(datum.body)))]);
  //   } else {
  //     const num = Number(value);
  //     setData([...data.filter(datum => (Number(datum.userId) === num || Number(datum.id) === num))]);
  //   }
  // };

  const sortbyTitle = () => {
    const sorted = data.sort((a, b) => {
      if(direction === 'asc'){
        setDirection('dec');
        return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
      }
      else{
        setDirection('asc');
        return a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1;
      }
    });
      setData([...sorted]);
  }

  const sortbyId = () => {
    const sorted = data.sort((a, b) => {
      if(direction === 'asc'){
        setDirection('dec');
        return a.id - b.id;
      }
      else{
        setDirection('asc');
        return b.id - a.id;
      }
    });
      setData([...sorted]);
  }


  // const sort = event => {
  //   event.persist();
  //   const { name, type } = event.target.dataset;
    
  //   let sorted;
  //   if (type === "int")
  //     sorted = data.sort((a, b) => Number(a[name]) - Number(b[name]));
  //   else
  //     sorted = data.sort((a, b) => {
  //       if (a[name].toLowerCase() < b[name].toLowerCase()) return -1;
  //       if (a[name].toLowerCase() > b[name].toLowerCase()) return 1;
  //       return 0;
  //     });

  //   if (order) {
  //     sorted = sorted.reverse();
  //     setOrder(false);
  //   } else {
  //     setOrder(true);
  //   }

  //   setData([...sorted]);
  // };

  return (
    <>
      <div className="container-fluid">
        <Header title="Your Data"/>
      </div>

      <div className="container">
        <h2>Data Table</h2>
        <hr/>
        
        <div className="row my-3 align-items-center justify-content-end">
          <div className="col-auto">
            <label htmlFor="filter" className="col-form-label">Filter</label>
          </div>

          <div className="col-auto">
            <input type="text" name="filter" className="form-control" />
          </div>
        </div>
        <div className="row my-3 align-items-center justify-content-end">
          <button className="btn btn-primary" 
          type="button"
          onClick={sortbyTitle}>
          Sort by Title
          </button>
        </div>
        <div className="row my-3 align-items-center justify-content-end">
          <button className="btn btn-primary" 
          type="button"
          onClick={sortbyId}>
          Sort by Id
          </button>
        </div>

        <table className="table">
          <thead>
            <tr>
              <td>Id</td>
             <td>Title</td>
             <td>Body</td>
            </tr>
          </thead>

          <tbody>
             {posts.map((post, i) => (
               <tr key={i}>
                 <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
               </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
 
export default Data;