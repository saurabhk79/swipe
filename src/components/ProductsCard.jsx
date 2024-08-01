import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { BiTrash } from "react-icons/bi";
import EditableField from "./EditableField";
import { Card } from "react-bootstrap";

const InvoiceProduct = (props) => {
  const { onProductsEdit, currency, onRowDel, products, onRowAdd } = props;

  const productTable = [
    {
      productId: 0,
      productName: "",
      productDescription: "",
      productPrice: "1.00",
      productQuantity: 1,
    },
  ].map((product) => (
    <ProductRow
      key={product.id}
      product={product}
      onDelEvent={onRowDel}
      onProductsEdit={onProductsEdit}
      currency={currency}
    />
  ));

  return (
    <Card className="p-4 p-xl-5 my-3 my-xl-4">
      <Table>
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th>QTY</th>
            <th>PRICE/RATE</th>
            <th className="text-center">ACTION</th>
          </tr>
        </thead>
        <tbody>{productTable}</tbody>
      </Table>
      <Button className="fw-bold" onClick={onRowAdd}>
        Add Product
      </Button>
    </Card>
  );
};

const ProductRow = (props) => {
  const onDelEvent = () => {
    props.onDelEvent(props.product);
  };
  return (
    <tr>
      <td style={{ width: "100%" }}>
        <EditableField
          onProductsEdit={(evt) =>
            props.onProductsEdit(evt, props.product.productId)
          }
          cellData={{
            type: "text",
            name: "productName",
            placeholder: "Product name",
            value: props.product.productName,
            id: props.product.productId,
          }}
        />
        <EditableField
          onProductsEdit={(evt) =>
            props.onProductsEdit(evt, props.product.productId)
          }
          cellData={{
            type: "text",
            name: "productDescription",
            placeholder: "Product description",
            value: props.product.productDescription,
            id: props.product.productId,
          }}
        />
      </td>
      <td style={{ minWidth: "70px" }}>
        <EditableField
          onProductsEdit={(evt) =>
            props.onProductsEdit(evt, props.product.productId)
          }
          cellData={{
            type: "number",
            name: "productQuantity",
            min: 1,
            step: "1",
            value: props.product.productQuantity,
            id: props.product.productId,
          }}
        />
      </td>
      <td style={{ minWidth: "130px" }}>
        <EditableField
          onProductsEdit={(evt) =>
            props.onProductsEdit(evt, props.product.productId)
          }
          cellData={{
            leading: props.currency,
            type: "number",
            name: "productPrice",
            min: 1,
            step: "0.01",
            presicion: 2,
            textAlign: "text-end",
            value: props.product.productPrice,
            id: props.product.productId,
          }}
        />
      </td>
      <td className="text-center" style={{ minWidth: "50px" }}>
        <BiTrash
          onClick={onDelEvent}
          style={{ height: "33px", width: "33px", padding: "7.5px" }}
          className="text-white mt-1 btn btn-danger"
        />
      </td>
    </tr>
  );
};

export default InvoiceProduct;
