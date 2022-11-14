

import { Row, Col, Container } from 'react-bootstrap';

import PortfolioCard from './Portfolio-Card';

const Portfolio = () => {
	const portfolioWork = [
		{
			title: 'W.U.F.R.',
			img: 'https://static01.nyt.com/images/2016/04/18/us/18retropromo/18retropromo-superJumbo.jpg',
			description: 'A quick reference program to check your Dungeon and Dragons spells!',
			url: 'https://github.com/farrelldianni/Weave-User-Field-Reference',
		},
		{
			title: 'Book-Keepers-Den',
			img: 'http://img1.wsimg.com/isteam/ip/dfffb088-afde-4021-bff3-0f003dd8e316/Image.jpeg',
			description: 'A way to find any books you or the community may be interested in.',
			url: 'https://github.com/Koober97/Book-Keepers-Den',
		},
		{
			title: 'USS-Grimes',
			img: 'https://upload.wikimedia.org/wikipedia/commons/1/12/USS_Grimes_%28APA-172%29_underway_in_harbour%2C_circa_in_1944.jpg',
			description: 'Created to show never beforeseen pictures of the crew on the USS-Grimes and the journeys it took on.',
			url: 'https://pacific-hollows-15654.herokuapp.com/',
		},
	];

	const styles = {
		heading: {
			fontSize: '4rem',
			textAlign: 'center',
		},
	};

	return (
		<>
			<h2 style={styles.heading}>Portfolio</h2>
			<Container>
				<Row>
					{portfolioWork.map((item, index) => (
						<Col lg={4} key={index} className='d-flex mx-auto'>
							<PortfolioCard
								title={item.title}
								img={item.img}
								description={item.description}
								url={item.url}
							></PortfolioCard>
						</Col>
					))}
				</Row>
			</Container>
		</>
	);
};

export default Portfolio;