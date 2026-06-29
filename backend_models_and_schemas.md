# Prestige Noble Lady Luxury — SQLAlchemy Models and Pydantic Schemas

This file is a draft for the backend data model for products, product images, and product variants.

---

## 1. Recommended Database Structure

### Product
A product is a general listing such as:
- Bedsheets
- Duvet Sets
- Curtains
- Water Mattress Covers
- Sofa Covers
- Funnel Blankets

Each product can have many images and many variants.

### ProductVariant
Represents a specific size or bundle variation, such as:
- Double size bedsheets with 2 pillow cases
- Queen size bedsheets with 3 pillow cases
- King size bedsheets with 4 pillow cases

### ProductImage
Represents one image associated with a product.

---

## 2. SQLAlchemy Model Draft

```python
# app/models/product.py
import uuid
from datetime import datetime
from sqlalchemy import (
    Boolean,
    DateTime,
    ForeignKey,
    Integer,
    String,
    Text,
    UniqueConstraint,
)
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship


class Product(Base):
    __tablename__ = "products"

    id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), primary_key=True, default=uuid.uuid4
    )
    name: Mapped[str] = mapped_column(String(255), nullable=False)
    slug: Mapped[str] = mapped_column(String(255), unique=True, nullable=False)
    category: Mapped[str] = mapped_column(String(100), nullable=False)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)
    price: Mapped[float | None] = mapped_column(nullable=True)
    is_waterproof: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    updated_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
    )
    deleted_at: Mapped[datetime | None] = mapped_column(DateTime, nullable=True)

    images: Mapped[list["ProductImage"]] = relationship(
        back_populates="product",
        cascade="all, delete-orphan",
    )
    variants: Mapped[list["ProductVariant"]] = relationship(
        back_populates="product",
        cascade="all, delete-orphan",
    )


class ProductImage(Base):
    __tablename__ = "product_images"

    id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), primary_key=True, default=uuid.uuid4
    )
    product_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), ForeignKey("products.id", ondelete="CASCADE"), nullable=False
    )
    image_url: Mapped[str] = mapped_column(String(500), nullable=False)
    alt_text: Mapped[str | None] = mapped_column(String(255), nullable=True)
    sort_order: Mapped[int] = mapped_column(Integer, default=0, nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

    product: Mapped["Product"] = relationship(back_populates="images")


class ProductVariant(Base):
    __tablename__ = "product_variants"

    id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), primary_key=True, default=uuid.uuid4
    )
    product_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), ForeignKey("products.id", ondelete="CASCADE"), nullable=False
    )
    size: Mapped[str] = mapped_column(String(100), nullable=False)
    pillow_case_count: Mapped[int | None] = mapped_column(Integer, nullable=True)
    price: Mapped[float | None] = mapped_column(nullable=True)
    sku: Mapped[str | None] = mapped_column(String(100), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

    product: Mapped["Product"] = relationship(back_populates="variants")

    __table_args__ = (
        UniqueConstraint("product_id", "size", "pillow_case_count", name="uq_variant_per_product"),
    )
```

---

## 3. Pydantic Schemas Draft

```python
# app/schemas/product.py
from datetime import datetime
from typing import List, Optional
from uuid import UUID
from pydantic import BaseModel, Field


class ProductVariantBase(BaseModel):
    size: str
    pillow_case_count: Optional[int] = None
    price: Optional[float] = None
    sku: Optional[str] = None


class ProductVariantCreate(ProductVariantBase):
    pass


class ProductVariantRead(ProductVariantBase):
    id: UUID
    created_at: datetime


class ProductImageBase(BaseModel):
    image_url: str
    alt_text: Optional[str] = None
    sort_order: int = 0


class ProductImageCreate(ProductImageBase):
    pass


class ProductImageRead(ProductImageBase):
    id: UUID
    created_at: datetime


class ProductBase(BaseModel):
    name: str
    slug: str
    category: str
    description: Optional[str] = None
    price: Optional[float] = None
    is_waterproof: bool = False
    is_active: bool = True


class ProductCreate(ProductBase):
    images: List[ProductImageCreate] = Field(default_factory=list)
    variants: List[ProductVariantCreate] = Field(default_factory=list)


class ProductRead(ProductBase):
    id: UUID
    created_at: datetime
    updated_at: datetime
    images: List[ProductImageRead] = Field(default_factory=list)
    variants: List[ProductVariantRead] = Field(default_factory=list)
```

---

## 4. Example Data for Your Business Categories

### Bedsheets
Example variants:
- Double size bedsheets with 2 pillow cases
- Queen size bedsheets with 3 pillow cases
- King size bedsheets with 4 pillow cases

### Duvet Sets
Example variants:
- Double / Queen duvet set
- King / Super King duvet set

### Curtains
Example variants:
- 2 in 1 curtains
- 3 in 1 curtains
- 4 in 1 curtains

### Water Mattress Covers
Example variants:
- Double size waterproof mattress cover with 2 pillow cases
- Queen size waterproof mattress cover with 2 pillow cases
- King size waterproof mattress cover with 2 pillow cases

### Sofa Covers
Can be stored as a product with a simple variant set depending on sofa size.

### Funnel Blankets
Example variants:
- Double / Queen funnel blanket (no pillow case)
- King funnel blanket with 2 pillow cases

---

## 5. Suggested Product Categories

Use these as fixed values for the `category` field:

- Bedsheets
- Duvet Sets
- Curtains
- Water Mattress Covers
- Sofa Covers
- Funnel Blankets
- Testimonials

You can also keep a small controlled list in the frontend if you want consistency.

---

## 6. Notes for the Admin CRUD UI

The admin interface should let the owner:
- Create a product
- Upload multiple images
- Add variants
- Edit variant details
- Mark a product active/inactive
- Delete a product

This structure is flexible enough for your client’s current product list and future products.

---

## 7. Recommended Next Step

The next implementation step should be:
1. Create the SQLAlchemy models
2. Create Alembic migration
3. Add Pydantic schemas
4. Add FastAPI routers for CRUD
5. Connect the frontend to the new API

If you want, the next file can be a full FastAPI router draft for products using these models.
