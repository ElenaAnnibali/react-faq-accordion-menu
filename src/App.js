/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Accordion from './components/Accordion';
import { accordionData } from './utils/content';

const cardStyles = css`
  display: flex;
  flex-direction: column;

  h1 {
    text-align: left;
  }

  .illustration-woman-online {
    width: 471px;
    height: 357px;
    position: absolute;
    left: -80px;
    top: 72px;
    z-index: 1;
  }

  .box {
    position: absolute;
    top: 222px;
    left: -100px;
    width: 166px;
    height: 146px;
    margin: 0;
    z-index: 2;
  }

  .card-container {
    position: absolute;
    background-color: #fff;
    width: 920px;
    height: 510px;
    border-radius: 18px;
  }

  .card-bg {
    background: url('images/bg-pattern-desktop.svg');
    /* background-size: cover; */
    background-repeat: no-repeat;
    position: absolute;
    bottom: 200px;
    width: 100%;
    height: 510px;
  }

  .accordion {
    width: 400px;
  }

  .questions {
    position: absolute;
    left: 474px;
    top: 72px;
  }
`;

function App() {
  return (
    <div className="App">
      <body css={cardStyles}>
        <div className="card-container">
          <img
            className="box"
            src="images/illustration-box-desktop.svg"
            alt="box"
          />
          <picture>
            <source />
            <img
              className="illustration-woman-online"
              src="images/illustration-woman-online-desktop.svg"
              alt="illustration of a woman lookiing at a big desktop"
            />
          </picture>
          {/* <div className="card-bg" /> */}
          <div className="questions">
            <h1>FAQ</h1>
            <div className="accordion">
              {accordionData.map(({ title, content }) => (
                <Accordion title={title} content={content} />
              ))}
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
