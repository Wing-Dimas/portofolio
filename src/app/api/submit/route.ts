import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

type SheetForm = {
  name: string;
  email: string;
  message: string;
};

export const POST = async (req: Request, res: NextApiResponse) => {
  const data = (await req.json()) as SheetForm;
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "response!A2:C",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[data.name, data.email, data.message]],
      },
    });

    return new Response(JSON.stringify(response.data), { status: 201 });
  } catch (e: any) {
    return new Response(JSON.stringify({ message: e.message }), {
      status: e.code,
    });
  }
};
