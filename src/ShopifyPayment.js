import { useEffect } from "react";
import PropTypes from "prop-types";
import ShopifyBuy from "@shopify/buy-button-js";

const client = ShopifyBuy.buildClient({
  domain: "www.thehockeyshop.com",
  storefrontAccessToken: "6f2a16d8e844f494d92470c89e570481",
});

const ShopifyPayment = ({ productId }) => {
  useEffect(() => {
    const createCheckout = async () => {
      try {
        const checkout = await client.checkout.create();

        const lineItemsToAdd = [
          {
            variantId: productId,
            quantity: 1,
          },
        ];

        const checkoutWithLineItems = await client.checkout.addLineItems(
          checkout.id,
          lineItemsToAdd
        );

        // Redirect to the checkout URL
        window.location.href = checkoutWithLineItems.webUrl;
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
