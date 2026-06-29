# Prestige Noble Lady Luxury — Backend Project Guide (Enhanced)

This document is the source of truth for building the **FastAPI backend** for the Prestige Noble Lady Luxury website. It combines the original requirements with practical suggestions and operational notes to help implementation and future conversations.

---

## Original Scope & Decisions (copied)

This backend is the real implementation of the mock layer described in `/src/api/client.js` from the frontend project guide. Function names and response shapes here are designed to match that file exactly, so swapping the frontend from mock to live requires no component changes.

### 1. Scope Decision (read this first)

The frontend is a **showcase + lead-generation site** — no cart, no checkout, no customer logins. The backend should match that scope, not exceed it.

**Build now:**

- Public read endpoints for products and testimonials
- Public contact form submission endpoint
- A single admin login (one user, not a multi-role user system)
- Admin-only endpoints to create/update/delete products and testimonials
- Email or logging notification when a contact form is submitted

**Explicitly deferred — do not build yet:**

- Customer accounts / signup / login for shoppers
- Shopping cart, checkout, payments
- Order management / order history
- Multi-admin roles or permissions
- Inventory / stock tracking

---

## 2. Tech Stack (original)

| Layer | Technology |
|---|---|
| Framework | FastAPI (Python 3.12) |
| Database | PostgreSQL (VPS-hosted) |
| ORM | SQLAlchemy 2.0 (async) + Alembic for migrations |
| Validation | Pydantic v2 |
| Auth | JWT (single admin user, password hashed with bcrypt via `passlib`) |
| Server | Uvicorn behind Nginx (reverse proxy + TLS) |
| Process manager | systemd (or Docker Compose — see Section 7) |
| Hosting | VPS |
| Email (contact form notifications) | SMTP via a transactional provider (e.g. Resend, Brevo, or Gmail SMTP for low volume) |

---

## 3. Project Structure (original)

```
backend/
  app/
    main.py               # FastAPI app instance, router includes, CORS
    core/
      config.py            # settings via pydantic-settings, reads .env
      security.py          # password hashing, JWT creation/verification
      database.py          # async SQLAlchemy engine + session
    models/
      product.py
      testimonial.py
      contact_submission.py
      admin_user.py
    schemas/
      product.py           # Pydantic request/response models
      testimonial.py
      contact.py
      auth.py
    routers/
      products.py
      testimonials.py
      contact.py
      auth.py
    services/
      email.py              # sends notification on contact form submit
  alembic/
    versions/
  alembic.ini
  requirements.txt
  .env.example
  Dockerfile
  docker-compose.yml
```

---

## 4. Database Schema (original)

(Kept, with enhancements later.)

---

## 5. API Contract (original)

Public endpoints (original):

- `GET /products` (optional `?category=`)
- `GET /testimonials`
- `POST /contact` — body `{ name, email, phone?, message }`

Admin endpoints (JWT protected):

- `POST /auth/login` — `{ email, password }` → `{ access_token, token_type }`
- `POST /products` — create
- `PUT /products/{id}` — update
- `DELETE /products/{id}` — delete
- `POST /testimonials`, `PUT /testimonials/{id}`, `DELETE /testimonials/{id}`
- `GET /contact` — list contact submissions

Response shape example (original):

```json
[
  {
    "id": "uuid",
    "name": "Premium Cotton Bedsheet Set",
    "category": "Bedsheets",
    "description": "Luxurious 100% cotton bedsheet with matching pillowcases.",
    "price": 350,
    "image_url": "/static/products/bedsheet-01.jpg"
  }
]
```

---

## 6. Auth Approach (original)

Single admin, seeded in DB. JWT for admin routes. Short lived token (e.g. 24h). No public registration or password reset yet.

---

## 7. Local Development & Containerization (original)

Use Docker Compose locally. CORS must be explicit, not `*`.

---

## 8. VPS Hosting Recommendation (original)

Hetzner recommended; deploy with Docker Compose + Nginx + Certbot or host frontend separately.

---

## 9. Out of Scope (original)

Do not build shopping cart, payments, orders, inventory, multi-admin, password reset.

---

## 10. Definition of Done (original)

As originally specified.

---

# Additions & Recommendations (my suggestions consolidated)

These items expand and harden the original guide based on your choices (VPS Postgres, multi-image products, structured variants).

- API additions:
  - Add `GET /products/{id}`.
  - Support pagination and simple search: `?page=1&limit=24&query=&min_price=&max_price=&category=`.
  - Keep `?category=` filter.

- Product model (recommended):
  - `id` (UUID), `name`, `slug` (unique), `category`, `description`, `price` (nullable), `images` (array), `variants` (related table or JSON), `bundle_type`, `is_waterproof` (bool), `created_at`, `updated_at`, `deleted_at` (nullable, for soft-delete).
  - Use a separate `product_images` table for ordering and alt text, or store `images[]` in JSONB.
  - Use a `product_variants` table: columns `id`, `product_id`, `size` (e.g. Double/Queen/King), `pillow_case_count` (int), `price` (nullable/override), `sku` (optional).

- Contact form:
  - Add rate-limiting (e.g. 10/min per IP) and a honeypot or simple Recaptcha to reduce spam.
  - Log submissions and send email notification via configured SMTP provider.

- Image storage:
  - Store images in object storage (S3-compatible, Wasabi, or a VPS-served directory behind Nginx) and serve via CDN if possible.
  - Configure backup and lifecycle policies for storage.

