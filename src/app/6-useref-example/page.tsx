'use client'
import React, { useEffect, useRef } from "react"

const refExample = () => {

    const inputRef = useRef<HTMLInputElement>(null)
    const usernameInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    const handleClick = () => {
        console.log('username is: ' + usernameInputRef.current?.value)
    }

    return (
        <div className="useRefExample">
            <input type="text" placeholder="focus here" ref={inputRef} />
            <input type="text" placeholder="username" ref={usernameInputRef} />
            <button onClick={handleClick}>Send</button>
        </div>
    )
}

export default refExample