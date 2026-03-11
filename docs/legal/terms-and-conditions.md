# Terms and Conditions

**Last Updated: 11th March 2026**

Please read these Terms and Conditions ("Terms") carefully before using the Reflex trading terminal ("Service") operated by Relative Technologies Solution Ltd ("we", "us", or "our").

By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, do not access or use the Service.

---

## 1. Acceptance of Terms

### 1.1
By connecting your wallet to Reflex or using any part of the Service, you confirm that you have read, understood, and agree to be bound by these Terms, our [Privacy Policy](privacy-policy.md), and any additional terms referenced herein.

### 1.2
These Terms constitute a legally binding agreement between you and Relative Technologies Solution Ltd. If you are accessing the Service on behalf of an entity, you represent that you have authority to bind that entity to these Terms.

### 1.3
We reserve the right to modify these Terms at any time. Changes will be effective upon posting to the Service. Continued use of the Service after changes are posted constitutes your acceptance of the revised Terms. We will make reasonable efforts to notify users of material changes.

---

## 2. Eligibility

### 2.1 Age Requirement
You must be at least 18 years of age (or the age of majority in your jurisdiction, if higher) to use the Service.

### 2.2 Geographic Restrictions
The Service is **not available** to residents, citizens, or incorporated entities in the following jurisdictions:

- United States of America
- Ontario, Canada
- Russia
- North Korea
- Iran
- Cuba
- Syria
- Any jurisdiction subject to comprehensive economic sanctions or export control laws

This list may be updated to reflect changes in applicable law or Hyperliquid's own terms of service.

### 2.3 Representations
By using the Service, you represent and warrant that:

(a) You are not a resident or citizen of any restricted jurisdiction listed above;

(b) You are not on any government sanctions list or prohibited persons list;

(c) Your use of the Service is not prohibited by applicable law in your jurisdiction;

(d) You are using the Service for your own account and not on behalf of any sanctioned party.

### 2.4 Circumvention
Using a VPN, proxy, or any other technology to circumvent geographic restrictions is a violation of these Terms and may result in immediate termination of your access.

---

## 3. Description of Service

### 3.1 Nature of the Service
Reflex is a **non-custodial trading interface** built on top of Hyperliquid. The Service provides:

- A web-based terminal for accessing Hyperliquid perpetuals, spot, and HIP-3 markets
- A real-time news and intelligence feed aggregating content from Twitter/X, Telegram, and RSS sources
- AI-powered enrichment of news content
- Prediction market data from Polymarket
- A Telegram bot (`@ReflexRadarBot`) for mobile trading and notifications
- Cross-chain bridging functionality powered by LI.FI

### 3.2 Non-Custodial
Reflex does not hold, manage, or have custody over your digital assets at any time. All trades are executed on and settled by Hyperliquid. Your funds remain in your Hyperliquid account.

### 3.3 Builder Code Relationship
Reflex routes orders to Hyperliquid via the builder code mechanism. By using the Service, you authorise Reflex to receive a builder fee on trades you execute through the Service. See Section 7 (Fees).

### 3.4 Third-Party Services
The Service integrates with third-party platforms including Hyperliquid, Twitter/X, Telegram, Polymarket, LI.FI, Finlight, and AWS. Your use of these integrations is also subject to the respective third-party terms of service.

### 3.5 Beta Access
The Service is currently provided in beta. Features may be incomplete, subject to change, or temporarily unavailable. Beta access is provided on an invite-only basis.

---

## 4. Account and Access

### 4.1 Wallet-Based Authentication
Access to the Service is provided via your Ethereum-compatible wallet using Sign-In with Ethereum (SIWE). You are responsible for maintaining the security of your wallet and private keys.

### 4.2 Waitlist
Access to the Service is currently restricted to users who have been approved via the waitlist. We reserve the right to approve or deny waitlist applications at our sole discretion.

### 4.3 Account Responsibility
You are solely responsible for all activity that occurs in connection with your wallet address. You must:

(a) Keep your wallet credentials and seed phrase secure;

(b) Immediately notify us if you suspect unauthorised access to your account;

(c) Not share access to your account with any third party.

### 4.4 Termination of Access
We reserve the right to suspend or terminate your access to the Service at any time, with or without notice, for any reason including but not limited to:

