import React from 'react'

const Button = ({ text, isWithEmoji }) => {
    return (
        <button>{text}{isWithEmoji && '😎'}</button>
    )
}

export default Button