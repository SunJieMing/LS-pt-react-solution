import React from 'react';
import Tweet from './Tweet';
import tweets from './application-data';

export default (props) => {
  return (
    <ul className="tweet-stream">
      {tweets.map((tweet, i) => {
        return <Tweet key={i} tweetObject={tweet}/>;
      })}
    </ul>
  );
};
