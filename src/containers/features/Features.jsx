import React from 'react'
import './features.css'
import Feature from "../../components/feature/Feature"
const featureContent = [
  {title: "Improving end distrusts instantly",
  content:
    "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
},
  {title: "Become the tended active",
  content:
    "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
},
  {title: "Message or am nothing",
  content:
    "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",}
,
  {title: "Really boy law county",
  content:
    "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",}
]


const Features = () => {
  return (
    <div className="gpt3__features sec__padding" id='features'>
      <div className="gpt3__features_container">
        <div className="gpt3__features_container-future">
          <h2 className="gradient__text">
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h2>
          <p>Request Early Access to Get Started</p>
        </div>
        <div className="gpt3__features_container">
          {featureContent.map((feature, id) => (
            <Feature key={id} title={feature.title} content={feature.content} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features