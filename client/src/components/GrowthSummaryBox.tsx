import { Box, Flex, Heading, Text, Input, VStack } from '@chakra-ui/react';

interface Props {
  total: number;
  gain: number;
  years: number;
  months: number;
  onYearsChange: (newYears: number) => void;
  onMonthsChange: (newMonths: number) => void;
}

const GrowthSummaryBox: React.FC<Props> = ({
    total,
    gain,
    years,
    months,
    onYearsChange,
    onMonthsChange,
}) => {
  return (
    <Box
        bg="blue.700"
        borderRadius="xl"
        p={6}
        color="white"
        w="100%"
        textAlign="center"
    >
        <VStack spacing={6}>
            <Flex justify="center" align="baseline" gap={4} wrap="wrap">
                <Heading fontSize="3xl" color="white">
                    £{total.toLocaleString()}
                </Heading>
                <Text fontSize="lg">total value</Text>
                <Text fontSize="lg" color="blue.100">
                    | £{gain.toLocaleString()} interest
                </Text>
            </Flex>

        <Flex justify="center" align="center" gap={2} wrap="wrap">
            <Text fontSize="lg">after</Text>
            <Input
                value={years}
                onChange={(e) => onYearsChange(Number(e.target.value))}
                width="60px"
                textAlign="center"
                fontWeight="bold"
                fontSize="lg"
                bg="white"
                color="black"
                borderRadius="md"
                type="number"
                max={50}
                min={0}
            />
            <Text fontSize="lg">years</Text>
                <Input
                value={months}
                onChange={(e) => onMonthsChange(Number(e.target.value))}
                width="60px"
                textAlign="center"
                fontWeight="bold"
                fontSize="lg"
                bg="white"
                color="black"
                borderRadius="md"
                type="number"
                min={0}
                max={11}
            />
            <Text fontSize="lg">months</Text>
        </Flex>
      </VStack>
    </Box>
  );
};

export default GrowthSummaryBox;
