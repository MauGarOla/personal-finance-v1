"use client"

import React, { useEffect, useState } from "react"

type Currency = {
    id: number
    name: string
    symbol: string
}

const AccountsEditor = () => {

    const [currencies, setCurrencies] = useState<Currency[]>([]);
    
    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const res = await fetch("/api/currencies");
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                const data: Currency[] = await res.json();
                setCurrencies(data);
            } catch (error) {
                console.error("Error fetching currencies:", error);
            }
        };
        fetchCurrencies();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        console.log("hi")
    }

    return (
        <form onSubmit={ handleSubmit }>
            <button type="submit">+</button>
            <input 
                type="text"
                required 
            />
            <select name="currency-select">
                { currencies.map((currency: Currency) => {
                    return (
                        <option key={currency.id} value={currency.id}>{ currency.symbol }</option>
                    )
                }) }
                <option value="4">JPY</option>
            </select>
        </form>
    )
}

export default AccountsEditor