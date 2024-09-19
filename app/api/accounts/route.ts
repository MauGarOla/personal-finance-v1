import pool from "@lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    const res = await pool.query(
        "SELECT (id, name, currency_id , balance) FROM accounts"
    )
    return NextResponse.json(res)
}

export async function POST(request: Request) {
    const { name, currency_id, balance } = await request.json()
    const res = await pool.query(
        "INSERT INTO accounts (name, currency_id, balance) VALUES ($1, $2, $3) RETURNING *", [ name, currency_id, balance ]
    )
    return NextResponse.json({ message: "Account addes successfully!"})
}

export async function DELETE(request: Request) {
    const { id } = await request.json()
    const res = await pool.query(
        "DELETE FROM accounts WHERE id = $1 RETURNING *", [ id ]
    )

    if (res.rowCount === 0 ) {
        return new NextResponse("Account not found", { status: 404 })
    }

    return NextResponse.json({ message: "Account deleted successfully" })
}