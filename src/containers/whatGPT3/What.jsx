import React from 'react'
import './what.css'
import Feature from '../../components/feature/Feature'

const featuresContent = [
  {
    title: "What is GPT-3",
    content: `We so opinion friends me message as delight.
             Whole front do of plate heard oh ought. 
             His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous.
            At jointure ladyship an insisted so humanity he.
            Friendly bachelor entrance to on by.`,
  },
  {
    title: "Chatbots",
    content: `We so opinion friends me message as delight. Whole front do of plate heard oh ought.`,
  },
  {
    title: "Knowledgebase",
    content: `At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b`,
  },
  {
    title: "Education",
    content: `At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b`,
  },
];

const What = () => {
  return (
    <div className="gpt3__what sec__padding">
      <div className="gpt3__what_container">
        {
          <Feature
            title={featuresContent[0].title}
            content={featuresContent[0].content}
          />
        }
       
        <div className="gpt3__what_container-poss">
          <h2 className="gradient__text">
            The possibilities are beyond your imagination
          </h2>
          <p>
            <a href="#library">Explore The Library</a>
          </p>
        </div>
        <div className="gpt3__what_container-footer">
          <div className="gpt3__what_container-footer-field">
            <Feature
              title={featuresContent[1].title}
              content={featuresContent[1].content}
            />
          </div>
          <div className="gpt3__what_container-footer-field">
            <Feature
              title={featuresContent[2].title}
              content={featuresContent[2].content}
            />
          </div>
          <div className="gpt3__what_container-footer-field">
            <Feature
              title={featuresContent[3].title}
              content={featuresContent[3].content}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default What