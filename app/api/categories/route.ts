import pool from "@lib/db";
import { error } from "console";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await pool.query("SELECT * FROM categories")
        return NextResponse.json(response)
    } catch (error) {
        console.log("Error fetching currencies:", error)
        return new NextResponse("Failed to fetch currencies", { status: 500})
    }
}

export async function POST(request: Request) {
    let name;
    try {
        const body = await request.json()
        name = body.name

        if (!name) {
            return new NextResponse("Name is required", { status: 400})
        }
    } catch (error) {
        console.log("Error parsing request body:", error)
        return new NextResponse("Failed to read the request body", {status: 500})
    }
    
    try {
        const response = await pool.query(
            "INSERT INTO categories (name) VALUES $1 RETURNING *", 
            [ name ]
        )
        return NextResponse.json(response.rows[0])
    } catch (error) {
        console.log("Error inserting category into the database:", error)
        return new NextResponse("Failed to insert category", { status: 500 });
    }
}

export async function DELETE(request: Request) {
    let id;
    try {
        const body = await request.json()
        id = body.id

        if ( !id ) {
            return new NextResponse("Id is required", { status: 400 })
        }
    } catch (error) {
        console.log("Error parsing request body:", error)
        return new NextResponse("Failed to read the request body", {status: 400})
    }

    try {
        const response = await pool.query(
            "DELETE FROM categories WHERE id = $1 RETURNING *",
            [ id ]
        )

        if (response.rowCount === 0) {
            return new NextResponse("Category not found", { status: 404})
        }

        return NextResponse.json(response.rows[0])
    } catch (error) {
        console.log("Error delating the category:", error)
        return new NextResponse("Failed to delete the category", { status: 500})
    }
}