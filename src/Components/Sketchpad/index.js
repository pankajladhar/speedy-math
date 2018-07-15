import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Sketchpad.css';

class Sketchpad extends Component {
    constructor(props) {
        super(props);
        this.clickX = [];
        this.clickY = [];
        this.clickDrag = [];
        this.paint = false;
        this.canvasRef = React.createRef();
        this.canvasRoot = React.createRef();
        this.redraw = this.redraw.bind(this);
        this.addClick = this.addClick.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.stopPainting = this.stopPainting.bind(this);
        this.clearCanvas = this.clearCanvas.bind(this);
    }

    componentDidMount() {
        this.canvasRoot = this.canvasRoot.current;
        this.ctx = this.canvasRef.current.getContext("2d");

    }

    handleMouseDown(e) {
        const mouseX = e.pageX - this.canvasRoot.offsetLeft;
        const mouseY = e.pageY - this.canvasRoot.offsetTop;
        this.paint = true;
        this.addClick(mouseX, mouseY);
        this.redraw();
    }

    handleMouseMove(e) {
        const mouseX = e.pageX - this.canvasRoot.offsetLeft;
        const mouseY = e.pageY - this.canvasRoot.offsetTop;
        if (this.paint) {
            this.addClick(mouseX, mouseY, true);
            this.redraw();
        }
    }

    stopPainting() {
        this.paint = false
    }

    addClick(x, y, dragging) {
        this.clickX.push(x);
        this.clickY.push(y);
        this.clickDrag.push(dragging);
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    redraw() {
        this.clearCanvas();
        this.ctx.strokeStyle = "#df4b26";
        this.ctx.lineJoin = "round";
        this.ctx.lineWidth = 2;

        for (let i = 0; i < this.clickX.length; i++) {
            this.ctx.beginPath();
            if (this.clickDrag[i] && i) {
                this.ctx.moveTo(this.clickX[i - 1], this.clickY[i - 1]);
            } else {
                this.ctx.moveTo(this.clickX[i] - 1, this.clickY[i]);
            }
            this.ctx.lineTo(this.clickX[i], this.clickY[i]);
            this.ctx.closePath();
            this.ctx.stroke();
        }
    }

    render() {
        return (
            <div className='SketchpadContainer'>
                <button onClick={this.clearCanvas}>Clear</button>
                <div className='Sketchpad'
                    ref={this.canvasRoot}
                    onMouseDown={this.handleMouseDown}
                    onMouseMove={this.handleMouseMove}
                    onMouseUp={this.stopPainting}
                    onMouseLeave={this.stopPainting}
                >
                    <canvas id="canvasInAPerfectWorld" ref={this.canvasRef}
                        width="490" height="220">
                    </canvas>
                </ div>
            </div>
        );
    }
}

Sketchpad.propTypes = {

};

export default Sketchpad;