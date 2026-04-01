export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { phone } = req.body || {};
  if (!phone || !/^\d{10}$/.test(phone)) {
    return res.status(400).json({ success: false, message: "Invalid phone number" });
  }

  const authkey = process.env.MSG91_AUTHKEY;
  const templateId = process.env.MSG91_TEMPLATE_ID || "";

  if (!authkey) {
    return res.status(500).json({ success: false, message: "OTP service not configured" });
  }

  try {
    const body = {
      mobile: `91${phone}`,
      otp_expiry: 5,
      otp_length: 6,
      otp_channel: "whatsapp",
    };
    if (templateId) body.template_id = templateId;

    const response = await fetch("https://control.msg91.com/api/v5/otp", {
      method: "POST",
      headers: {
        authkey: authkey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (data.type === "success" || data.message === "OTP sent successfully." || response.ok) {
      return res.json({ success: true });
    } else {
      return res.status(400).json({ success: false, message: data.message || "Failed to send OTP" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "Network error sending OTP" });
  }
}
