import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

import { SendTransaction } from '../utils/send-transaction';

const TransactionForm = () => {
  const [senderName, setSenderName] = React.useState('');
  const handleSenderNameChange = (event) => setSenderName(event.target.value);
  const [recipientAddr, setRecipientAddr] = React.useState('');
  const handleRecipientAddrChange = (event) =>
    setRecipientAddr(event.target.value);
  const [sendValue, setSendValue] = React.useState('0.001');
  const handleSendValueChange = (event) => setSendValue(event.target.value);

  return (
    <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
      <Heading
        fontSize={{
          base: '4xl',
          md: '5xl',
        }}
      >
        Create Transaction
      </Heading>

      <Stack
        spacing={{ base: 4, md: 8, lg: 20 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Box
          bg={useColorModeValue('white', 'gray.700')}
          borderRadius="lg"
          p={8}
          color={useColorModeValue('gray.700', 'whiteAlpha.900')}
          shadow="base"
        >
          <VStack spacing={5}>
            <FormControl>
              <FormLabel>Sender Name (optional)</FormLabel>

              <InputGroup>
                <InputLeftElement />
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={senderName}
                  onChange={handleSenderNameChange}
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Recipient Wallet Address</FormLabel>

              <InputGroup>
                <InputLeftElement />
                <Input
                  type="text"
                  name="recipient-addr"
                  placeholder="Recipient Address"
                  value={recipientAddr}
                  onChange={handleRecipientAddrChange}
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Recipient Wallet Address</FormLabel>

              <InputGroup>
                <InputLeftElement />
                <Input
                  type="text"
                  name="send-value"
                  placeholder="send ether value"
                  value={sendValue}
                  onChange={handleSendValueChange}
                />
              </InputGroup>
            </FormControl>

            <Button
              colorScheme="blue"
              bg="blue.400"
              color="white"
              _hover={{
                bg: 'blue.500',
              }}
              isFullWidth
              onClick={() => {
                SendTransaction(senderName, recipientAddr, sendValue);
              }}
            >
              Submit
            </Button>
          </VStack>
        </Box>
      </Stack>
    </VStack>
  );
};

export default TransactionForm;
