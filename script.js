function openEnquiry(product) {
    document.getElementById('productName').textContent = product;
    document.getElementById('enquiryForm').style.display = 'block';
}

document.getElementById('enquiryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const product = document.getElementById('productName').textContent;
    alert(`Enquiry submitted for ${product}\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    this.reset();
    this.style.display = 'none';
});