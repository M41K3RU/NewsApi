import React from "react";
import "./NewsCard.css";
import { Card, Image } from "semantic-ui-react";

const NewsCard = (props) => (
  <Card className="NewsCard">
    <Image src={props.urlToImage} />
    <Card.Content>
      <Card.Header>{props.title}</Card.Header>
      <Card.Meta>
        <span className="date">{props.publishedAt}</span>
      </Card.Meta>
      <Card.Description
        dangerouslySetInnerHTML={{ __html: props.description }}
      ></Card.Description>
    </Card.Content>
    <Card.Content extra textAlign="right">
      <p>Źródło: {props.source}</p>
      <a href={props.url} target="blank">
        Zobacz artykuł
      </a>
    </Card.Content>
  </Card>

  // {/* <div className="NewsCard">
  //   <img src={props.urlToImage} alt="" />

  //   <div className="NewsCard-content">
  //     <h2>{props.title}</h2>
  //     <p>{props.publishedAt}</p>
  //     <p dangerouslySetInnerHTML={{ __html: props.description }}></p>
  //     <div className="NewsCard-footer">
  //       <p>Źródło: {props.source}</p>
  //       <a href={props.url} target="blank">
  //         Zobacz artykuł
  //       </a>
  //     </div>
  //   </div>
  // </div> */}
);

export default NewsCard;
