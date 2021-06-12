import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import {
    FooterContainer,
    FooterLink,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterWrap,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights
} from './footer.element'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/signin'>item1</FooterLink>
                            <FooterLink to='/signin'>item2</FooterLink>
                            <FooterLink to='/signin'>item3</FooterLink>
                            <FooterLink to='/signin'>item4</FooterLink>
                            <FooterLink to='/signin'>item5</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to='/signin'>item1</FooterLink>
                            <FooterLink to='/signin'>item2</FooterLink>
                            <FooterLink to='/signin'>item3</FooterLink>
                            <FooterLink to='/signin'>item4</FooterLink>
                            <FooterLink to='/signin'>item5</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to='/signin'>item1</FooterLink>
                            <FooterLink to='/signin'>item2</FooterLink>
                            <FooterLink to='/signin'>item3</FooterLink>
                            <FooterLink to='/signin'>item4</FooterLink>
                            <FooterLink to='/signin'>item5</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to='/signin'>item1</FooterLink>
                            <FooterLink to='/signin'>item2</FooterLink>
                            <FooterLink to='/signin'>item3</FooterLink>
                            <FooterLink to='/signin'>item4</FooterLink>
                            <FooterLink to='/signin'>item5</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            #01BF71
                        </SocialLogo>
                        <WebsiteRights>
                            copyright {new Date().getFullYear()} All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>

            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
