import sharp from "sharp";
import { readFile } from "fs/promises";
import path from "path";

const DEFAULT_WHATSAPP_API_BASE_URL = "https://whatsappmcp.biolastic.co.in";
const DEFAULT_WHATSAPP_ACCOUNT_PHONE = "918116309932";
const DEFAULT_WHATSAPP_ACCOUNT_ID = "356f7283-fd89-4e39-a273-afaffea4d260";
const GREETING_IMAGE_PATH = path.join(process.cwd(), "public", "images", "greetings", "greetings.png");

interface WhatsAppAccount {
  id: string;
  phone: string;
  status: string;
}

export interface WelcomeRecipient {
  name: string;
  whatsapp: string;
  email: string;
}

export interface WhatsAppWelcomeResult {
  textSent: boolean;
  imageSent: boolean;
  messageId?: string;
  error?: string;
}

function getWhatsAppApiBaseUrl() {
  return (process.env.WHATSAPP_MCP_BASE_URL || DEFAULT_WHATSAPP_API_BASE_URL).replace(/\/$/, "");
}

function getWhatsAppAccountPhone() {
  return process.env.WHATSAPP_WELCOME_ACCOUNT_PHONE || DEFAULT_WHATSAPP_ACCOUNT_PHONE;
}

function getWhatsAppHeaders(extra?: HeadersInit): HeadersInit {
  const headers: Record<string, string> = {
    Accept: "application/json",
    "User-Agent": "Kobid-Shalini-Wedding/1.0 (+https://kobid-shalini-wedding.netlify.app)",
  };

  if (process.env.WHATSAPP_MCP_API_KEY) {
    headers.Authorization = `Bearer ${process.env.WHATSAPP_MCP_API_KEY}`;
    headers["x-api-key"] = process.env.WHATSAPP_MCP_API_KEY;
  }

  return {
    ...headers,
    ...extra,
  };
}

function normalizePhone(phone: string) {
  return phone.replace(/[^\d]/g, "");
}

function toWhatsAppJid(phone: string) {
  const digits = normalizePhone(phone);
  return digits.endsWith("@s.whatsapp.net") ? digits : `${digits}@s.whatsapp.net`;
}

