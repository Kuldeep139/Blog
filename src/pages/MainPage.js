import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import SmallCard from "../components/SmallCard";
import CardHome from "../components/CardHome";

const HomePage = () => {

  const[data,setData]=useState([])
  
  useEffect(() =>{
    fetch(`https://kuldeep-33.herokuapp.com/api/details`).then (res=>res.json()).then(data=> setData(data))

  },[])

  return (
    <div className="home_container">
      <div className="banner-image">
        <div className="main-image" >
          <Link className="link" to="/Cars">
            <h1>Cars </h1>
          </Link>
        </div>
        <div className="sub-images">
          <Link to="/technology">
            <img
              src="https://scitechdaily.com/images/Next-Generation-Solar-Panels-Illustration.jpg?ezimgfmt=ng%3Awebp%2Fngcb%2Frs%3Adevice%2Frscb-"
              alt="sub-img"
            />
          </Link>

          <Link to="/fitness">
            <img
              src="https://images.indianexpress.com/2022/06/running_200_pexels.jpg"
              alt="sub-img"
            />
          </Link>
        </div>
      </div>
      <div className="latest_news">
        <h1 className="title">The Latest</h1>
        <div className="row_container">
            { data.sort(()=> Math.random() - Math.random()).slice(0,4)
              .map((n) => (
                <CardHome 
                  key={n.id}
                  articleid={n.id}
                  imgUrl={n.Image}
                  title={n.title}
                  description={n.description.slice(0, 200)}
                  author={n.author}
                  category={n.category}
                  date={n.date}
                />
              ))}

        </div>
      </div>
      <div className="category_page">
        <div className="column_main">
          <h1 className="title head-title">Latest Article</h1>
          { data.sort(()=> Math.random() - Math.random()).slice(0,5)
            .map((n) => (
              <Card
                key={n.id}
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>
        <div className="sub_column">
          <h1 className="side_title title">Top Posts</h1>
          {data.sort(()=> Math.random() - Math.random()).slice(0,5)
            .map((n) => (
              <SmallCard
                key={n.id}
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title.slice(0, 25)}
                category={n.category}
                date={n.date}
                description={n.description}
              />
            ))}
            <div className="advertisements"><img src="https://www.parleagro.com/uploads/images/044427smoodh_top.jpg" alt="ads"/>
              <h4>Advertisements</h4>
          </div>
        </div>
      </div>
      <div className="latest_news">
        <h1 className="title">The Latest</h1>
        <div className="row_container">
          
            {data.sort(()=> Math.random() - Math.random()).slice(0,4)
              .map((n) => (
                <CardHome 
                  key={n.id}
                  articleid={n.id}
                  imgUrl={n.Image}
                  title={n.title}
                  description={n.description.slice(0, 200)}
                  date={n.date}
                  category={n.category}
                />
              ))}
          
        </div>
      </div>
    </div>
  );
};

export default HomePage;