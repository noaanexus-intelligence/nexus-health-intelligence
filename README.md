# Nexus Health Intelligence

**เน็กซัส เฮลท์ อินเทลลิเจนซ์ — ระบบอัจฉริยะเพื่อบริหารข้อมูลสุขภาพระดับพื้นที่**

เว็บไซต์บริษัทแบบ **Single-page Landing Page** ระดับมืออาชีพ สำหรับบริษัทด้าน
**Health Data Intelligence** ที่ออกแบบและพัฒนา Dashboard, HDC Analytics, KPI Monitoring
และระบบวิเคราะห์ข้อมูลสุขภาพ สำหรับ สสอ., CUP, โรงพยาบาลชุมชน และหน่วยบริการปฐมภูมิ
โดยใช้ **Pakchong HDC Intelligence Dashboard** เป็น Case Study หลัก

> 🔱 **โปรเจกต์นี้แยกจากเว็บ HDC ปากช่องเดิมโดยสมบูรณ์**
> ไม่มีการแก้ไข เขียนทับ หรือเชื่อมโยงกับโปรเจกต์เดิมที่
> `C:\Users\PNYM.2CS1031\Documents\New projectเชื่อมHDC`
> และ **ไม่ยุ่งกับ Production URL เดิม** `https://kpi-hdc-pakchong.vercel.app`

---

## 🎯 วัตถุประสงค์

นำเสนอภาพลักษณ์บริษัทเทคโนโลยีสุขภาพมืออาชีพ ที่เข้าใจทั้งเทคโนโลยีและบริบทสาธารณสุขไทย
(HDC, 43 แฟ้ม, FDH/eClaim, KPI กระทรวงสาธารณสุข, Service Plan 17 สาขา, CUP/สสอ./รพ.สต.)
เป็น **static website** ด้วย HTML, CSS, JavaScript ล้วน — พร้อมสำหรับนำไป deploy ภายหลัง
โดยไม่ต้องใช้ backend, database หรือ framework

---

## 🚀 วิธีรัน Local Server (Port 4174)

> ใช้พอร์ต **4174** เท่านั้น
> ⚠️ ห้ามใช้พอร์ต **4173** เพราะถูกใช้กับเว็บ HDC ปากช่องเดิม

เปิด Terminal / PowerShell ในโฟลเดอร์โปรเจกต์นี้ แล้วเลือกวิธีใดวิธีหนึ่ง:

```bash
# ตัวเลือกที่ 1 — Node.js (เซิร์ฟเวอร์ในตัว ไม่มี dependency)
node server.js

# ตัวเลือกที่ 2 — Python
python -m http.server 4174

# ตัวเลือกที่ 3 — Node (serve)
npx serve -l 4174
```

จากนั้นเปิดเบราว์เซอร์ที่:

```
http://127.0.0.1:4174/
```

> เป็นเว็บ static ล้วน จะดับเบิลคลิกเปิด `index.html` ตรง ๆ ก็ได้
> แต่แนะนำให้รันผ่าน local server เพื่อให้พฤติกรรมเหมือน production

---

## 📁 โครงสร้างไฟล์

```
nexus-health-intelligence/
├── index.html      # โครงสร้างหน้าเว็บ (semantic HTML + SEO + OG + JSON-LD + SVG sprite)
├── styles.css      # ธีม, layout, responsive, animation, mock dashboard, architecture
├── script.js       # mobile menu, active nav, smooth scroll, back-to-top, reveal
├── server.js       # Node static server (zero-dependency) สำหรับรัน local บนพอร์ต 4174
└── README.md       # เอกสารฉบับนี้
```

ทุกไฟล์อยู่ภายในโฟลเดอร์นี้เท่านั้น ไม่มี external library/dependency

---

## 🧩 โครงสร้างหน้าเว็บ (Sections)

1. **Navbar** — โลโก้ + เมนู (บริการ, โซลูชัน, Case Study, Data Security, แพ็กเกจ, ติดต่อเรา) + CTA + mobile menu
2. **Hero** — headline, description, CTA 2 ปุ่ม, stat cards 4 ใบ
3. **Trust strip** — ชิปบริบทข้อมูลที่เชี่ยวชาญ (HDC · 43 แฟ้ม · FDH/eClaim · KPI · Service Plan · CUP · สสอ. · รพ.สต.)
4. **Why Nexus** — capability cards 4 ใบ (trust indicators)
5. **Problem** — 6 ปัญหาหลักของการใช้ข้อมูลสุขภาพ
6. **Solution** — แพลตฟอร์ม + timeline 4 ขั้นตอน
7. **Data Architecture** — Snapshot + Live + Fallback อัตโนมัติ (visual flow)
8. **Core Services** — บริการหลัก 5 + การ์ดออกแบบเฉพาะหน่วยงาน
9. **Case Study** — Pakchong HDC Intelligence Dashboard + mock dashboard preview + highlights
10. **Features** — ความสามารถ 10 รายการ
11. **Data Security & Governance** — 2 คอลัมน์ + Security Score 82/100
12. **CTA band** — เรียกร้องให้ปรึกษาโครงการ
13. **Pricing** — 4 แพ็กเกจ
14. **Contact** — Email / Line / โทรศัพท์ + ปุ่ม CTA
15. **Footer**

