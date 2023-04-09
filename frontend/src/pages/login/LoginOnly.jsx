import React from 'react'
import { useSelector } from 'react-redux'

export default function LoginOnly({ element }) {
    const {AdminLogin } = useSelector(state => state.allauth)

    return AdminLogin  ? element : "Unauthorized Access"
}