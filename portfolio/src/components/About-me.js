import { Container } from 'react-bootstrap';
import pic from '../images/placeholder-profile.png'

const AboutMe = () => {
	const styles = {
		heading: {
			fontSize: '6rem',
		},
	};
	return (
		<>
			<Container>
				
				<img src={pic} class="w-25 mb-1 " />
				
				<p>Hello, thank you for coming to my page!</p>
				<h2 style={styles.heading} className='fw-bold'>
					Brian Koo
				</h2>
				<h3 className='fw-bold'>Full Stack Web Developer</h3>
				<p>
                Hi, I am Brian Koo and am currently looking into advancing into the world of coding.  I am a huge fan of gaming and technology, which is what draws me into the coding world.  <br />
				    I attended the UNC Chapel Hill Full Stack Coding Bootcamp and am currently awaiting graduation!
				</p>
			</Container>
		</>
	);
};

export default AboutMe;