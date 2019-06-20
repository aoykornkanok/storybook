import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Button } from '../src'

const component = 'Button'
storiesOf(component, module)
  .add(
      'defaults dfgsdfgsdgsf',
       () => (
    <Button text='hahahaa' isWithEmoji={true} />
  ))
  .add(
    'default yyysdfasdfase',
     () => (
  <Button text='WTF' isWithEmoji={false}/>
))
