import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import DefaultTouchableComponent from './DefaultTouchableComponent';

type Props = {
	style?: any,
	direction?: string,
	chosenColor?: string,
	TouchableComponent?: any,
	choices: any,
	chosenIndex?: number,
	chosenTextColor?: string,
	onPress?: any,
	innerRound?: number,
	outerRound?: number,
	renderCustomItem?: any,
	customIndex?: number
};

export default class MultipleChoice extends Component {
	props: Props;

	static defaultProps = {
		style: {},
		direction: 'row',
		chosenColor: '#e2641e',
		TouchableComponent: DefaultTouchableComponent,
		choices: [],
		chosenIndex: 0,
		chosenTextColor: '#e2641e',
		onPress: () => {},
		outerRound: 24,
		innerRound: 24 * 3.5 / 5,
		renderCustomItem: () => {
		},
		customIndex: -1
	};

	render() {
		const {
				style, direction, chosenColor, TouchableComponent, choices, chosenTextColor,
				onPress, chosenIndex, outerRound, renderCustomItem, customIndex
			} = this.props,
			innerRound = outerRound * 3.5 / 5,
			isColumnDirection = direction === 'column',
			columnStyle = {
				flexDirection: 'row',
				marginTop: 16
			},
			itemViewStyle = isColumnDirection ? columnStyle : styles.itemView;
		return (
			<View style={[styles.container, style, { flexDirection: direction }]}>
				{choices.map((item, index) => {
					const isChosen = chosenIndex === index,
						defaultTextColor = isChosen ? chosenTextColor : 'black',
						fontWeight = isChosen ? 'bold' : 'normal';
					return <View
						key={index}
						style={itemViewStyle}>
						<TouchableComponent
							size={outerRound}
							innerChosenSize={innerRound}
							onPress={() => {
								onPress(index);
							}}
							isChosen={isChosen}
							innerChosenColor={chosenColor}/>
						{
							index === customIndex
								? this.renderCustomItem(renderCustomItem)
								: this.renderDefaultItem(index, onPress, defaultTextColor, fontWeight, item)
						}
					</View>;
				})}
			</View>
		);
	}

	renderCustomItem = (renderCustomItem) => {
		return <View style={{
			marginLeft: 8
		}}>
			{ renderCustomItem() }
		</View>;
	};

	renderDefaultItem = (index, onPress, color, fontWeight, item) => {
		return <TouchableOpacity onPress={() => {
			onPress(index);
		}}>
			<Text
				style={{
					color,
					marginLeft: 8,
					fontWeight
				}}>{item}</Text>
		</TouchableOpacity>;
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingHorizontal: 16
	},
	itemView: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	}
});