---

## ✨ จุดเด่น

- **HealthTech / Government tone** — โทนเขียวเข้ม–น้ำเงิน–ขาว ดูน่าเชื่อถือ เหมาะกับภาครัฐและสาธารณสุข
- **Mock Dashboard preview** จำลองระบบจริง — KPI tiles, ตาราง Ranking, badge `Snapshot + Live`, `HDC Intelligence`
- **Snapshot + Live Data Architecture** อธิบายสถาปัตยกรรมพร้อม Fallback อัตโนมัติ
- **Data Security & Governance** ครบทั้ง 2 ด้าน + Security Maturity score (วงแหวน SVG)
- **Responsive** ครบ 375 / 768 / 1024 / desktop — **ไม่มี horizontal scroll บนมือถือ**
- **Interaction เบา ๆ** — mobile menu, smooth scroll, active nav (scroll spy), back-to-top, reveal-on-scroll (รองรับ `prefers-reduced-motion`)
- **SEO** — meta title/description, **Open Graph**, **Twitter card**, **JSON-LD (Organization)**, semantic HTML, `lang="th"`
- **Accessibility** — skip link, `aria-label`/`aria-expanded`, semantic sections, focus states, contrast ตามพาเลต
- **Performance** — ไม่มี external library/font, inline SVG sprite, system font, animation เบา

### 🎨 Color Palette

| บทบาท | สี | | บทบาท | สี |
|---|---|---|---|---|
| Primary | `#0F766E` | | Warning | `#F59E0B` |
| Secondary | `#2563EB` | | Danger | `#DC2626` |
| Accent | `#22C55E` | | Text | `#0F172A` |
| Background | `#F8FAFC` | | Muted | `#64748B` |

---

## 🔒 หมายเหตุเรื่อง Data Security & Governance

- ข้อมูลทั้งหมดในหน้าเว็บ (รวม Dashboard preview) เป็น **ข้อมูลตัวอย่างเพื่อการนำเสนอเท่านั้น**
- **ไม่มี** การดึงข้อมูลผู้ป่วยจริง และ **ไม่มี** CID, HN หรือชื่อผู้ป่วยรายบุคคล
- เน้น **aggregated data**, privacy by design, HTTPS, Security Headers, สิทธิ์การเข้าถึงตามบทบาท
  และเตรียมพร้อมสำหรับ Audit Log / Monitoring ในอนาคต

---

## 🛠️ แนวทางต่อยอดก่อน Deploy

- ตั้งค่า `og:url` และเพิ่ม `og:image` (ภาพ 1200×630) สำหรับการแชร์โซเชียล
- เพิ่ม `sitemap.xml`, `robots.txt` และ canonical URL ตอนมีโดเมนจริง
- เชื่อมแบบฟอร์มติดต่อกับบริการอีเมล/Google Form หรือ backend
- ทำ i18n รองรับภาษาอังกฤษควบคู่ภาษาไทย
- Deploy บน static host (Vercel / Netlify / GitHub Pages) — โปรเจกต์นี้พร้อมสำหรับ static hosting

---

## ⚠️ ข้อห้าม / ขอบเขตงาน

- โปรเจกต์นี้ **แยกจาก Pakchong HDC Dashboard เดิมโดยสมบูรณ์** — ไม่แก้ไขไฟล์โปรเจกต์เดิม
- **ไม่ยุ่งกับ Production URL** `https://kpi-hdc-pakchong.vercel.app`
- ทำงานเฉพาะไฟล์ในโฟลเดอร์ `nexus-health-intelligence` เท่านั้น
- ใช้พอร์ต **4174** สำหรับ local (4173 สงวนไว้ให้เว็บ HDC เดิม)

> 📌 **สถานะ:** ตั้ง Git repository แล้ว, push ขึ้น GitHub repo `noaanexus-intelligence/nexus-health-intelligence` แล้ว, ยังไม่ได้ deploy
>
> - Initial commit: `a649737 — Initial Nexus Health Intelligence landing page`
> - Remote: `https://github.com/noaanexus-intelligence/nexus-health-intelligence.git`
> - Branch: `main`
> - Deployment: ยังไม่ได้ deploy

---

## 📞 ติดต่อ

- **Email:** noaanoaa212224@gmail.com
- **Line:** kewthanapol
- **โทรศัพท์:** 095-907-5564

---

© 2026 Nexus Health Intelligence — เว็บไซต์สาธิตองค์กร
แยกจากโปรเจกต์เว็บ HDC ปากช่องเดิมโดยสมบูรณ์
