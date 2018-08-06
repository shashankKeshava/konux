import React, { PureComponent } from 'react';
import getContentContainerStyle from './getContentContainerStyle';
import getSVGDimensions from './getSVGDimensions';

class SVGWithMargin extends PureComponent {
    render() {
        const {
            children,
            contentContainerBackgroundRectClassName,
            contentContainerGroupClassName,
            height,
            margin,
            renderContentContainerBackground,
            width,
            ...rest
        } = this.props;
        return (
            <svg
                {...rest}
                {...getSVGDimensions({
                    height,
                    margin,
                    width,
                })}
            >
                <g
                    className={contentContainerGroupClassName}
                    style={getContentContainerStyle({ margin })}
                >
                    {!!contentContainerBackgroundRectClassName && (
                        <rect
                            className={contentContainerBackgroundRectClassName}
                            height={height}
                            width={width}
                            x={0}
                            y={0}
                        />
                    )}
                    {children}
                </g>
            </svg>
        );
    }
}

export default SVGWithMargin;
