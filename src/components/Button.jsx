import React from 'react';
import styled from 'styled-components';

export default function Button({
	text,
	icon = false,
	subduedButton = false,
	change,
}) {
	const handleChange = () => {
		change(text);
	};
	return (
		<Div className="flex j-center a-center">
			{icon ? (
				<button
					onClick={handleChange}
					className={` flex j-center a-center gap-1 ${
						subduedButton ? 'subduedButton' : ''
					}`}
				>
					{text} {icon}
				</button>
			) : (
				<button
					onClick={handleChange}
					className={`${subduedButton ? 'subduedButton' : ''}`}
				>
					{text}
				</button>
			)}
		</Div>
	);
}
const Div = styled.div`
	button {
		padding: 0.7rem 1.3rem;
		background-color: var(--blue);
		color: var(--primary);
		border: none;
		border-radius: 0.5rem;
		font-size: 1.1rem;
		cursor: pointer;
	}
	.subduedButton {
		background-color: var(--subdue-button);
	}
`;
