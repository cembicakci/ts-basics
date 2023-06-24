"use client"
import React, { useState } from "react"

type UserType = {
    sessionId: number,
    name: string
}

const stateExample = () => {

    const [userName, setUserName] = useState('')
    const [user, setUser] = useState<UserType | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value)
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setUser({
            name: userName,
            sessionId: Math.random()
        })
    }

    return (
        <div className="useStateExample">
            {
                user ? (`${user.name} logged in`) : (
                    <form>
                        <input type="text" placeholder="Username" onChange={handleChange} />
                        <button onClick={handleClick}>Login</button>
                    </form>
                )}
        </div>
    )
}

export default stateExample