- Admin Seed & Secrets:
  - Provide a small `scripts/seed_admin.py` that reads `ADMIN_EMAIL` and `ADMIN_PASSWORD` (or hashed value) from `.env` and inserts the seeded admin (hash using `passlib.hash.bcrypt`).
  - Add `.env.example` keys: `ADMIN_EMAIL`, `ADMIN_PASSWORD_HASH`, `JWT_SECRET`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `POSTGRES_URL`.

- Database & Indexes:
  - Add an index on `slug` (unique) and `category`, and a GIN index on searchable text if you support full-text search.
  - Use `deleted_at` soft-delete pattern if recoverability is desired.

- Security / Ops:
  - Lock CORS to the frontend origin explicitly.
  - Use strong `JWT_SECRET` and rotate if needed.
  - Monitor with Sentry or similar for errors; set up basic logging.
  - Ensure TLS via Certbot/Let's Encrypt.

- Storage / CDN recommendation:
  - If budget allows, use Backblaze B2 or Wasabi with Cloudflare in front; otherwise serve static uploads from the VPS with Nginx and enable gzip/expiry headers.

- CI / Tests:
  - Add unit tests for routers and schemas and a simple GitHub Actions workflow to run lint + tests on PRs.

- Migrations & seeds:
  - Use Alembic migration scripts for schema changes and include seed data for initial display products and admin account in `alembic/versions` or in a `scripts/` folder.

- Soft guidance on JWT lifetime:
  - 4–24 hours is reasonable for single-admin systems; shorter is more secure. No refresh tokens for now.

---

# Product JSON examples (recommended shapes)

Example GET `/products` item (response to frontend):

```json
{
  "id": "uuid",
  "name": "Premium Cotton Bedsheet Set",
  "slug": "premium-cotton-bedsheet-set",
  "category": "Bedsheets",
  "description": "Luxurious 100% cotton bedsheet with matching pillowcases.",
  "price": 350,
  "images": ["/uploads/bedsheet-01-1.jpg", "/uploads/bedsheet-01-2.jpg"],
  "variants": [
    {"id":"v1","size":"Double","pillow_case_count":2},
    {"id":"v2","size":"Queen","pillow_case_count":3},
    {"id":"v3","size":"King","pillow_case_count":4}
  ],
  "is_waterproof": false
}
```

Example POST `/products` payload (admin creates product):

```json
{
  "name": "Luxury Bedsheet Bundle",
  "slug": "luxury-bedsheet-bundle",
  "category": "Bedsheets",
  "description": "Bundle with pillowcases",
  "price": null,
  "images": ["s3://bucket/path/bs1.jpg", "s3://bucket/path/bs2.jpg"],
  "variants": [
    {"size":"Double","pillow_case_count":2},
    {"size":"Queen","pillow_case_count":3},
    {"size":"King","pillow_case_count":4}
  ]
}
```

---

# VPS Postgres checklist (concise)

- Decide: run Postgres in Docker on the VPS or install system Postgres (apt). Docker Compose is easier to replicate locally.

Minimal Docker Compose snippet for Postgres (persisted):

```yaml
version: '3.8'
services:
  db:
    image: postgres:16
    restart: always
    environment:
      POSTGRES_DB: prestige
      POSTGRES_USER: prestige
      POSTGRES_PASSWORD: <strong-password>
    volumes:
      - pgdata:/var/lib/postgresql/data
    networks:
      - backend
volumes:
  pgdata:
networks:
  backend:
```

Basic security & ops steps:
- Use a dedicated Postgres user and a strong password in `.env` (`POSTGRES_URL=postgresql://prestige:<pass>@db:5432/prestige`).
- Expose Postgres only to local network (don't open 5432 to the public internet). Use firewall rules (ufw) and Docker networks correctly.
- Schedule regular backups (`pg_dump` or snapshot the volume) and test restores.

Backup example (run as a cron job or script):

```bash
PGPASSWORD=<pass> pg_dump -h localhost -U prestige -F c -b -v -f /backups/prestige-$(date +"%F").dump prestige
```

---

# Admin seed script (notes)

- Provide `scripts/seed_admin.py` which:
  - Reads `ADMIN_EMAIL` and `ADMIN_PASSWORD` from `.env` (or environment).
  - Hashes the password with `passlib.hash.bcrypt` and inserts into `admin_users` if not exists.
  - Print instructions to remove or rotate the seeded password after first login.

Quick seed SQL example (psql):

```sql
INSERT INTO admin_users (id, email, hashed_password, created_at)
VALUES (gen_random_uuid(), 'owner@example.com', '<bcrypt-hash>', now())
ON CONFLICT (email) DO NOTHING;
```

---

# Implementation notes & future chat reminders

- We'll migrate `data/products.ts` from the frontend into the DB; keep product `id` or `slug` mapping to avoid breaking frontend links.
- Keep API response shapes compatible with existing `client.js` functions to avoid frontend changes.
- When you provide images for duvet sets and curtains, include filenames and desired ordering so I can wire the `images[]` correctly.
- For the payment/order requests the client mentioned: keep them as manual instructions for now (Momo numbers and bank details visible on product pages or in an "Order" modal) until you want to add payment integration.

---

# Next steps (pick one)

- I can draft the SQLAlchemy models + Pydantic schemas for `Product`, `ProductVariant`, and `ProductImage`.
- Or I can draft the `products` router (GET list, GET item, POST create) matching the shapes above.

Tell me which you'd like first and I will prepare it.

---

*Document created/updated for the project workspace.*
