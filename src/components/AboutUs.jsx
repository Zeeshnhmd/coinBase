import React from "react";
import styled from "styled-components";
import { FaChevronCircleRight } from "react-icons/fa";
import about from "../assets/about.png";
import Button from "./Button";

export default function AboutUs() {
	return (
		<Section className="flex a-center gap">
			<div className="content flex column gap">
				<div className="title-container flex column j-center a-center">
					<div className="subtitle subdue">
						<h3>About Us</h3>
					</div>
					<div className="title">
						<h2>Why would you choose Market Watchmen?</h2>
					</div>
				</div>
				<div className="flex gap">
					<div className="info flex column gap a-start j-center">
						<p className="subdue">Easy To Learn Platform -</p>
						<p className="subdue">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
							quo reiciendis facilis dicta? Temporibus quibusdam qui officiis
							ex, ea velit, minus consectetur corrupti ab dolor distinctio
							similique, ipsa facere ad! Lorem, ipsum dolor sit amet consectetur
							adipisicing elit. Illum quaerat fugit corporis natus labore
							voluptatum temporibus, aliquid itaque alias ratione.
						</p>
						<Button text="Start Earning" icon={<FaChevronCircleRight />} />
					</div>
					<div className="image">
						<img src={about} alt="about" className="half-width" />
					</div>
				</div>
			</div>
		</Section>
	);
}

const Section = styled.section`
	.subtitle > h3,
	.title > h2 {
		color: var(--primary);
	}
`;
