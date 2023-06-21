"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const CountInput = (props) => {
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = (0, react_1.useNumberInput)({
        step: 1,
        value: props.value,
        min: 0,
        onChange: (valueString) => {
            const value = parseFloat(valueString);
            if (isNaN(value)) {
                return;
            }
            props.onChange(value);
        },
    });
    const inc = getIncrementButtonProps();
    const dec = getDecrementButtonProps();
    const input = getInputProps();
    return (<react_1.HStack maxW="320px">
      <react_1.Button {...dec}>-</react_1.Button>
      <react_1.Input {...input}/>
      <react_1.Button {...inc}>+</react_1.Button>
    </react_1.HStack>);
};
exports.default = CountInput;