function escapeSvg(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function getWelcomeAccountId() {
  if (process.env.WHATSAPP_WELCOME_ACCOUNT_ID) {
    return process.env.WHATSAPP_WELCOME_ACCOUNT_ID;
  }

  try {
    const response = await fetch(`${getWhatsAppApiBaseUrl()}/api/accounts`, {
      cache: "no-store",
      headers: getWhatsAppHeaders(),
    });
    if (!response.ok) return DEFAULT_WHATSAPP_ACCOUNT_ID;

    const data = await response.json() as { accounts?: WhatsAppAccount[] };
    const account = data.accounts?.find((item) => item.phone === getWhatsAppAccountPhone() && item.status === "connected");
    return account?.id || DEFAULT_WHATSAPP_ACCOUNT_ID;
  } catch {
    return DEFAULT_WHATSAPP_ACCOUNT_ID;
  }
}

export function createWelcomeMessage(recipient: WelcomeRecipient) {
  const name = recipient.name.trim() || "Guest";
  const greetingUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "https://kobid-shalini-wedding.netlify.app"}/images/greetings/greetings.png`;

  return [
    `Namaste ${name},`,
    "",
    "Welcome to Kobid & Shalini's wedding celebration.",
    "",
    "Your face registration has been received successfully. Once the wedding photo album is ready, we will use this registration to help send you the photos that include you.",
    "",
    `Greeting card: ${greetingUrl}`,
    "",
    `Delivery details saved:`,
    `WhatsApp: ${recipient.whatsapp}`,
    `Email: ${recipient.email}`,
    "",
    "With love and blessings,",
    "Kobid & Shalini Wedding Team",
  ].join("\n");
}

async function createWelcomeImage(recipient: WelcomeRecipient) {
  try {
    return await readFile(GREETING_IMAGE_PATH);
  } catch {
    // Fall back to a generated card if the static greeting asset is unavailable.
  }

  const safeName = escapeSvg(recipient.name.trim() || "Guest");
  const svg = `
    <svg width="1200" height="1500" viewBox="0 0 1200 1500" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="goldGlow" cx="50%" cy="24%" r="68%">
          <stop offset="0%" stop-color="#fff1b8" stop-opacity="0.52"/>
          <stop offset="42%" stop-color="#d8b06a" stop-opacity="0.18"/>
          <stop offset="100%" stop-color="#07100a" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="goldText" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fffdf4"/>
          <stop offset="48%" stop-color="#ffe589"/>
          <stop offset="100%" stop-color="#d8a85a"/>
        </linearGradient>
        <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="22" stdDeviation="28" flood-color="#000000" flood-opacity="0.48"/>
        </filter>
      </defs>
      <rect width="1200" height="1500" fill="#07100a"/>
      <rect width="1200" height="1500" fill="url(#goldGlow)"/>
      <path d="M0 1180 C260 1060 352 1378 614 1254 C838 1148 982 1058 1200 1128 L1200 1500 L0 1500 Z" fill="#122016" opacity="0.88"/>
      <circle cx="600" cy="404" r="184" fill="none" stroke="#d8b06a" stroke-width="2" opacity="0.72"/>
      <circle cx="600" cy="404" r="230" fill="none" stroke="#f4d98d" stroke-width="1" opacity="0.26"/>
      <text x="600" y="338" text-anchor="middle" fill="#f7ead2" font-family="Georgia, serif" font-size="42" letter-spacing="10">KOBID</text>
      <text x="600" y="424" text-anchor="middle" fill="url(#goldText)" font-family="Georgia, serif" font-size="92">&amp;</text>
      <text x="600" y="514" text-anchor="middle" fill="#f7ead2" font-family="Georgia, serif" font-size="42" letter-spacing="10">SHALINI</text>
      <text x="600" y="740" text-anchor="middle" fill="#f4d98d" font-family="Georgia, serif" font-size="36" letter-spacing="8">WELCOME</text>
      <text x="600" y="855" text-anchor="middle" fill="url(#goldText)" font-family="Georgia, serif" font-size="86" filter="url(#softShadow)">${safeName}</text>
      <text x="600" y="980" text-anchor="middle" fill="#f7ead2" font-family="Arial, sans-serif" font-size="34">Your face registration is confirmed.</text>
      <text x="600" y="1044" text-anchor="middle" fill="#dac79f" font-family="Arial, sans-serif" font-size="28">When the album is ready, your matching memories</text>
      <text x="600" y="1092" text-anchor="middle" fill="#dac79f" font-family="Arial, sans-serif" font-size="28">can be shared by WhatsApp or email.</text>
      <text x="600" y="1308" text-anchor="middle" fill="#f4d98d" font-family="Georgia, serif" font-size="34">05 May 2026 · BIOLASTIC, Siliguri</text>
    </svg>
  `;

  return sharp(Buffer.from(svg)).png({ quality: 92 }).toBuffer();
}

async function sendTextMessage(accountId: string, contactId: string, content: string) {
  const response = await fetch(`${getWhatsAppApiBaseUrl()}/api/messages`, {
    method: "POST",
    headers: getWhatsAppHeaders({ "Content-Type": "application/json" }),
    body: JSON.stringify({ accountId, contactId, content }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.error || `WhatsApp text send failed with ${response.status}`);
  }

  return data as { messageId?: string };
}

async function sendWelcomeImage(accountId: string, contactId: string, recipient: WelcomeRecipient) {
  const image = await createWelcomeImage(recipient);
  const imageData = image.buffer.slice(image.byteOffset, image.byteOffset + image.byteLength) as ArrayBuffer;
  const formData = new FormData();
  formData.set("accountId", accountId);
  formData.set("contactId", contactId);
  formData.set("caption", "Welcome to Kobid & Shalini's wedding celebration.");
  formData.set("file", new Blob([imageData], { type: "image/png" }), "kobid-shalini-welcome.png");

  const response = await fetch(`${getWhatsAppApiBaseUrl()}/api/upload`, {
    method: "POST",
    headers: getWhatsAppHeaders(),
    body: formData,
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.error || `WhatsApp image send failed with ${response.status}`);
  }
}

export async function sendFaceRegistrationWelcome(recipient: WelcomeRecipient): Promise<WhatsAppWelcomeResult> {
  let textSent = false;
  let imageSent = false;
  let messageId: string | undefined;
  const errors: string[] = [];

  try {
    const accountId = await getWelcomeAccountId();
    const contactId = toWhatsAppJid(recipient.whatsapp);

    try {
      const text = await sendTextMessage(accountId, contactId, createWelcomeMessage(recipient));
      textSent = true;
      messageId = text.messageId;
    } catch (err) {
      errors.push(err instanceof Error ? err.message : "WhatsApp text send failed.");
    }

    try {
      await sendWelcomeImage(accountId, contactId, recipient);
      imageSent = true;
    } catch (err) {
      errors.push(err instanceof Error ? err.message : "WhatsApp image send failed.");
    }
  } catch (err) {
    errors.push(err instanceof Error ? err.message : "Unable to send WhatsApp welcome.");
  }

  return {
    textSent,
    imageSent,
    messageId,
    error: errors.length ? errors.join(" | ") : undefined,
  };
}
