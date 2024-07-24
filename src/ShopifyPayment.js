import { useEffect } from "react";
import PropTypes from "prop-types";
import ShopifyBuy from "@shopify/buy-button-js";

const client = ShopifyBuy.buildClient({
  domain: "the-hockey-shop-cad.myshopify.com",
  storefrontAccessToken: "6f2a16d8e844f494d92470c89e570481",
});

const ShopifyPayment = ({ productId }) => {
  useEffect(() => {
    const createCheckout = async () => {
      try {
        console.log("Creating checkout...");
        const checkout = await client.checkout.create();
        console.log("Checkout created:", checkout);

        const lineItemsToAdd = [
          {
            variantId: productId,
            quantity: 1,
          },
        ];
        console.log("Adding line items:", lineItemsToAdd);
        const checkoutWithLineItems = await client.checkout.addLineItems(
          checkout.id,
          lineItemsToAdd
        );
        console.log("Checkout with line items:", checkoutWithLineItems);

        // Open the checkout URL in a new tab for debugging
        window.open(checkoutWithLineItems.webUrl, "_blank");
      } catch (error) {
        console.error("Error creating checkout:", error);
      }
    };

    createCheckout();
  }, [productId]);

  return null;
};

ShopifyPayment.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default ShopifyPayment;
