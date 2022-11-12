import { useEffect, useRef, useState } from 'react';
import { NavMenu, StyledA, Ul, MenuResponsive, Logo } from '../styles/HeaderStyled';

import { Sun, Moon } from 'phosphor-react';

export default function Header() {

    var ul = useRef(null);
    var menuResponsive = useRef(null);
    var li1 = useRef(null);
    var li2 = useRef(null);
    var li3 = useRef(null);
    var icon = useRef(null);

    const [dark, setDark] = useState(true);
    const [visible, setVisible] = useState(false);

    var btnMenu;
    var list;

    useEffect(() => {
        btnMenu = menuResponsive.current;
        btnMenu.addEventListener('click', EventListener);

        return () => {btnMenu.removeEventListener('click', EventListener)};
    });

    const EventListener = () => {
        var lis = [li1.current, li2.current, li3.current, icon.current];
        list = ul.current;

        if (list.classList.contains('active')) {
            list.classList.remove('active');
            btnMenu.classList.remove('active');
            icon.current.classList.remove('visible');
        }
        else {
            list.classList.add('active');
            btnMenu.classList.add('active');
        }
        AnimateLinks(lis);
    };

    const HandleSwitchTheme = () => {
        const BodyStyle = document.body.style;

        if (!dark) {
            BodyStyle.setProperty('--bgColor', '#181616');
            BodyStyle.setProperty('--bgColorLight', "#252121");
            BodyStyle.setProperty('--bgInverse', '#b3adad');
            BodyStyle.setProperty('--textColor', '#fff');
            BodyStyle.setProperty('--placeHolderColor', '#858080');
        }
        else {
            BodyStyle.setProperty('--bgColor', '#f3eaea');
            BodyStyle.setProperty('--bgColorLight', "#dbdee7");
            BodyStyle.setProperty('--bgInverse', '#2b2828');
            BodyStyle.setProperty('--textColor', '#000');
            BodyStyle.setProperty('--placeHolderColor', '#474247');
        }
        setDark(dark => !dark);
        setVisible(true);
    }

    const AnimateLinks = (links) => {
        links.forEach((link, index) => {
            if (!list.classList.contains('active')) {
                link.style.animation = `navLinkFadeOut 0.5s ease`;
            }
            else {
                link.style.animation = `navLinkFadeIn 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    };

    return (
        <header>
            <NavMenu className='main-bar'>
                <Logo>
                    <h1>LOGO</h1>
                </Logo>
                <MenuResponsive id="menu" ref={menuResponsive}>
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <div className="line-3"></div>
                </MenuResponsive>
                <Ul id="nav-list" ref={ul}>
                    <li ref={li1}><StyledA href="#home">Rei arthur</StyledA></li>
                    <li ref={li2}><StyledA href="#about">A carta</StyledA></li>
                    <li ref={li3}><StyledA href="#fairs">Sobrevivendo</StyledA></li>
                    {
                        dark
                        ?
                        <Sun ref={icon} className={visible ? 'Icon-header visible' : 'Icon-header'}  weight="duotone" size={26} color="white" onClick={HandleSwitchTheme}/>
                        :
                        <Moon ref={icon} className={visible ? 'Icon-header visible' : 'Icon-header'} weight="duotone" size={26} color="white" onClick={HandleSwitchTheme}/>
                    }
                </Ul>
            </NavMenu>
        </header>
    );
}