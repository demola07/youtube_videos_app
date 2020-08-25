import React, { Component } from 'react'

import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import youtube from '../apis/youtube'

class App extends Component {
	state = { videos: [], selectedVideo: null }

	onTermSubmit = async (term) => {
		const response = await youtube.get('/search', {
			params: {
				q: term,
			},
		})
		this.setState({ videos: response.data.items })
	}

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video })
	}

	render() {
		return (
			<div className="ui container">
				<SearchBar onTermSubmit={this.onTermSubmit} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					videos={this.state.videos}
					onVideoSelect={this.onVideoSelect}
				/>
			</div>
		)
	}
}

export default App
