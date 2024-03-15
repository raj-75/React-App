import React from "react";
import PropTypes from 'prop-types';

function Activity1({ condition, volume }) {
    if (condition) {
        const elements = [];
        for (let i = 0; i < volume; i++) {
            elements.push(
                <div key={i}>
                    This is rendered if the condition is {String(condition)}. Volume = {i}
                </div>
            );
        }
        return(
            <>
            <div>This is rendered if the condition is {String(condition)}. volumn =  {volume} </div>;

            <div>
                {elements.length > 0 ? elements : <div>This is rendered if the condition is {volume}.</div>}
             </div>
            </>
        ) 
      } else {
        return <div>This is rendered if the condition is {String(condition)}.</div>;
      }
  }

  Activity1.propTypes = {
    condition: PropTypes.bool,
    volume: PropTypes.number,
  };

  export default Activity1;

 