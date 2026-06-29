# Prestige Noble Lady Luxury — Admin Backend Planning Document

This document is a planning-only guide for the admin backend and product management experience. It is meant to help us discuss the system clearly before any coding begins.

---

## 1. Project Goal

Give the client a simple admin panel where they can manage the public-facing product catalog without needing a developer to update everything manually.

The admin should be able to:
- create products
- read products
- update products
- delete products
- upload multiple images per product
- add product variants such as size and pillow-case count
- manage testimonials
- view contact submissions

The public site remains a showcase and lead-generation site.

---

## 2. Scope of the Admin System

### Included now
- Admin login
- Product CRUD
- Product image management
- Product variant management
- Testimonial CRUD
- Contact submissions view

### Not included now
- customer accounts
- shopping cart
- checkout
- payments
- order history
- inventory tracking
- multi-role admin permissions

---

## 3. Recommended Backend Approach

### Recommended stack
- FastAPI for the API layer
- PostgreSQL on the VPS
- SQLAlchemy for database access
- Pydantic for request/response validation
- JWT-based admin authentication

### Why this fits
- strong fit for a modern product admin system
- clean future extension if payments or orders are added later
- works well with a Next.js or React frontend

---

## 4. Core Data Model

The data should be structured rather than stored as one giant flat object.

### Product
A product is the main item in the catalog.

Example product categories:
- Bedsheets
- Duvet Sets
- Curtains
- Water Mattress Covers
- Sofa Covers
- Funnel Blankets

### Product Variant
Each product can have multiple variants.

Example variants:
- Double size bedsheets with 2 pillow cases
- Queen size bedsheets with 3 pillow cases
- King size bedsheets with 4 pillow cases
- Double/Queen duvet set
- King/Super King duvet set
- 2 in 1 curtains
- 3 in 1 curtains
- 4 in 1 curtains

### Product Image
Each product can have multiple images.

This allows the client to upload a gallery of images for a single product.

---

## 5. Suggested Product Fields

Each product should have the following fields:
- product name
- slug
- category
- description
- price (optional, if price is not fixed or not yet available)
- is active / published
- waterproof flag (for waterproof mattress covers)
- images
- variants
- created date
- updated date

### Suggested categories
- Bedsheets
- Duvet Sets
- Curtains
- Water Mattress Covers
- Sofa Covers
- Funnel Blankets

---

## 6. Suggested Variant Fields

Each variant should have:
- size label
- pillow case count (if relevant)
- optional price override
- optional SKU or internal reference

This is important because the client specifically wants bundles like:
- Double size bedsheets with 2 pillow cases
- Queen size bedsheets with 3 pillow cases
- King size bedsheets with 4 pillow cases

---

## 7. Admin Pages / Screens

### 7.1 Dashboard
A simple overview page showing:
- total products
- total testimonials
- total contact submissions
- recent activity

### 7.2 Products List
A table or card view showing:
- product name
- category
- status (active/inactive)
- number of images
- number of variants
- actions: edit, delete

### 7.3 Add/Edit Product Form
Fields:
- name
- slug
- category
- description
- price
- waterproof flag
- active/published status
- image upload area
- variants section

### 7.4 Images Manager
The admin should be able to:
- upload multiple images
- reorder them
- set alt text if needed
- remove images

### 7.5 Variants Manager
The admin should be able to:
- add variants
- edit size labels
- edit pillow case count
- remove variants

### 7.6 Testimonials Manager
Fields:
- customer name
- role or title
- quote
- rating
- active status

### 7.7 Contact Submissions View
A simple list of submissions showing:
- name
- email
- phone
- message
- submitted date

---

## 8. Admin Authentication Plan

### Single admin user for now
- one admin account is enough for phase one
- login with email and password
- protected routes only accessible after login

### Future extension
If needed later, roles could be added, but that is not necessary now.

---

## 9. Public API Plan

The public frontend should be able to read data from the backend through simple endpoints.

### Public endpoints planned
- GET /products
- GET /products/{id}
- GET /testimonials
- POST /contact

### Admin-only endpoints planned
- POST /products
- PUT /products/{id}
- DELETE /products/{id}
- POST /testimonials
- PUT /testimonials/{id}
- DELETE /testimonials/{id}
- GET /contact

The response format should remain compatible with the current frontend pattern as much as possible.

