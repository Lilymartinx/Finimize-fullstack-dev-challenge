import { Box, Heading } from '@chakra-ui/react';
import LineChart from './LineChart';

interface Props {
  xAxisData: string[];
  yAxisData: string[];
  title?: string;
  xLabel?: string;
  yLabel?: string;
}

const ChartBox: React.FC<Props> = ({ xAxisData, yAxisData, title, xLabel, yLabel }) => {
    return (
        <Box
        bg="white"
        borderRadius="xl"
        p={6}
        boxShadow="md"
        height="100%"  
        width="100%" 
        minW="400px"
        minH="320px" 
        display="flex"
        flexDirection="column"  
        overflow="hidden"
        >
        {title && (
            <Heading
            size="md"
            color="blue.700"
            mb={4}
            textAlign="center"
            textTransform="uppercase"
            >
            {title}
            </Heading>
        )}
            <Box flex="1" p={4} width="100%" height="100%" minW={0} minH={0} >
                <LineChart
                xAxisData={xAxisData}
                yAxisData={yAxisData}
                xLabel={xLabel}
                yLabel={yLabel}
                />
            </Box>
        </Box>
    );
};

export default ChartBox;