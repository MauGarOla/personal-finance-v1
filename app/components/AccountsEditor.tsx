"use client"

import React, { useEffect, useState } from "react"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
  

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
            
            <Select name="currency-select">
            <SelectTrigger className="w-[100px]">
                <SelectValue />
            </SelectTrigger>
                <SelectContent>
                    { currencies.map((currency: Currency) => {
                        return (
                            <SelectItem key={currency.id} value={currency.id}>{ currency.symbol }</SelectItem>
                        )
                    })}
                </SelectContent>
            </Select>
        </form>
    )
}

export default AccountsEditor