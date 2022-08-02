import styled from "styled-components";

export const Banner = (): JSX.Element => {
	return (
		<Container>
			<h1>Banner</h1>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	border: 1px solid red;
	padding: 2rem 1rem;
`;