const VALIDATION_MESSAGES = {
    name: {
        required: "Please enter your name",
        minLength: "Name must be at least 2 characters long",
        maxLength: "Name must not exceed 50 characters"
    },
    email: {
        required: "Please enter your email address",
        invalid: "Please enter a valid email address"
    },
    message: {
        required: "Please enter your message",
        minLength: "Message must be at least 10 characters long",
        maxLength: "Message must not exceed 500 characters"
    }
};

const contactForm = document.querySelector('.contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

function createErrorElement(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#ff3366';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    errorDiv.style.transition = 'all 0.3s ease';
    errorDiv.textContent = message;
    return errorDiv;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateInput(input, validations) {
    const value = input.value.trim();
    let errorMessage = '';

    
    const existingError = input.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    
    input.style.borderColor = '';
    input.style.boxShadow = '';

    
    if (!value) {
        errorMessage = VALIDATION_MESSAGES[input.id].required;
    } 
    
    else if (input.id === 'name') {
        if (value.length < 2) {
            errorMessage = VALIDATION_MESSAGES.name.minLength;
        } else if (value.length > 50) {
            errorMessage = VALIDATION_MESSAGES.name.maxLength;
        }
    }
    
    else if (input.id === 'email' && !isValidEmail(value)) {
        errorMessage = VALIDATION_MESSAGES.email.invalid;
    }
    
    else if (input.id === 'message') {
        if (value.length < 10) {
            errorMessage = VALIDATION_MESSAGES.message.minLength;
        } else if (value.length > 500) {
            errorMessage = VALIDATION_MESSAGES.message.maxLength;
        }
    }

    
    if (errorMessage) {
        input.style.borderColor = '#ff3366'; // accent-red
        input.style.boxShadow = '0 0 5px rgba(255, 51, 102, 0.5)';
        const errorElement = createErrorElement(errorMessage);
        input.parentElement.appendChild(errorElement);
        return false;
    }

    
    input.style.borderColor = '#00ff9d'; // accent-neon
    input.style.boxShadow = '0 0 5px rgba(0, 255, 157, 0.5)';
    return true;
}


nameInput.addEventListener('input', () => validateInput(nameInput));
emailInput.addEventListener('input', () => validateInput(emailInput));
messageInput.addEventListener('input', () => validateInput(messageInput));


contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    
    const isNameValid = validateInput(nameInput);
    const isEmailValid = validateInput(emailInput);
    const isMessageValid = validateInput(messageInput);

    
    if (isNameValid && isEmailValid && isMessageValid) {
        
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.style.backgroundColor = '#00ff9d';
        successMessage.style.color = '#1a1a2e';
        successMessage.style.padding = '1rem';
        successMessage.style.borderRadius = '5px';
        successMessage.style.marginTop = '1rem';
        successMessage.style.textAlign = 'center';
        successMessage.textContent = 'Message sent successfully!';

        
        const existingSuccess = contactForm.querySelector('.success-message');
        if (existingSuccess) {
            existingSuccess.remove();
        }

        contactForm.appendChild(successMessage);
        contactForm.reset();

        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    }
});