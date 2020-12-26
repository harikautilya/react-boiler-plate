import React, { FunctionComponent } from 'react';
import './Linear.css'

const MATCH_HEIGHT = -1, WRAP_HEIGHT = -2
const MATCH_WIDTH = -1, WRAP_WIDTH = -2

type LinearLayoutProps =  {
	vertical?:boolean,
	wrap?:boolean,
	height?:number,
	width?:number,
	gravity?:string
}

const LinearLayout: FunctionComponent<LinearLayoutProps> = ({wrap, vertical, width, height, gravity, children}) => {

	const classes = ['linear-container']
	var styles = {"height":"","width":""}

	if (vertical) {
		classes.push('vertical')
	} else {
		classes.push('horizontal')
	}

	if (wrap) {
		classes.push('wrap')
	} else {
		classes.push('nowrap')
	}

	if (height === MATCH_HEIGHT) {
		classes.push('match-height')
	}else if(height === WRAP_HEIGHT) {
		classes.push('wrap-height')
	}else{
		styles["height"] = {height} +"px"
	}

	if (width === MATCH_WIDTH) {
		classes.push('match-width')
	}else if(width === WRAP_WIDTH) {
		classes.push('wrap-height')
	}else{
		styles["width"] = {width} +"px"
	}

	if (gravity === 'center'){
		classes.push('container-center-horizontal')
		classes.push('container-center-vertical')	
	} else if (gravity === 'center_horizontal') {
		classes.push('container-center-horizontal')
	} else if (gravity === 'center_vertical') {
		classes.push('container-center-vertical')
	}

	return (
			<div className={classes.join(' ')} style={styles}>
				{children}
			</div>
		)
}
export { MATCH_HEIGHT, MATCH_WIDTH, WRAP_HEIGHT, WRAP_WIDTH }
export default LinearLayout

