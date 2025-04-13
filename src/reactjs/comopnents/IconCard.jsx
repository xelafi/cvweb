import React from 'react';
import FigmaIcon from '../../assets/StacksIcon/figma.svg';
import CssIcon from '../../assets/StacksIcon/css.svg';
import HtmlIcon from '../../assets/StacksIcon/html.svg';
import JestIcon from '../../assets/StacksIcon/jest.svg';
import JsIcon from '../../assets/StacksIcon/js.svg';
import NodeJsIcon from '../../assets/StacksIcon/nodejs.svg';
import ReactIcon from '../../assets/StacksIcon/react.svg';
import StorybookIcon from '../../assets/StacksIcon/storybook.svg';
import ViteIcon from '../../assets/StacksIcon/vite.svg';
import WebpackIcon from '../../assets/StacksIcon/webpack.svg';
import ReduxIcon from '../../assets/StacksIcon/redux.svg';

// Objet de correspondance
const iconMap = {
    figma: FigmaIcon,
    css: CssIcon,
    html: HtmlIcon,
    jest: JestIcon,
    js: JsIcon,
    nodejs: NodeJsIcon,
    react: ReactIcon,
    storybook: StorybookIcon,
    vite: ViteIcon,
    webpack: WebpackIcon,
    redux: ReduxIcon,
};

const IconCard = ({ iconType = null, href = null }) => {
    const iconSrc = iconType && iconMap[iconType];
    const className = `icon-card ${iconType ? `icon-card--${iconType}` : ''}`;
    const content = iconSrc && (
        <img
            className="icon-card--img"
            src={iconSrc}
            alt={`${iconType} icon`}
        />
    );

    if (href) {
        return (
            <a href={href} className={className} target="_blank" rel="noopener noreferrer">
                {content}
            </a>
        );
    }

    return (
        <div className={className}>
            {content}
        </div>
    );
};

export default IconCard;