- Violation of these Terms
- Suspected fraudulent, abusive, or illegal activity
- Requests from law enforcement or regulatory authorities
- Geographic restriction violations

---

## 5. Telegram Bot and API Wallet

### 5.1 One-Click Trading
If you enable One-Click Trading on `@ReflexRadarBot`, you authorise Reflex to:

(a) Generate a dedicated API wallet for your account;

(b) Store the private key of that API wallet in encrypted form using AWS KMS;

(c) Use that private key to sign and submit trading orders to Hyperliquid on your behalf when you issue commands to the bot.

### 5.2 Scope of API Wallet
The API wallet is authorised solely to place and cancel orders on Hyperliquid. It cannot withdraw funds, transfer balances, create sub-accounts, or perform any other account operations.

### 5.3 Your Responsibility
You are responsible for all trades executed via the Telegram bot under your linked account. Ensure your Telegram account is secure and report any unauthorised access immediately.

### 5.4 Disabling and Deletion
You may disable One-Click Trading or unlink your Telegram account at any time from the Reflex terminal. Upon doing so, your API wallet's encrypted private key will be permanently deleted from our systems.

---

## 6. Prohibited Conduct

You agree not to:

(a) Use the Service in any jurisdiction where it is prohibited;

(b) Use the Service to conduct market manipulation, wash trading, spoofing, or any other form of fraudulent trading activity;

(c) Attempt to reverse engineer, decompile, or tamper with any part of the Service;

(d) Use automated bots, scrapers, or scripts to access the Service in a manner that places excessive load on our infrastructure;

(e) Circumvent, disable, or interfere with security features of the Service;

(f) Use the Service to launder money or finance illegal activities;

(g) Impersonate any person or entity or misrepresent your affiliation;

(h) Upload or transmit malicious code, viruses, or harmful content;

(i) Violate any applicable law or regulation.

---

## 7. Fees

### 7.1 Builder Fees
Reflex charges a builder fee on each trade executed through the Service:

- Web terminal: **0.01%** per trade
- Telegram bot: **0.0225%** per trade

These fees are charged in addition to Hyperliquid's standard trading fees.

### 7.2 Hyperliquid Fees
Hyperliquid charges its own trading fees independent of Reflex. You are responsible for reviewing and understanding Hyperliquid's current fee schedule.

### 7.3 Third-Party Fees
Use of the bridge functionality (LI.FI) may incur bridge and swap fees charged by LI.FI and underlying protocols. These fees are disclosed at the time of bridging and are separate from Reflex's fees.

### 7.4 No Refunds
All fees are non-refundable. Once an order is submitted to Hyperliquid and executed, the associated fees cannot be recovered.

---

## 8. Risk Disclosure

### 8.1 Trading Risk
Trading perpetuals and spot assets involves substantial risk of loss, including the potential loss of your entire deposited capital. You should never trade with funds you cannot afford to lose.

### 8.2 Leverage Risk
The use of leverage amplifies both gains and losses. A leveraged position can be liquidated rapidly in volatile market conditions. Liquidation results in the loss of your margin for that position.

### 8.3 Liquidation Risk
Hyperliquid may liquidate your positions if your margin falls below the maintenance requirement. Reflex is not responsible for losses arising from liquidation events.

### 8.4 Funding Rate Risk
Perpetuals positions accrue funding payments that may be positive or negative. Holding a position for an extended period may result in significant funding costs.

### 8.5 Smart Contract and Protocol Risk
Hyperliquid operates on its own L1 blockchain. While we believe Hyperliquid to be a reputable and technically sound platform, all blockchain-based systems carry the risk of bugs, exploits, or unexpected failures. Reflex is not responsible for losses arising from failures of Hyperliquid or any other third-party protocol.

### 8.6 Oracle and Market Risk
Hyperliquid uses oracle prices for funding and liquidation calculations. Oracle failures, price manipulation, or extreme market dislocations may result in unexpected liquidations or losses.

### 8.7 AI and News Feed Risk
The AI-enriched signals provided in the Reflex feed are for informational purposes only. They do not constitute financial advice and should not be the sole basis for any trading decision. Sentiment scores, risk signals, and ticker extractions may be inaccurate or misleading.

### 8.8 Technology Risk
The Service may experience downtime, latency, or technical failures. Orders may not be submitted or may be delayed during such periods. We are not responsible for losses arising from technical failures of the Service.