---

## 10. Product and Variant Example Structure

### Example product
Name: Luxury Bedsheet Bundle
Category: Bedsheets
Description: Premium cotton bedsheet bundle with matching pillowcases
Variants:
- Double size with 2 pillow cases
- Queen size with 3 pillow cases
- King size with 4 pillow cases

### Example product
Name: Waterproof Mattress Cover
Category: Water Mattress Covers
Variants:
- Double size waterproof cover with 2 pillow cases
- Queen size waterproof cover with 2 pillow cases
- King size waterproof cover with 2 pillow cases

---

## 11. Payment and Ordering Plan (Planning Only)

The client specifically asked for a payment-oriented order flow. For planning purposes, the system can support this later in a second phase.

### Phase 1 plan
- keep the site as a lead-generation and catalog system

---

## 12. Frontend vs Backend TODOs

### Frontend TODOs (implement now)
- Update the public product catalog so pillowcases are bundled with bedsheets instead of listed as separate products.
- Show bedsheet variants with matching pillowcase counts:
  - Double size bedsheets with 2 pillow cases
  - Queen size bedsheets with 3 pillow cases
  - King size bedsheets with 4 pillow cases
- Add a Duvet Set section with separate options for:
  - Double/Queen size duvet set
  - King/Super King size duvet set
- Add a Curtains section with:
  - 2-in-1 curtains
  - 3-in-1 curtains
  - 4-in-1 curtains
- Rename "Mattress Covers" to "Water Mattress Covers" and display:
  - Double sized waterproof mattress cover with 2 pillow cases
  - Queen sized waterproof mattress cover with 2 pillow cases
  - King sized waterproof mattress cover with 2 pillow cases
- Add Sofa Covers to the catalog.
- Add Funnel Blankets to the catalog with:
  - Double/Queen sized funnel blankets (no pillow case)
  - King sized funnel blankets with 2 pillow cases
- Update the order flow/UI:
  - keep WhatsApp access if desired, but add a payment/order option that shows Momo details and bank payment details
  - include customer payment details entry or order instruction form on the frontend
  - clearly display payment instructions and notify the owner when payment is made (frontend should prepare a visible order submission flow)
- Update contact/branding details:
  - TikTok handle: @prestigenoblelady.luxury
  - Gmail address: Prestigenobleladyluxury@gmail.com
- Reserve space/placeholders for the client-design images once the client sends actual bedding design photos.

### Backend TODOs (future phase)
- Add product CRUD support for categories and bundled variants (bedsheets, duvet sets, curtains, water mattress covers, sofa covers, funnel blankets).
- Store and manage product images, variant details, and descriptions.
- Add order submission storage and payment notification support.
- Add a contact/order form API endpoint and admin panel view for submissions.
- Add admin support for managing payment instructions, Momo and bank account details, and order notification settings.
- Add optional order/payment records if the site transitions from a brochure/catalog to a transactional ordering system.

> Note: The current scope is frontend-only. Backend work should be planned later if the client wants a full order/payment backend system.
- show payment details such as Momo and bank account information
- allow the client to confirm orders manually

### Future phase
- add order submission
- add payment confirmation tracking
- notify the owner when payment is received

This is a future enhancement and should not block the first admin product system.

---

## 12. Content and Social Updates

The client also asked for updated:
- TikTok handle
- Gmail address

These can be handled in a small contact/social settings area later.

---

## 13. Suggested Implementation Order

1. Admin authentication
2. Product CRUD
3. Product images
4. Product variants
5. Testimonials CRUD
6. Contact submissions view
7. Optional payment/order flow later

---

## 14. Recommended Design Principle

Keep the system simple, flexible, and easy for the client to manage.

The admin panel should feel like:
- a content management system for products
- a lightweight business dashboard
- not a heavy e-commerce platform yet

---

## 15. Final Recommendation

The best approach is to build a simple admin CMS for products and testimonials first, then later add payment/order features if the business wants them.

This keeps the project scoped, practical, and easier to maintain.

---

## 16. Next Planning Step

The next useful discussion would be to define:
- the exact admin fields for each product type
- the exact variant format for each category
- whether the owner needs a simple list view or a more polished dashboard

If you want, I can next turn this into a more formal product requirements document or a wireframe-style admin page outline.
