import db from "../config/database.js";

//Select all products
export const getProducts = (result) => {
  db.query(
    "SELECT prodID, prodName, descr, model, prodCharacter, price, prodLevel, url, quantity FROM products",
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

//Select single product
export const getProductById = (id, result) => {
  db.query(
    "SELECT prodID, prodName, descr, model, prodCharacter, price, prodLevel, url, quantity FROM products WHERE prodID = ?",
    [id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results[0]);
      }
    }
  );
};

//Insert Product
export const insertProduct = (data, result) => {
  db.query("INSERT INTO products SET ?;", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

//Update Product
export const updateProductById = (data, id, result) => {
  db.query(
    "UPDATE products SET prodName = ?, descr = ?, model = ?, prodCharacter = ?, price = ?, prodLevel = ?, url = ?, quantity = ? WHERE prodID = ?",
    [
      data.prodName,
      data.descr,
      data.model,
      data.prodCharacter,
      data.price,
      data.prodLevel,
      data.url,
      data.quantity,
      id,
    ],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

//Delete Product
export const deleteProductById = (id, result) => {
  db.query("DELETE FROM products WHERE prodID = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
