import pool from "@lib/db"
import { error } from "console"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        const response = await pool.query(
            "SELECT * FROM transactions"
        )
        return NextResponse.json(response)
    } catch (error) {
        console.log("Error fetching categories", error)
        return new NextResponse("Failed to fetch categories", { status: 500 })
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { account_id, category_id, description, date, amount } = body; 

        if (!account_id || !category_id || !description || !date || !amount) {
            return new NextResponse("All fields are required", { status: 400 });
        }

        const response = await pool.query(
            "INSERT INTO transactions (account_id, category_id, description, date, amount) VALUES ($1, $2, $3, $4, $5) RETURNING *", [ account_id, category_id, description, date, amount ]
        )

        return NextResponse.json(response.rows[0])

    } catch (error) {
        console.error("Error processing the request:", error);
        return new NextResponse("Failed to process the request", { status: 500 })
    }
}

export async function DELETE(request: Request) {
    try {
        const id = await request.json()
        if ( !id ) {
            return new NextResponse("ID is required", { status: 400 })
        }

        const response = await pool.query(
            "DELETE FROM transactions WHERE id = $1 RETURNING *", [ id ]
        )
        if (response.rowCount === 0 ) {
            return new NextResponse("Transaction not found", { status: 404 })
        }

        return NextResponse.json(response.rows[0])

    } catch (error) {
        console.log("Error parcing request body", error)
        return new NextResponse("Failed to read the request body", { status: 400 })
    }
}