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

const IconCard = ({ iconType = null }) => {
    const iconSrc = iconType && iconMap[iconType];

    return (
        <div className={`icon-card ${iconType ? `icon-card--${iconType}` : ''}`}>
            {iconSrc && (
                <img
                    className="icon-card--img"
                    src={iconSrc}
                    alt={`${iconType} icon`}
                />
            )}
        </div>
    );
};

export default IconCard;
