# Privacy Policy

**Last Updated: 11th March 2026**

This Privacy Policy describes how Relative Technologies Solution Ltd ("we", "us", or "our") collects, uses, stores, and shares information when you use the Reflex trading terminal and related services ("Service").

By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy.

---

## 1. Who We Are

Relative Technologies Solution Ltd operates the Reflex trading terminal accessible at [app.reflex.trade](https://app.reflex.trade) and the Telegram bot `@ReflexRadarBot`.

For privacy-related enquiries, contact us at: legal@reflex.trade

---

## 2. Information We Collect

### 2.1 Information You Provide

| Data | How It Is Collected |
|---|---|
| **Ethereum wallet address** | When you connect your wallet to authenticate |
| **Email address** *(optional)* | If you join the waitlist using an email address |
| **Telegram User ID and username** | When you link your Telegram account to the Service |
| **Encrypted API wallet private key** | When you enable One-Click Trading on the Telegram bot |

### 2.2 Information Collected Automatically

| Data | Purpose |
|---|---|
| **IP address** | Security monitoring, geographic restriction enforcement, rate limiting |
| **Login timestamp** | Security audit trail (last login time) |
| **Authentication events** | Fraud detection and session management |
| **Order and trade logs** | Platform operation, fee reconciliation, support |

We do **not** collect your name, date of birth, national ID, passport, or any other identity document. The Service does not require KYC.

### 2.3 News Feed and Subscription Data

When you subscribe to Twitter/X accounts or Telegram channels:
- Your wallet address is associated with the subscriptions you create
- Feed content from subscribed sources is retrieved and processed on your behalf
- Your subscription preferences are stored to personalise your feed

### 2.4 Trading Presets

Your saved trading preset configurations (position size, leverage, order type, TP/SL settings, etc.) are stored and associated with your wallet address.

### 2.5 Technical Data

Standard technical data collected during use of the Service:
- Browser type and version
- Device type
- Referring URL
- Session duration
- Pages visited within the Service

This data is collected via standard web server logs and may be used for analytics and improving the Service.

---

## 3. How We Use Your Information

We use the information we collect for the following purposes:

| Purpose | Legal Basis |
|---|---|
| **Providing the Service** — authentication, order execution, feed delivery, notifications | Performance of contract |
| **Security and fraud prevention** — IP monitoring, rate limiting, anomaly detection | Legitimate interests |
| **Geographic restriction enforcement** — blocking access from restricted jurisdictions | Legal obligation |
| **Fee administration** — calculating and collecting builder fees on trades | Performance of contract |
| **Telegram bot trading** — decrypting your API wallet key to sign orders when you issue bot commands | Performance of contract / Consent |
| **Improving the Service** — understanding usage patterns, debugging, feature development | Legitimate interests |
| **Communications** — notifying you of important changes to the Service, security alerts, or waitlist updates | Legitimate interests / Consent |
| **Legal compliance** — responding to lawful requests from authorities | Legal obligation |

We do **not** use your information for:
- Selling to third-party advertisers
- Building advertising profiles
- Credit scoring or financial profiling beyond what is necessary to operate the Service

---

## 4. Encrypted Key Storage

### 4.1 API Wallet Private Key
If you enable One-Click Trading on the Telegram bot, we store an encrypted version of your API wallet's private key. This is necessary to execute trades on your behalf when you issue bot commands.

### 4.2 Encryption
Private keys are encrypted using **AWS Key Management Service (KMS)** with AES-256-GCM encryption. The plaintext key is never written to disk or logged. Only the encrypted ciphertext is stored.

### 4.3 Access
The decrypted key is only accessible:
- Transiently in memory, during the processing of a trading command you initiate
- To the AWS Lambda function responsible for signing the order

Reflex staff cannot retrieve your private key in plaintext under any circumstances.

### 4.4 Deletion
Your encrypted key is permanently deleted when you unlink your Telegram account or disable One-Click Trading.

---

## 5. How We Share Your Information

We do not sell your personal information.

We may share your information in the following limited circumstances:

### 5.1 Third-Party Service Providers
We use third-party services to operate the platform. These providers process data on our behalf and are bound by data processing agreements:

| Provider | Purpose | Data Shared |
|---|---|---|
| **Amazon Web Services (AWS)** | Infrastructure, KMS encryption, database hosting | Encrypted key, wallet address, logs |
| **Hyperliquid** | Order execution and settlement | Wallet address, order parameters |
| **LI.FI** | Cross-chain bridging | Wallet address, bridge transaction parameters |
| **OpenAI** | AI enrichment of news items | News article content (no personal data) |
| **Privy** | Wallet authentication | Wallet address |
| **Firebase / Firestore** | Preset storage | Wallet address, preset configurations |

### 5.2 Legal Requirements
We may disclose information if required to do so by law, regulation, court order, or at the request of a government authority.

### 5.3 Business Transfers
In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity, subject to equivalent privacy protections.

### 5.4 Protection of Rights
We may disclose information where we believe it is necessary to investigate, prevent, or take action against fraud, illegal activity, or violations of our Terms.

---

## 6. Blockchain Data

Your wallet address and all transactions made on Hyperliquid are recorded on a **public blockchain**. This information is inherently public and cannot be made private. We have no control over the permanence or accessibility of on-chain data.

Be aware that:
- Your trading activity on Hyperliquid is publicly visible on-chain
- Associating your wallet address with your real-world identity is the responsibility of the wallet holder

---

## 7. Data Retention

| Data | Retention Period |
|---|---|
| Wallet address and account record | Until you request deletion or your account is terminated |
| Encrypted API wallet key | Until you unlink Telegram or disable One-Click Trading |
| Login timestamps and IP addresses | 90 days |
| Trade and order logs | 12 months |
| Feed subscriptions | Until you remove them or close your account |
| Trading presets | Until you delete them or close your account |
| Email address (waitlist) | Until you request removal or 24 months after approval/rejection |

After the retention period, data is securely deleted or anonymised.

---

## 8. Your Rights

Depending on your jurisdiction, you may have the following rights regarding your personal data:

| Right | Description |
|---|---|
| **Access** | Request a copy of the personal data we hold about you |
| **Rectification** | Request correction of inaccurate personal data |
| **Erasure** | Request deletion of your personal data ("right to be forgotten") |
| **Restriction** | Request that we restrict processing of your data in certain circumstances |
| **Portability** | Request your data in a machine-readable format |
| **Objection** | Object to processing based on legitimate interests |
| **Withdraw Consent** | Where processing is based on consent, withdraw it at any time |

To exercise any of these rights, contact us at: legal@reflex.trade

We will respond within 30 days. We may need to verify your identity (by confirming ownership of the wallet address) before processing your request.

### 8.1 Note on Blockchain Data
We are unable to delete data that has been recorded on a public blockchain, as this is outside our control. Rights to erasure apply only to the data we hold in our own systems.

---

## 9. Security

We implement industry-standard security measures to protect your information, including:

- Encryption of sensitive data at rest (AES-256-GCM via AWS KMS)
- Encryption of data in transit (TLS 1.2 or higher)
- Access controls limiting staff access to personal data
- Regular security reviews
- AWS infrastructure with SOC 2 and ISO 27001 certified facilities

No security system is impenetrable. In the event of a data breach that affects your rights and freedoms, we will notify you as required by applicable law.

---

## 10. Cookies and Tracking

The Service uses minimal tracking technologies:

| Technology | Purpose |
|---|---|
| **Session storage** | Maintaining your authenticated session |
| **Local storage** | Storing your layout preferences, preset selections, and onboarding state |
| **Authentication tokens (JWT)** | Session management (7-day expiry) |

We do not use advertising cookies or third-party tracking pixels.

---

## 11. Children's Privacy

The Service is not directed to individuals under the age of 18. We do not knowingly collect personal information from anyone under 18. If you become aware that a minor has provided us with personal information, please contact us so we can take appropriate action.

---

## 12. International Data Transfers

Reflex operates globally. Your information may be transferred to and processed in countries other than your own, including countries where data protection laws may differ from those in your jurisdiction. Where we transfer data internationally, we take steps to ensure adequate protections are in place in accordance with applicable data protection law.

---

## 13. Third-Party Links and Services

The Service integrates with and may link to third-party platforms (Hyperliquid, Twitter/X, Telegram, Polymarket, etc.). This Privacy Policy applies only to data processed by Reflex. We encourage you to review the privacy policies of any third-party services you use.

---

## 14. Changes to This Policy

We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on this page and updating the "Last Updated" date. For significant changes, we will make reasonable efforts to notify users directly.

Your continued use of the Service after changes are posted constitutes your acceptance of the revised Privacy Policy.

---

## 15. Contact Us

For questions, requests, or concerns about this Privacy Policy:

- Email: legal@reflex.trade
