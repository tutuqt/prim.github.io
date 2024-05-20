document.getElementById('forgot-password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    console.log('Password Reset Request:', email);
    alert('Password reset link has been sent to your email.');
});
