# Website inquiry setup

1. Import AI-Junction-Website-Inquiry-n8n.json into n8n.
2. In Website Inquiry, select a Header Auth credential with name X-AIJ-Inquiry-Key and a new random secret as the value.
3. In Save to Google Sheet, enter your existing Apps Script /exec URL and current Apps Script shared secret in the token field.
4. Set the SMTP credential and From Email in Send Confirmation Email. Publish the workflow and copy the Website Inquiry Production URL.
5. In the Vercel project environment variables, set N8N_INQUIRY_WEBHOOK_URL to that reachable HTTPS Production URL and N8N_INQUIRY_WEBHOOK_SECRET to the Header Auth value from step 2. Redeploy.
6. Open contact.html through the deployed site and submit an inquiry to your own email. Check the Inquiries tab and the confirmation email. If running the website on Vercel, an n8n instance running only on localhost cannot receive these requests.

For a local filming demo, run the site with Vercel dev and set both variables locally. Use your local n8n Production URL. If ports conflict, run Vercel dev on a different port. The confirmation on the form appears after n8n verifies the sheet write and the email node completes.
