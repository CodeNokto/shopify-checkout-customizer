// Tilpasser Shopify checkout-side: legger til CSS-klasse, endrer bakgrunn og knappetekst.
// Bruk: Dynamisk modifikasjon av checkout for bedre kundeopplevelse.

document.addEventListener('DOMContentLoaded', function() {
  const checkoutElement = document.querySelector('#checkout');
  if (checkoutElement) {
    checkoutElement.classList.add('custom-checkout');
    checkoutElement.style.backgroundColor = '#f4f4f4';
    const button = checkoutElement.querySelector('button[type="submit"]');
    if (button) {
      button.textContent = 'Fullfør kjøp (tilpasset)';
    }
  } else {
    console.warn("Checkout-elementet ble ikke funnet.");
  }
});
