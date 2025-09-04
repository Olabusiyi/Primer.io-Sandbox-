const { Primer } = window;

const submitBtn = document.getElementById('submit');
const message = document.getElementById('message');
const form = document.getElementById('payment-form');
const buttonText = submitBtn.querySelector('.button-text');
const checkoutContainer = document.getElementById('checkout-container');

// State mgt
let isProcessing = false;
let checkoutInstance = null;

function initCheckout() {
    console.log('Primer checkout initialized');
    showMessage('Ready to process your payment', 'info');
}
 
function showMessage(text, type = 'info') {
  message.textContent = text;
  message.className = `message ${type}`;

  // Auto-hide info messages after 3 seconds
  if (type === 'info') {
    setTimeout(() => {
      if (message.textContent === text) {
        message.textContent = '';
        message.className = 'message';
      }
    }, 3000);
  }
}

function setButtonState(processing) {
  isProcessing = processing;
  submitBtn.disabled = processing;

  if (processing) {
    buttonText.innerHTML = '<span class="spinner"></span>Processing...';
    submitBtn.classList.add('loading');
  } else {
    buttonText.textContent = 'Complete Payment';
    submitBtn.classList.remove('loading');
  }
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (isProcessing) return;

  setButtonState(true);
  showMessage('Creating secure payment session...', 'processing');

  try {
    const res = await fetch('/create-client-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`Server error: ${res.status}`);
    }

    const { clientToken } = await res.json();

    if (!clientToken) {
      throw new Error('No client token received');
    }

    showMessage('Loading payment form...', 'processing');

    // Clear placeholder content
    checkoutContainer.innerHTML = '';

    // Primer Universal Checkout
    checkoutInstance = Primer.showUniversalCheckout(clientToken, {
      container: '#checkout-container',
      onCheckoutComplete({ payment }) {
        showMessage('Payment successful! Redirecting...', 'success');
        console.log('Payment completed:', payment);

        // Simulate redirect after success
        setTimeout(() => {
          showMessage('Thank you for your purchase!', 'success');
          form.reset();
          checkoutContainer.innerHTML = `
            <div class="checkout-placeholder">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                <line x1="1" y1="10" x2="23" y2="10"/>
              </svg>
              <span>Payment form will appear here</span>
            </div>
          `;
        }, 2000);
      },
      onCheckoutFail(err) {
        showMessage(`Payment failed: ${err.message}`, 'error');
        console.error('Payment failed:', err);

        // Restore placeholder
        setTimeout(() => {
          checkoutContainer.innerHTML = `
            <div class="checkout-placeholder">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                <line x1="1" y1="10" x2="23" y2="10"/>
              </svg>
              <span>Payment form will appear here</span>
            </div>
          `;
        }, 3000);
      },
    });

    showMessage('Payment form loaded successfully', 'success');
  } catch (err) {
    console.error('Checkout error:', err);
    showMessage(`Error: ${err.message}`, 'error');
  } finally {
    setButtonState(false);
  }
});

// Initialize checkout on page load
document.addEventListener('DOMContentLoaded', initCheckout);
