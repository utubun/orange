import React, { useState } from 'react';

import './pathwayGraphPage.css';
import Histogram from '../../../vis/2d/Plot/Histogram/Histogram';

export const PathwayGraphPage = ({ data, width, height, margin }) => {
  const [dataset, setData] = useState(data);

  return (
    <article>
      <section>
        <h2>Pathway Graph</h2>
        <button
          onClick={() =>
            setData(
              Array.from({ length: 100 }, () => Math.floor(Math.random() * 100))
            )
          }
        />
        <grid>
          <Histogram
            data={dataset}
            width={width}
            height={height}
            margin={margin}
          />
        </grid>
      </section>
    </article>
  );
};
