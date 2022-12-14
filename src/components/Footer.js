import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
	const styles = {
		background: {
			background: '#1d84b5',
		},
		color: {
			color: '#fff',
		},
		iconStyle: {
			fontSize: '1.5rem',
		},
	};

	return (
		<Navbar sticky='bottom' variant='light' style={styles.background}>
			<Container>
				<Nav className='m-auto'>
					<Nav.Link href='https://github.com/Koober97' target='_blank'>
						<i
							className='bi-github'
							style={{ ...styles.iconStyle, ...styles.color }}
						></i>
					</Nav.Link>
					<Nav.Link
						href='https://www.linkedin.com/in/brian-koo-9439b523b/'
						target='_blank'
					>
						<i
							className='bi bi-linkedin'
							style={{ ...styles.iconStyle, ...styles.color }}
						></i>
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Footer;