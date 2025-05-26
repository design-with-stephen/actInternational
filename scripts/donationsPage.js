const amountButtons = document.querySelectorAll('.amount-options button');
    const customAmountInput = document.getElementById('customAmount');
    const donationForm = document.getElementById('donationForm');
    const errorMessage = document.getElementById('errorMessage');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalMessage = document.getElementById('modalMessage');
    const confirmBtn = document.getElementById('confirmBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const paymentRadios = document.querySelectorAll('input[name="paymentMethod"]');
    const mobileNumberField = document.getElementById('mobileNumberField');
    const mobileNumberInput = document.getElementById('mobileNumber');

    let selectedAmount = null;

    amountButtons.forEach(button => {
      button.addEventListener('click', () => {
        customAmountInput.value = '';
        amountButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedAmount = parseFloat(button.dataset.amount);
        errorMessage.style.display = 'none';
      });
    });

    customAmountInput.addEventListener('input', () => {
      amountButtons.forEach(btn => btn.classList.remove('selected'));
      selectedAmount = null;
    });

    paymentRadios.forEach(radio => {
      radio.addEventListener('change', () => {
        if (radio.value === 'paypal') {
          mobileNumberField.style.display = 'none';
        } else {
          mobileNumberField.style.display = 'block';
        }
      });
    });

    donationForm.addEventListener('submit', e => {
      e.preventDefault();

      const name = donationForm.name.value.trim();
      const email = donationForm.email.value.trim();
      const frequency = donationForm.frequency.value;
      const paymentMethod = donationForm.paymentMethod.value;
      let amount = selectedAmount || parseFloat(customAmountInput.value);

      if (!name) return showError('Please enter your full name.');
      if (!validateEmail(email)) return showError('Please enter a valid email address.');
      if (!amount || amount < 1) return showError('Please select or enter a donation amount of at least $1.');
      if (paymentMethod !== 'paypal') {
        const mobile = mobileNumberInput.value.trim();
        if (!/^\+?\d{9,15}$/.test(mobile)) {
          return showError('Please enter a valid mobile number.');
        }
      }

      errorMessage.style.display = 'none';
      modalMessage.textContent = `You are about to donate $${amount.toFixed(2)} as a ${frequency} donation via ${paymentMethod.toUpperCase()}.`;
      modalOverlay.style.display = 'flex';
    });

    confirmBtn.addEventListener('click', () => {
      modalOverlay.style.display = 'none';
      alert('Thank you for your donation!');
      donationForm.reset();
      amountButtons.forEach(btn => btn.classList.remove('selected'));
      selectedAmount = null;
      mobileNumberField.style.display = 'block';
    });

    cancelBtn.addEventListener('click', () => {
      modalOverlay.style.display = 'none';
    });

    function showError(message) {
      errorMessage.textContent = message;
      errorMessage.style.display = 'block';
    }

    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }