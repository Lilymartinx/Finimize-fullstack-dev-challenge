import React, { useState, useEffect } from 'react'
import './App.css'
import { ChakraProvider, extendTheme, Box, Flex } from '@chakra-ui/react'
import DefaultLayout from './components/layouts/Default'
import ChartBox from './components/ChartBox'
import InputBox from './components/InputBox'
import GrowthSummaryBox from './components/GrowthSummaryBox'
import theme from './theme'
import axios from 'axios';

const defaultTheme = extendTheme(theme)

function App() {
    const totalYears = 50; // hard code time period for graph
    const [initial, setInitial] = useState(1000)
    const [deposit, setDeposit] = useState(200)
    const [rate, setRate] = useState(5)
    const [yearsRequested, setYearsRequested] = useState(10)
    const [monthsRequested, setMonthsRequested] = useState(0)
    const [projectionData, setProjectionData] = useState({
        xAxis: [],
        yAxis: [],
    })
    const [totalGrowth, setTotalGrowth] = useState(0)
    const [totalGain, setTotalGain] = useState(0)


    return (
        <ChakraProvider theme={defaultTheme}>
            <DefaultLayout>
                <Box
                    bg="blue.100"
                    minH="100vh"
                    height="100vh"
                    overflowY="auto"
                    py={10}
                    px={6}
                >
                    <Flex
                    direction="column"
                    maxW="1200px"
                    mx="auto"
                    gap={8}
                    height="auto"
                    >
                        {/* Top Row: Inputs + Chart */}
                        <Flex
                            direction={{ base: 'column', md: 'row' }}
                            flex={1}
                            gap={6}
                            minH={0}
                            width="100%"
                        >
                            {/* Input box */}
                            <Box flex="1" maxW={{ base: '100%', md: '33%' }}>
                                <InputBox
                                initial={initial}
                                onInitialChange={setInitial}
                                deposit={deposit}
                                onDepositChange={setDeposit}
                                rate={rate}
                                onRateChange={setRate}
                                />
                            </Box>

                            {/* Line Graph */}
                            <Box flex="2" minW={0} height="auto">
                                <ChartBox
                                title="Savings Over Time"
                                // xAxisData={tempData.xAxis}
                                // yAxisData={tempData.yAxis}
                                xAxisData={projectionData.xAxis}
                                yAxisData={projectionData.yAxis}
                                xLabel="Years"
                                yLabel="Amount"
                                />
                            </Box>
                        </Flex>

                        {/* Bottom Row: Summary Box */}
                        <Box flexShrink={0} mt={8}>
                            <GrowthSummaryBox
                                total={totalGrowth}
                                gain={totalGain}
                                years={yearsRequested}
                                months={monthsRequested}
                                onYearsChange={setYearsRequested}
                                onMonthsChange={setMonthsRequested}
                            />
                        </Box>
                    </Flex>
                </Box>
            </DefaultLayout>
        </ChakraProvider>
    )
}

export default App
