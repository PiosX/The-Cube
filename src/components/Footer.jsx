import arrow from "../assets/footer-arr.svg";
import "./Footer.scss";

const Footer = () => {
	return (
		<div className="footer" data-scroll-section>
			<div className="footer__title">
				<div className="footer__title-text">Contact Me</div>
				<div className="footer__title-arrow">
					<img src={arrow} alt="arrow" />
				</div>
			</div>
			<div className="footer__info">
				<div className="footer__info-social">
					<div className="footer__info-social-inst">INSTAGRAM</div>
					<a
						href="https://www.instagram.com/_piosx/"
						className="footer__info-social-link"
					>
						_piosx
					</a>
				</div>
				<div className="footer__info-mail">
					<div className="footer__info-mail-text">Email</div>
					<a
						href="mailto:pios.pios@op.pl"
						className="footer__info-mail-link"
					>
						pios.pios@op.pl
					</a>
				</div>
				<div className="footer__info-desc">On the edge of a cube.</div>
			</div>
			<div className="footer__content"></div>
			<div className="footer__links">
				<div className="footer__links-cpy">© 2023</div>
				<div className="footer__links-follow">Follow Me</div>
				<div className="footer__links-more">
					<a
						href="https://pl.pinterest.com/daraszkiewicz25/"
						className="footer__links-more-link"
					>
						Pinterest
					</a>
					<a
						href="https://dribbble.com/PiosX"
						className="footer__links-more-link"
					>
						Dribble
					</a>
					<a
						href="https://twitter.com/_piosx"
						className="footer__links-more-link"
					>
						Twitter
					</a>
					<a
						href="https://www.instagram.com/_piosx/"
						className="footer__links-more-link"
					>
						Instagram
					</a>
				</div>
				<div className="footer__links-rights">ALL RIGHTS RESERVED</div>
			</div>
			<div className="footer__line"></div>
		</div>
	);
};

export default Footer;
