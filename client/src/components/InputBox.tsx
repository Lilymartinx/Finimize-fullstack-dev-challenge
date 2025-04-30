// import React from 'react'
// import { Box, Heading, VStack } from '@chakra-ui/react'
// import InitialSavingsSlider from './InitialSavingsSlider'
// import MonthlyDepositSlider from './MonthlyDepositSlider'
// import InterestRateSlider from './InterestRateSlider'

// interface Props {
//   initial: number
//   onInitialChange: (val: number) => void
//   deposit: number
//   onDepositChange: (val: number) => void
//   rate: number
//   onRateChange: (val: number) => void
// }

// const InputBox: React.FC<Props> = ({
//   initial,
//   onInitialChange,
//   deposit,
//   onDepositChange,
//   rate,
//   onRateChange,
// }) => {
//   return (
//     <Box
//       bg="blue700"
//       p={6}
//       borderRadius="lg"
//       boxShadow="md"
//       width="100%"
//       maxW="600px"
//       mx="auto"
//     >
//       <Heading
//         size="md"
//         color="white"
//         mb={6}
//         textAlign="left"
//         textTransform="uppercase"
//       >
//         Set Your Input
//       </Heading>

//       <VStack spacing={6}>
//         <InitialSavingsSlider value={initial} onChange={onInitialChange} />
//         <MonthlyDepositSlider value={deposit} onChange={onDepositChange} />
//         <InterestRateSlider value={rate} onChange={onRateChange} />
//       </VStack>
//     </Box>
//   )
// }

// export default InputBox

import React from 'react'
import { Box, Heading, VStack } from '@chakra-ui/react'
import InitialSavingsSlider from './InitialSavingsSlider'
import MonthlyDepositSlider from './MonthlyDepositSlider'
import InterestRateSlider from './InterestRateSlider'

interface Props {
  initial: number
  onInitialChange: (val: number) => void
  deposit: number
  onDepositChange: (val: number) => void
  rate: number
  onRateChange: (val: number) => void
}

const InputBox: React.FC<Props> = ({
  initial,
  onInitialChange,
  deposit,
  onDepositChange,
  rate,
  onRateChange,
}) => {
    return (
        <Box
        bg="blue.700"
        p={6}
        borderRadius="lg"
        boxShadow="md"
        width="100%"
        minW="240px"
        height="100%"
        minH="320px"
        display="flex"
        flexDirection="column"
        >
            <Heading
                size="md"
                color="white"
                mb={6}
                textAlign="left"
                textTransform="uppercase"
            >
                Set Your Input
            </Heading>

            <VStack
                spacing={6}
                flex="1"
                justify="space-between"
                minH={0}
                width="100%"
            >
                <InitialSavingsSlider value={initial} onChange={onInitialChange} />
                <MonthlyDepositSlider value={deposit} onChange={onDepositChange} />
                <InterestRateSlider value={rate} onChange={onRateChange} />
            </VStack>
        </Box>
    )
}

export default InputBox
