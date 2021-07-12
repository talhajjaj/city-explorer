import React from 'react';
import Movies from './component/Movies';
class Movie extends React.Component {
    render() {
        return (
            <div>
<Movies title={item.title}
          image_url={item.image_url}
          average_votes={item.average_votes}
          />
            </div>
        )}}

        export default Movie;