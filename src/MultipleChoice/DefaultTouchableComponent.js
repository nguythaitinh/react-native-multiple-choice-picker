import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';

type Props = {
	isChosen?: boolean,
	size?: number,
	borderColor?: string,
	style?: any,
	innerChosenSize?: number,
	innerChosenColor?: string,
	onPress?: any
};

export default class DefaultTouchableComponent extends Component {
	props: Props;

	static defaultProps = {
		isChosen: false,
		size: 24,
		borderColor: 'silver',
		style: {},
		innerChosenSize: 24 * 3.5 / 5,
		innerChosenColor: '#e2641e',
		onPress: {}
	};

	render() {
		const { size, isChosen, borderColor, style, innerChosenSize, innerChosenColor, onPress } = this.props;
		return (
			<TouchableOpacity
				onPress={onPress}
				style={[{
					height: size,
					width: size,
					borderRadius: size / 2,
					borderColor,
					borderWidth: 1,
					alignItems: 'center',
					justifyContent: 'center'
				}, style]}>
				<View style={{
					height: innerChosenSize,
					width: innerChosenSize,
					borderRadius: innerChosenSize / 2,
					backgroundColor: isChosen ? innerChosenColor : 'transparent'
				}}/>
			</TouchableOpacity>
		);
	}
}
