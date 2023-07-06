import React from 'react';
import PropTypes from 'prop-types';
const Canvas = ({draw, height, width}) => {
    const canvas = React.useRef();
    React.useEffect(() => {
        const ctx = canvas.current.getContext ('2d');
        const canvasAct = document.querySelector('canvas')
        ctx.fillRect(0,0,width,height)
        ctx.fillstyle = 'white';
        ctx.drawImage(canvasAct,0,0,width,height)
        const image = new Image();
        image.src = "https://s3.amazonaws.com/aws.profantasy.com/annuals/2017/2017+ProFantasy+Village+Battle+Maps+Annual.jpg";
        image.onload = () => {
            ctx.drawImage(image,0,0,height,width);
        };
        draw(ctx);
    }, [draw,height,width]);
    return (
        <canvas ref={canvas} height={height} width={width} />
    );
};

Canvas.propTypes = {
    draw:
    PropTypes.func.isRequired,
    height:
    PropTypes.number.isRequired,
    width:
    PropTypes.number.isRequired,
};
export default Canvas;