### 8.9 Regulatory Risk
The regulatory environment for digital asset trading is evolving. Changes in law or regulation may adversely affect your ability to use the Service or your ability to access or withdraw funds.

---

## 9. Intellectual Property

### 9.1 Our Intellectual Property
All intellectual property in the Service — including but not limited to the software, design, trademarks, and content — is owned by or licensed to Relative Technologies Solution Ltd. You are granted a limited, non-exclusive, non-transferable licence to use the Service for its intended purpose.

### 9.2 Restrictions
You may not copy, modify, distribute, sell, or create derivative works from any part of the Service without our prior written consent.

### 9.3 User Content
By subscribing to Twitter/X accounts or Telegram channels via the Service, you acknowledge that the content from those sources is owned by the respective content creators or platforms. Reflex does not claim ownership over third-party content aggregated through the feed.

---

## 10. Disclaimers

### 10.1 No Financial Advice
Nothing in the Service constitutes financial, investment, legal, or tax advice. You are solely responsible for your trading decisions.

### 10.2 As-Is Basis
THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.

### 10.3 No Guarantee of Uptime
We do not guarantee uninterrupted or error-free operation of the Service. We reserve the right to modify, suspend, or discontinue any part of the Service at any time.

### 10.4 Third-Party Content
We are not responsible for the accuracy, completeness, or timeliness of content from third-party sources (Twitter/X, Telegram, Finlight, Polymarket, LI.FI, or Hyperliquid).

---

## 11. Limitation of Liability

### 11.1
TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL RELATIVE TECHNOLOGIES SOLUTION LTD, ITS OFFICERS, DIRECTORS, EMPLOYEES, CONTRACTORS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, LOSS OF DATA, LOSS OF DIGITAL ASSETS, OR BUSINESS INTERRUPTION, ARISING OUT OF OR RELATING TO YOUR USE OF THE SERVICE.

### 11.2
TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, OUR TOTAL AGGREGATE LIABILITY TO YOU FOR ANY CLAIMS ARISING FROM OR RELATING TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE TOTAL FEES PAID BY YOU TO REFLEX IN THE THREE (3) MONTHS PRECEDING THE CLAIM.

### 11.3
Some jurisdictions do not allow the exclusion or limitation of certain warranties or liability. In such jurisdictions, our liability is limited to the fullest extent permitted by law.

---

## 12. Indemnification

You agree to indemnify, defend, and hold harmless Relative Technologies Solution Ltd and its officers, directors, employees, contractors, and affiliates from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or relating to:

(a) Your use of the Service;

(b) Your violation of these Terms;

(c) Your violation of any applicable law or third-party rights;

(d) Any trades or financial decisions made using the Service.

---

## 13. Dispute Resolution

### 13.1 Informal Resolution
Before initiating any formal dispute, you agree to first contact us at legal@reflex.trade and attempt to resolve the dispute informally for at least 30 days.

### 13.2 Arbitration
If the dispute is not resolved informally, you agree that any dispute, claim, or controversy arising out of or relating to these Terms or the Service shall be resolved by binding arbitration rather than in court, except that you may bring claims in small claims court if they qualify.

### 13.3 Governing Law
These Terms shall be governed by and construed in accordance with the laws of the British Virgin Islands, without regard to conflict of law principles.

### 13.4 Class Action Waiver
To the extent permitted by law, you agree to resolve disputes with us on an individual basis only and waive any right to bring or participate in any class, collective, or representative action.

---

## 14. General Provisions

### 14.1 Entire Agreement
These Terms, together with the Privacy Policy and any other agreements referenced herein, constitute the entire agreement between you and Relative Technologies Solution Ltd regarding the Service.

### 14.2 Severability
If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect.

### 14.3 No Waiver
Failure by us to enforce any right or provision of these Terms will not be deemed a waiver of that right or provision.

### 14.4 Assignment
You may not assign your rights or obligations under these Terms without our prior written consent. We may assign our rights and obligations freely.

### 14.5 Force Majeure
We shall not be liable for any failure or delay in performance due to causes beyond our reasonable control, including acts of God, war, terrorism, government action, natural disasters, or internet infrastructure failures.

---

## 15. Contact

For questions about these Terms, please contact us at:

- Email: legal@reflex.trade
