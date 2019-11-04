# react-native-multiple-choice-picker

A cross-platform (iOS / Android) multiple-choice component for React Native.


## Getting Started

### Installing

`npm i react-native-multiple-choice-picker`

Or

`yarn add npm i react-native-multiple-choice-picker`

### Basic Usage
```js
<MultipleChoice
  choices={['Football', 'Soccer']}/>
```
![example](https://i.ibb.co/3B9bzH3/Screen-Shot-2019-11-05-at-04-50-17.png)



```js
<MultipleChoice
  direction={'column'}
  choices={['Football', 'Badminton', 'Basketball', 'Tennis']}/>
```
![example](https://i.ibb.co/LCWQ5FZ/Screen-Shot-2019-11-05-at-05-35-51.png)


```js
<MultipleChoice
  renderCustomItem={() => {
    return <Text style={{ color: 'red', fontWeight: 'bold' }}>Basketball</Text>
  }}
  chosenColor={'red'}
  chosenTextColor={'black'}
  customIndex={0}
  direction={'column'}
  choices={['Football', 'Badminton', 'Basketball', 'Tennis']}/>
```
![example](https://i.ibb.co/MN79h4H/Screen-Shot-2019-11-05-at-05-55-33.png)

### Props

| Name                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Details                  |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `choices`                                 | Labels of multiple choice component                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | **required**<br>array: [] |
| `chosenIndex`                                         | Currently chosen index                                                                                                                                                            | number: 0  |
| `onPress`                                   | Event handler when clicking at a choice                                                                                                                                                                                                                                                                                                      | function: () => {}                   |
| `style`                                      | Style of container                                                                                                                                                                                                                                                                                                                                                                                                                                                               | object: {}                  |
| `direction`                                         | Multiple choice can be render in row or column direction                                                                                                                                                                                                                                                           | string: 'row' / 'column'                      |
| `chosenColor`                                       | Color of the chosen component                                                                                                                                                                                                                                    | string: '#e2641e'           |
| `chosenTextColor`                                         | Color of the chosen label                                                                                                                                                                                                                                                                  | string: '#e2641e'                   |
| `TouchableComponent`                                   | Custom choosing compoenent                                                                                                                                                                                                                                                                                                                                                                               | component: DefaultTouchableComponent                   |
| `outerRound`                                          | Dimension of outer round of the choosing component                                                                                                                                                                                                                                                               | number: 24                |
| `innerRound`                                | Demision of inner round of the choosing component                                                                                                                                                                                                                                                                                                                           | number: 16.8                   |
| `renderCustomItem`| Render custom label component                                                                                                                                                                                                                                                       | function: () => {}                  |
| `customIndex` | Index to render custom label component| number: -1                  |
