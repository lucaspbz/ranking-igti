import React from 'react';
import Position from './Position';
import Picture from './Picture';
import Info from './Info';
import Name from './Name';
import Percentage from './Percentage';
import Votes from './Votes';
import Popularity from './Popularity';

import css from './candidate.module.css';

export default function Candidate({
  previousPercentage,
  previousVote,
  candidate,
  position,
}) {
  const { id, name, votes, percentage, popularity } = candidate;
  const imageSource = `${id}.jpg`;
  return (
    <div className={css.flexRow}>
      <div>
        <Position>{position}</Position>
      </div>
      <div>
        <Picture imageSource={imageSource} description={name}></Picture>
      </div>
      <div>
        {' '}
        <Info>
          <Name>{name}</Name>
          <Votes value={votes} previous={previousVote} />

          <Percentage value={percentage} previous={previousPercentage} />

          <Popularity value={popularity} />
        </Info>
      </div>
    </div>
  );
}
