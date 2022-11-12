/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

const cardStyles = css`
  .accordion-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
    width: 348px;
  }

  .accordion-title:hover {
    color: #f47c57;
  }

  .accordion-title:target {
    font-family: 'KumbhSans-bold';
  }

  .accordion-title,
  .accordion-content {
    padding-bottom: 1rem;
  }

  .accordion-content {
    width: 351px;
  }

  hr {
    width: 351px;
    margin-left: 0;
    border: 1px solid #e7e7e9;
  }
`;

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div css={cardStyles} className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
      <hr />
    </div>
  );
};

export default Accordion;
