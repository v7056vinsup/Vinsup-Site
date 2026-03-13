export default async function handler(req, res) {
  const scriptURL = "https://script.google.com/macros/s/AKfycbyDSKPUpL-31X6J_NfpBEPmyK0vSW9pIoPEAKvB_uB78-_oGmEolvQjZkMuoGdZkCdn/exec";

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.text();
    res.status(200).send(data);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}