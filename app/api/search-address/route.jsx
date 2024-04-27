import { NextResponse } from "next/server";
import { uuid } from "uuidv4";
const BASE_URL = "https://api.mapbox.com/search/searchbox/v1/suggest";

export async function GET(request) {
    const { searchParams } = new URL(request.url);

    const sessionToken = uuid();

    const searchText = searchParams.get('q');

    const res = await fetch(BASE_URL + '?q=' + searchText + '&session_token=' + sessionToken
        + "&access_token=" + process.env.MAPBOX_ACCESS_TOKEN,
        {
            headers: {
                "Content-Type": "application/json"
            }
        })

    const searchResult = await res.json();
    return NextResponse.json(searchResult)
}
