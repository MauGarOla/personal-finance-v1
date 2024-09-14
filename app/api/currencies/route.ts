import pool from "@lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const res = await pool.query("SELECT * FROM currencies");
        return NextResponse.json(res.rows); 
    } catch (error) {
        console.error('Error fetching currencies:', error);
        return new NextResponse("Failed to fetch currencies", { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const { name, symbol } = await request.json(); 
        const res = await pool.query(
            "INSERT INTO currencies (name, symbol) VALUES ($1, $2) RETURNING *", [name, symbol]
        );
        return NextResponse.json({
            message: "Currency added successfully!",
            data: res.rows[0]
        });
    } catch (error) {
        console.error('Error adding currency:', error);
        return new NextResponse("Failed to add currency", { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { id } = await request.json();
        const res = await pool.query(
            "DELETE FROM currencies WHERE id = $1 RETURNING *", [id]
        );

        if (res.rowCount === 0) {
            return new NextResponse("Currency not found", { status: 404 });
        }

        return NextResponse.json({
            message: "Currency deleted successfully",
            data: res.rows[0] 
        });
    } catch (error) {
        console.error('Error deleting currency:', error);
        return new NextResponse("Failed to delete currency", { status: 500 });
    }
}
