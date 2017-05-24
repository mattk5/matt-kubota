import React, { Component } from 'react';
import Footer from './footer';


import './about.css'

export default class About extends Component {
	render() {
		return (
			<div>
				<div className="about">
					<p className="about-title"><a name="about" id="about-land">About</a></p>
					<p className="about-body">Aloha! Risking it all by leaving Retail Management in Hawaii to pursue Computer Programming in New York has been an enriching and rewarding experience. As a Web Developer, I enjoy working with the Back-End but also dabble with the Front-End as well. </p>
				</div>
				<Footer />
			</div>
			)
	}
}