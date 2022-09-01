import styled from "styled-components";

export const Banner = (): JSX.Element => {
	return (
		<Container>
			<h1>This is my banner</h1>
		</Container>
	);
};

const Container = styled.div`
	border: 1px solid red;
	padding: 2rem 1rem;
`;