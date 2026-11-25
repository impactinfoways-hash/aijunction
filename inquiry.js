const inquiryForm = document.querySelector('#inquiry-form');
const inquiryStatus = document.querySelector('#inquiry-status');
const submitInquiry = inquiryForm.querySelector('button[type="submit"]');

inquiryForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (submitInquiry.disabled) return;
  submitInquiry.disabled = true;
  inquiryStatus.hidden = false;
  inquiryStatus.removeAttribute('data-error');
  inquiryStatus.textContent = 'Sending your inquiry…';
  try {
    const response = await fetch(inquiryForm.action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(inquiryForm))),
    });
    const result = await response.json();
    if (!response.ok || result.ok !== true) throw new Error(result.message || 'Could not send your inquiry.');
    inquiryForm.reset();
    inquiryStatus.textContent = 'Your inquiry was received. Check your inbox for confirmation.';
  } catch (error) {
    inquiryStatus.dataset.error = '';
    inquiryStatus.textContent = error instanceof SyntaxError
      ? 'The form is unavailable right now. Please try again later.'
      : error.message || 'Could not send your inquiry. Please try again later.';
  } finally {
    submitInquiry.disabled = false;
  }
});
