import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { ContentWithTitle } from '../src'

const component = 'ContentWithTitle'
storiesOf(component, module)
  .add(
      'default',
       () => (
    <ContentWithTitle text='fff'/>
  ))
  .add(
    'default yyy',
     () => (
  <ContentWithTitle text='uuu'/>
))
