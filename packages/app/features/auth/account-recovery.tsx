import { Input, Button, H3, YStack, Paragraph, ButtonText } from '@bookup/uikit'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'

const FillCodeBlock = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      code: '',
    },
  })

  const onSubmit = (data) => console.log(data)

  return (
    <YStack space="$2">
      <Paragraph ta="center">Enter the received code</Paragraph>
      <Controller
        control={control}
        rules={{
          minLength: 5,
          maxLength: 5,
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          //TODO rework to 5 inputs
          <Input
            textContentType="postalCode"
            keyboardType="number-pad"
            placeholder="code"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="code"
      />
      <ButtonText mt="$1" ta="center">
        Send code again
      </ButtonText>
      <Button onClick={() => handleSubmit(onSubmit)}>Accept</Button>
    </YStack>
  )
}

export function AccountRecoveryScreen() {
  const [isSent, setIsSent] = useState(false)
  const handleSend = () => {
    setIsSent(true)
  }

  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
        <H3 ta="center">Account recovery</H3>
      </YStack>

      <YStack w={'100%'} space="$4" maw={600}>
        <Input placeholder="Email" />
        {isSent ? (
          <FillCodeBlock />
        ) : (
          <>
            <Text ta="center">We will send recovery code to your email</Text>
            <Button onClick={handleSend}>Send</Button>
          </>
        )}
      </YStack>
    </YStack>
  )
}
