## Random Selection Wheel

The react-random-selection-wheel package is a React frontend component where you can pass in an object containing images with corresponding results. The package will create a wheel populating it with wedges containing the images. After the wheel is finished spinning it will display the result.

[Demo Link](https://dmoisoff.com/Random_Selection_Wheel/)


**Overview**

Below basic setup of the component.

```js
import { SpinningWheel } from "react-random-selection-wheel";

const wheelOptions = {
  1: {
    image: "./foo.jpg",
    result: "./foo.jpg"
  }
  2: {
    image: "./bar.jpg",
    result: "./bar.jpg"
  }
}

displayResult(spinResult) {
  return <img src={`${spinResult}`} alt={"result"} />
}

React.render(
  <SpinningWheel
    sources={wheelOptions}
    displayResult={this.display.bind(this)}
  />
);
```

For the sources property either an object or a function can be passed in. Both the object or the return result of the function needs to formatted like the example below.

```js
const wheelOptions = {
  1: {
    image: "./foo.jpg",
    result: "./foo.jpg"
  }
  2: {
    image: "./bar.jpg",
    result: "./bar.jpg"
  }
}
```

When the wedges are being created to fill the wheel and the final result is being selected the component will reference these specific keys. **If the object is not formatted properly no wedges or result will be selected.**

The results are displayed by creating a function outside of the component and passing it in as a property. This lets the user choose how they want the result used. **If no display function is passed in the result will not be displayed.**

```js
display(spinResult) {
  return <img src={`${spinResult}`} alt={"result"} />;
}
```

Here is an example of another display function where the user wanted to pass a url to another component.

```js
displayStream(spinResult) {
  return <ReactPlayer url={`${spinResult}`} width={"inherit"} />;
}
```

Here are a list of properties that you can modify

**numberOfSources{number}** (default:10, max:100)  
This number is used to control the amount of wedges the wheel will display. The wheel will at least have 10 wedges on it, never less.

If you give the component an object containing more than the number of sources, it will only grab the first 10. If you give the component an object with less then the number of sources specified, the component will duplicate the items in the object until it has enough wedges to fill the wheel.

**rotations{number}** (default:8)  
This will control how many rotations are made before the wheel lands on the result. _The number of rotations can be effected by the property durationOfSpin_. If the number of rotations can not be completed in the time allowed specified in the durationOfSpin property. The wheel will abruptly stop and display the result.

**durationOfSpin{number}** (default:5)  
This controls how many seconds the wheel will spin for.

**fadeInTime{number}** (default:1)  
Controls how many seconds it will take for the result to be displayed after the wheel stops spinning.

**showWedges{boolean}** (default:true)  
Allows for the wedges to be hidden before the wheel is used for the first time.

**backgroundColor{css color value}** (default:orange)  
This property will change the color of the inner background of the wheel. This is also the color of what divides the wedges.

**outerRingColor{css color value}** (default:white)  
This property will change the color of the outer ring of the wheel, including the pointer.

**buttonColor{css color value}** (default:orange)  
This property will change the color of the spin button.

**buttonBorder{css color value}** (default:black)  
This property will change the color of the outer ring of the wheel, including the pointer.
