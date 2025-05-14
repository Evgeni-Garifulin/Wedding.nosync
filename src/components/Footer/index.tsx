import React from "react"
import Logo from "../Logo";
import Icon from "../Icon";
import Button from "../Button";
import Text from "../Typography/Text";

import './footer.scss';

const Footer: React.FC = () => {
	return (
		<footer className="page-footer" id="footer">
			<div className="footer__body">
				<div className="page-footer__content">
					<Logo type="full" />

					<a
						className="page-footer__inner-link"
						href="https://www.linkedin.com/company/go-mokka/"
						aria-label="Linkedin"
						title="Linkedin"
					>
						<Icon name="linkedin-logo" size={24} />
						<Text size="p1" className="page-footer__inner-link-text">Linkedin</Text>
					</a>

					<Text className="page-footer__text" size="p1">2024. Made on&nbsp;Earth. &copy;&nbsp;Mokka</Text>
				</div>
			</div>
		</footer>
	);
}

export default Footer;