import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';

const API_KEY = 'AIzaSyDZXHSxdDuQO2r8t53DYmcwzkoS4yaZfoQ';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: '',
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('javascript'); //sets an initial search term so something will be on screen
		this.onSearchInputChange = this.onSearchInputChange.bind(this);
		this.onVideoSelect = this.onVideoSelect.bind(this);
	}

	//handles the input in the search bar
	onSearchInputChange(event) {
		this.setState({ term: event.target.value });
		this.videoSearch(event.target.value);
	}

	//clicking on side list of videos will change the selected video
	onVideoSelect(video) {
		this.setState({ selectedVideo: video});
	}

	//updates the video list with the current search term and calls youtube
	videoSearch(searchterm) {
		YTSearch({key: API_KEY, term: searchterm}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
		  });
		});
	}

	render() {

		return (
			<div className="container">
				<div className="row">
					<div className="col-lg-offset-1 col-lg-6 col-lg-offset-5">
		      	<h3 className="text-center">Nventi Video Coding Challenge</h3>
						<SearchBar
							onSearchInputChange={this.onSearchInputChange}
							term={this.state.term}
						/>
					</div>
				</div>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={this.onVideoSelect}
					videos={this.state.videos} />
			</div>
		);
	}
}

export default App;
