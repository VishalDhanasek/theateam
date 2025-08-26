// "use server";

// import { sql } from "@vercel/postgres";

// export async  function  submitContactUs(name: string, email:string, message:string) {
//   try {
//     const { rows } = await sql`
//     INSERT INTO contact(name, email, message)
//     VALUES(${name}, ${email}, ${message});
//   `;
//   } catch (error: any) {
//     const lines = error.toString().split("\n");
//     const lastLine = lines[lines.length - 1].trim();
//     console.log("->> last", lastLine, "< --");
//   }
// }
"use server";

export async function submitContactUs(
  name: string,
  email: string,
  number: string,
  message: string
) {
  try {
    const payload = { name, email, number, message };
    console.log("📤 Sending to Google Sheets:", payload);
    const response = await fetch(process.env.GOOGLE_APPS_SCRIPT_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, number, message }),
    });
    console.log("response",response);

    if (!response.ok) throw new Error("Failed to send data to Google Sheets");

    const result = await response.json();
    console.log("✅ Google Sheets response:", result);

    return { success: true };
  } catch (error) {
    console.error("❌ Google Sheets error:", error);
    return { success: false, error };
  }
}
