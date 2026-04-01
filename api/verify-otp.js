export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { phone, otp } = req.body || {};
  if (!phone || !otp) {
    return res.status(400).json({ success: false, message: "Phone and OTP are required" });
  }

  const authkey = process.env.MSG91_AUTHKEY;
  if (!authkey) {
    return res.status(500).json({ success: false, message: "OTP service not configured" });
  }

  try {
    const url = `https://control.msg91.com/api/v5/otp/verify?mobile=91${phone}&otp=${encodeURIComponent(otp)}`;
    const response = await fetch(url, {
      headers: { authkey: authkey },
    });
    const data = await response.json();

    if (data.type === "success" || data.type === "verified") {
      return res.json({ success: true });
    } else {
      return res.status(400).json({ success: false, message: data.message || "Invalid OTP" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "Network error verifying OTP" });
  }
}
