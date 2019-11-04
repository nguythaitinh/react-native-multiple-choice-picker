# react-native-multiple-choice-picker

A cross-platform (iOS / Android) multiple-choice component for React Native.

![example](https://i.ibb.co/3B9bzH3/Screen-Shot-2019-11-05-at-04-50-17.png)


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

### Props

| Name                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Details                  |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `choices`                                 | Labels of multiple choice component                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | **required**<br>array |
| `chosenIndex`                                         | Currently chosen index                                                                                                                                                            | number  |
| `onPress`                                   | Event handler when clicking at a choice                                                                                                                                                                                                                                                                                                      | function                   |
| `style`                                      | Style of container                                                                                                                                                                                                                                                                                                                                                                                                                                                               | object                  |
| `direction`                                         | Multiple choice can be render in row or column direction                                                                                                                                                                                                                                                           | string                      |
| `chosenColor`                                       | Color of the chosen component                                                                                                                                                                                                                                    | string           |
| `chosenTextColor`                                         | Color of the chosen label                                                                                                                                                                                                                                                                  | string                   |
| `TouchableComponent`                                   | Custom choosing compoenent                                                                                                                                                                                                                                                                                                                                                                               | component                   |
| `outerRound`                                          | Dimension of outer round of the choosing component                                                                                                                                                                                                                                                               | number                |
| `innerRound`                                | Demision of inner round of the choosing component                                                                                                                                                                                                                                                                                                                           | number                   |
| `renderCustomItem`| Render custom label component                                                                                                                                                                                                                                                       | function                  |
| `customIndex` | Index to render custom label component| number                  |


[![BrowserStack](https://i.imgur.com/cOdhMed.png)](https://www.browserstack.com/)

## License

react-native-picker-select is [MIT licensed](https://github.com/lawnstarter/react-native-picker-select/tree/master/LICENSE) and built with :heart: in Austin, TX by the team at [LawnStarter](https://lawnstarter.com)
