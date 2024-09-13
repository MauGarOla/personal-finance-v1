import { NextResponse } from "next/server"
import pool from "@/lib/db"

export async function POST(request: Request) {
    const { name, email, password } = await request.json()
    const res = await pool.query(
        "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *", [name, email, password]
    )
    return NextResponse.json(res.rows[0])
}