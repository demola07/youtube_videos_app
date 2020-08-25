import React, { Component } from 'react'

import SearchBar from './SearchBar'
import youtube from '../apis/youtube'

class App extends Component {
	onTermSubmit = async (term) => {
		const videos = await youtube.get('/search', {
			params: {
				q: term,
			},
		})
		console.log(videos)
	}

	render() {
		return (
			<div className="ui container">
				<SearchBar onTermSubmit={this.onTermSubmit} />
			</div>
		)
	}
}

export default App
