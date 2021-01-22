import React from 'react'
// import { useGlobalContext } from '../../store/global'

const MediaWrapper = (props) => {
	// const { loading } = useGlobalContext()
	const Img = () => {
		if (props.onLoad) {
			const img = new Image()
			img.onload = props.onLoad
			img.src = props.src
		}
		return (
			<div 
				className={`
					image-wrapper__image
					${props.bgSize || 'contain'}
					${props.additionalClasses ? props.additionalClasses.join(' ') : ''}
				`}
				style={{ backgroundImage: 'url('+props.src+')'}}
				onClick={props.onClick}
				id={props.mediaIndex}
				// ref={ref}
			/>
		)
	}

	const Video = (p) => {
		return (
			<video
				id={props.mediaIndex}
				className={`image-wrapper__image video ${props.additionalClasses ? props.additionalClasses.join(' ') : ''}`}
				muted={props.muted}
				autoPlay={props.autoPlay}
				playsInline={props.playsInline}
				loop={props.loop}
				controls={props.controls}
				onClick={props.onClick}
				onEnded={props.onEnd}
			>
				<source src={props.src} />
			</video>
		)
	}

	return (
		<>
			{props.sixteenByNine &&
				<div className="image-wrapper sixteen-nine">
					{props.video ? <Video autoPlay={props.autoPlay} playsInline={props.playsInline} loop={props.loop} muted={props.muted} /> : <Img />}
				</div>
			}
			{props.fourByThree &&
				<div className="image-wrapper four-three">	
					{props.video ? <Video autoPlay={props.autoPlay} playsInline={props.playsInline} loop={props.loop} muted={props.muted} /> : <Img />}
				</div>
			}
			{props.square &&
				<div className="image-wrapper square">
					{props.video ? <Video autoPlay={props.autoPlay} playsInline={props.playsInline} loop={props.loop} muted={props.muted} /> : <Img />}
				</div>
			}
		</>
	)
}

export default MediaWrapper
