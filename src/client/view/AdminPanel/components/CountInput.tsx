import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react';

interface Props {
  value: number;
  onChange: (value: number) => void;
  max?: number;
}

const CountInput: React.FC<Props> = (props) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      value: props.value,
      min: 0,
      max: props.max,
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

  return (
    <HStack maxW="320px">
      <Button {...dec}>-</Button>
      <Input {...input} />
      <Button {...inc}>+</Button>
    </HStack>
  );
};

export default CountInput;
