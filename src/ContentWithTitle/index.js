import React from 'react'

const ContentWithTitle = ({ text }) => {
    return (
        <div>
            <div>{text}</div>
            <div>
                children
            </div>
        </div>
    )
}

export default ContentWithTitle
