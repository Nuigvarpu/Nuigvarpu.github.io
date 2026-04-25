-- Esquema sugerido para migrar la demo localStorage a una base de datos real.
-- No guardar CVV ni número completo de tarjeta.

CREATE TABLE categories (
  id VARCHAR(40) PRIMARY KEY,
  label_es VARCHAR(80) NOT NULL,
  label_en VARCHAR(80) NOT NULL
);

CREATE TABLE products (
  id VARCHAR(80) PRIMARY KEY,
  sku VARCHAR(120) UNIQUE NOT NULL,
  name VARCHAR(160) NOT NULL,
  category_id VARCHAR(40) REFERENCES categories(id),
  price_usd DECIMAL(10,2) NOT NULL,
  image_path VARCHAR(255),
  description_es TEXT,
  description_en TEXT,
  rating DECIMAL(2,1),
  stock INT NOT NULL DEFAULT 0,
  details_json JSON,
  status VARCHAR(30) NOT NULL DEFAULT 'active',
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE customers (
  id VARCHAR(80) PRIMARY KEY,
  name VARCHAR(160) NOT NULL,
  email VARCHAR(160),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE sales (
  id VARCHAR(80) PRIMARY KEY,
  customer_id VARCHAR(80) REFERENCES customers(id),
  status VARCHAR(40) NOT NULL,
  currency VARCHAR(3) NOT NULL,
  usd_cop_rate DECIMAL(12,2) NOT NULL,
  item_count INT NOT NULL,
  subtotal_usd DECIMAL(10,2) NOT NULL,
  shipping_usd DECIMAL(10,2) NOT NULL,
  total_usd DECIMAL(10,2) NOT NULL,
  subtotal_cop INT NOT NULL,
  shipping_cop INT NOT NULL,
  total_cop INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE sale_items (
  id VARCHAR(100) PRIMARY KEY,
  sale_id VARCHAR(80) REFERENCES sales(id),
  product_id VARCHAR(80) REFERENCES products(id),
  sku VARCHAR(120) NOT NULL,
  name VARCHAR(160) NOT NULL,
  category_id VARCHAR(40),
  qty INT NOT NULL,
  unit_price_usd DECIMAL(10,2) NOT NULL,
  total_usd DECIMAL(10,2) NOT NULL,
  unit_price_cop INT NOT NULL,
  total_cop INT NOT NULL
);

CREATE TABLE payments (
  id VARCHAR(80) PRIMARY KEY,
  sale_id VARCHAR(80) REFERENCES sales(id),
  method VARCHAR(40) NOT NULL,
  method_label VARCHAR(120) NOT NULL,
  provider VARCHAR(80),
  card_brand VARCHAR(40),
  card_first4 CHAR(4),
  amount_usd DECIMAL(10,2) NOT NULL,
  amount_cop INT NOT NULL,
  status VARCHAR(40) NOT NULL,
  note TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE inventory_movements (
  id VARCHAR(100) PRIMARY KEY,
  product_id VARCHAR(80) REFERENCES products(id),
  sale_id VARCHAR(80) REFERENCES sales(id),
  type VARCHAR(40) NOT NULL,
  qty_change INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
