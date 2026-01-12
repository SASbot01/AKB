# Domain Configuration Guide for AKB Capital Group

## 🎯 Quick Overview

Your landing page files are successfully uploaded to the hosting server. Now you need to connect your domain name to this server.

---

## 📋 What You Need

1. **Your domain name** (e.g., `akbcapitalgroup.com`)
2. **Access to your domain registrar** (where you bought the domain)
3. **Server information** from your hosting provider

---

## 🔍 Step 1: Find Your Server IP Address

You need to contact your hosting provider and ask for:

**Questions to ask:**
- "What is the IP address for my hosting account?"
- "What are the nameservers for my hosting?"
- "Where is my control panel (cPanel/Plesk)?"

**Your hosting provider is likely:**
- The company that gave you the SFTP credentials
- Look for emails with subject like "Hosting Account Setup" or "Welcome to..."

---

## 🌐 Step 2: Configure Your Domain

### Method A: Using A Record (Recommended)

1. **Log into your domain registrar** (GoDaddy, Namecheap, Google Domains, etc.)
2. **Find DNS settings** (usually called "DNS Management" or "DNS Settings")
3. **Add or update A record:**
   ```
   Type:  A
   Name:  @ (or leave blank for root domain)
   Value: [Your server IP address]
   TTL:   3600 (or default)
   ```
4. **Add www subdomain (optional):**
   ```
   Type:  A
   Name:  www
   Value: [Your server IP address]
   TTL:   3600
   ```

### Method B: Using Nameservers

1. **Get nameservers from hosting provider** (e.g., `ns1.hosting.com`, `ns2.hosting.com`)
2. **Log into domain registrar**
3. **Update nameservers** in domain settings
4. **Save changes**

---

## ⏱️ Step 3: Wait for DNS Propagation

- **Time required**: 1-48 hours (usually 1-4 hours)
- **Check status**: https://dnschecker.org
- **What to check**: Enter your domain and select "A" record type

---

## 🔧 Step 4: Verify Your Site

Once DNS has propagated:

1. **Open browser** and go to your domain
2. **You should see** the AKB Capital Group landing page
3. **If not**, check troubleshooting below

---

## 🚨 Troubleshooting

### Site shows "This site can't be reached"
- **Cause**: DNS not propagated yet
- **Solution**: Wait a few more hours, check dnschecker.org

### Site shows hosting provider's default page
- **Cause**: Files might need to be in a different directory
- **Solution**: Contact hosting support to confirm web root directory
- **Common directories**: `/`, `/public_html/`, `/htdocs/`, `/www/`

### Site shows "403 Forbidden"
- **Cause**: File permissions issue
- **Solution**: Contact hosting support to fix permissions

### Site shows "404 Not Found"
- **Cause**: index.html not in correct location
- **Solution**: Verify files are uploaded (see verification section below)

---

## ✅ Verify Files Are Uploaded

You can verify the files are on the server:

```bash
cd /Users/s4sf/Downloads/akb-capital-group
lftp -e "set sftp:auto-confirm yes; set ssl:verify-certificate no; open sftp://a1511096:AKBlanding25.@access-5018168070.webspace-host.com:22; ls; ls assets/; bye"
```

**Expected output:**
```
index.html
assets/
  index-CBzUHAbx.js
```

---

## 📞 Who to Contact

### For Domain Issues:
- **Contact**: Your domain registrar (where you bought the domain)
- **Ask about**: DNS settings, A records, nameservers

### For Hosting Issues:
- **Contact**: Your hosting provider (who gave you SFTP credentials)
- **Ask about**: Server IP, control panel access, web root directory

### For Code Changes:
- **Make changes** locally in the project
- **Test locally**: `npm run dev`
- **Deploy**: `./deploy.sh`

---

## 🎯 Common Domain Registrars

### GoDaddy
1. Go to: https://dcc.godaddy.com/manage/
2. Click on your domain
3. Click "DNS" or "Manage DNS"
4. Add/edit A record

### Namecheap
1. Go to: https://ap.www.namecheap.com/domains/list/
2. Click "Manage" next to your domain
3. Click "Advanced DNS"
4. Add/edit A record

### Google Domains
1. Go to: https://domains.google.com/registrar/
2. Click on your domain
3. Click "DNS"
4. Add/edit A record

### Cloudflare
1. Go to: https://dash.cloudflare.com/
2. Select your domain
3. Click "DNS"
4. Add/edit A record

---

## 📝 Example DNS Configuration

If your server IP is `123.45.67.89`:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 123.45.67.89 | 3600 |
| A | www | 123.45.67.89 | 3600 |

This will make both `akbcapitalgroup.com` and `www.akbcapitalgroup.com` work.

---

## 🎉 Next Steps

1. **Find your server IP** from hosting provider
2. **Configure DNS** at your domain registrar
3. **Wait for propagation** (1-48 hours)
4. **Test your site** by visiting your domain
5. **Celebrate!** 🎊

---

## 💡 Pro Tips

- **Use Cloudflare** (free) for faster DNS propagation and free SSL
- **Enable HTTPS** through your hosting control panel
- **Set up email** using your domain through hosting provider
- **Monitor uptime** using services like UptimeRobot (free)

---

## 📧 Need Help?

If you're stuck, provide this information when asking for help:
- Your domain name
- Your hosting provider name
- Error message or screenshot
- What you've tried so far
