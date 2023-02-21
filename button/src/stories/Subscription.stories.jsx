import React from 'react'
import { Primary } from './Button.stories'
import { Large } from './Input.stories'

export default {
  title: 'Form/Subscription',
}

export const PrimarySubscription = () => (
  <>
    <Large />
    <Primary />
  </>
)