function createLoginUI(config) {
    // Create main container
    const container = document.createElement('div');
    container.className = 'login-container';

    // Add logo if exists
    if (config.branding && config.branding.logo_url) {
        const logo = document.createElement('img');
        logo.src = config.branding.logo_url;
        logo.className = 'brand-logo';
        logo.alt = 'Logo';
        container.appendChild(logo);
    }

    // Add title
    const title = document.createElement('h1');
    title.textContent = config.prompt.screen.texts.title || 'Login';
    container.appendChild(title);

    // Add description
    const description = document.createElement('p');
    description.textContent = config.prompt.screen.texts.description;
    container.appendChild(description);

    // Add form
    const form = document.createElement('form');
    // Add other form fields here
    const inputUsername = document.createElement('input');
    inputUsername.type = 'text';
    inputUsername.placeholder = config.prompt.screen.texts.usernamePlaceholder;
    form.appendChild(inputUsername);

    const inputPassword = document.createElement('input');
    inputPassword.type = 'password';
    inputPassword.placeholder = config.prompt.screen.texts.passwordPlaceholder;
    form.appendChild(inputPassword);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = config.prompt.screen.texts.buttonText;
    form.appendChild(submitButton);

    container.appendChild(form);

    // Add sign-up link if enabled
    if (config.transaction.database_connection.signup_enabled) {
        const signupLink = document.createElement('div');
        signupLink.id = 'signup-link';
        const link = document.createElement('a');
        link.href = config.transaction.database_connection.signup_path;
        link.textContent = config.prompt.screen.texts.signupActionLinkText;
        signupLink.appendChild(link);
        container.appendChild(signupLink);
    }

    // Append the container to the body or any other desired parent element
    document.body.appendChild(container);
}

// Assuming universal_login_config is available globally
createLoginUI(universal_login_config);
