import React from 'react';
class Movies extends React.Component {
    render() {
        return (
            <div>
<p> {this.props.title}</p>
<h2>{this.props.poster_path}</h2>
<p>{this.props.original_language} </p>

<p>{this.props.overview} </p>
<p> {this.props.vote_average}</p>
<p>  {this.props.vote_count}</p>
<p> {this.props.popularity} </p>
<p>{this.props.release_date} </p>


<section>


<img alt='image'src={this.props.Movie.poster_path} alt={this.props.Movie.title}/>
</section>



            </div>
        )}}

        export default Movies;