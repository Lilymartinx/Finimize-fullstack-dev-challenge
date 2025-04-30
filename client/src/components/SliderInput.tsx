import {
    Box,
    Flex,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Text,
    Input,
} from '@chakra-ui/react';
  
interface SliderInputProps {
    label: string;
    value: number;
    onChange: (value: number) => void;
    min: number;
    max: number;
    step?: number;
    suffix?: string;
}
  
const SliderInput: React.FC<SliderInputProps> = ({
    label,
    value,
    onChange,
    min,
    max,
    step = 1,
    suffix = '',
}) => {
    return (
        <Box bg="white"
            borderRadius="xl"
            p={4}
            boxShadow="md"
            w="100%"
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            minH="60px"
            flexShrink={1}
        >
            <Text
                fontWeight="bold"
                fontSize="md"
                mb={3}
                color="blue.700"
                textTransform="uppercase"
            >
            {label}
        </Text>
  
        <Flex align="center" gap={4}>
            <Slider
                value={value}
                onChange={onChange}
                min={min}
                max={max}
                step={step}
                flex="1"
            >
                <SliderTrack bg="blue.100" borderRadius="full">
                <SliderFilledTrack bg="blue.600" />
                </SliderTrack>
                <SliderThumb boxSize={4} />
            </Slider>
  
            <Input
                isReadOnly
                value={`${value}${suffix}`}
                width="70px"
                textAlign="center"
                fontWeight="bold"
                variant="unstyled"
                bg="white"
                color="black"
                borderRadius="md"
                px={2}
            />
            </Flex>
        </Box>
    );
  };
  
  export default SliderInput;
  