// UniversalLoginConfig.js
function createLoginUI(universal_login_config) {
    const container = document.createElement('div');
    container.className = 'container login-container';

    // Create the logo
    const logo = document.createElement('img');
    logo.src = universal_login_config.branding.logo_url;
    logo.alt = universal_login_config.prompt.screen.texts.logoAltText;
    container.appendChild(logo);

    // Create the title
    const title = document.createElement('h1');
    title.textContent = universal_login_config.prompt.screen.texts.title;
    container.appendChild(title);

    // Create the description
    const description = document.createElement('p');
    description.textContent = universal_login_config.prompt.screen.texts.description;
    container.appendChild(description);

    // Create the main login form
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = `/u/${universal_login_config.prompt.name}?state=${universal_login_config.transaction.state}`;

    // Username or Email Field
    const usernameInput = document.createElement('input');
    usernameInput.setAttribute('type', 'text');
    usernameInput.setAttribute('name', 'username');
    usernameInput.setAttribute('placeholder', universal_login_config.prompt.screen.texts.usernamePlaceholder);
    form.appendChild(usernameInput);

    // Password Field
    const passwordInput = document.createElement('input');
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('name', 'password');
    passwordInput.setAttribute('placeholder', universal_login_config.prompt.screen.texts.passwordPlaceholder);
    form.appendChild(passwordInput);

    // hidden state
    const hiddenStateInput = document.createElement('input');
    hiddenStateInput.setAttribute('type', 'hidden');
    hiddenStateInput.setAttribute('name', 'state');
    hiddenStateInput.value = universal_login_config.transaction.state;
    form.appendChild(hiddenStateInput);

    // Submit Button
    const submitButton = document.createElement('button');
    submitButton.textContent = universal_login_config.prompt.screen.texts.buttonText;
    form.appendChild(submitButton);

    container.appendChild(form);

        // Signup Link
        if (universal_login_config.transaction.database_connection.signup_enabled) {
            const signupLink = document.createElement('a');
            signupLink.href = universal_login_config.transaction.database_connection.signup_path;
            signupLink.textContent = universal_login_config.prompt.screen.texts.signupActionLinkText;
            container.appendChild(signupLink);
        }
    
        // Forgot Password Link
        if (universal_login_config.transaction.database_connection.forgot_password_enabled) {
            const forgotPasswordLink = document.createElement('a');
            forgotPasswordLink.href = universal_login_config.transaction.database_connection.forgot_password_path;
            forgotPasswordLink.textContent = universal_login_config.prompt.screen.texts.forgotPasswordText;
            container.appendChild(forgotPasswordLink);
    
        }
    

    // Federated Connections
    universal_login_config.transaction.federated_connections.forEach(connection => {
        const federatedForm = document.createElement('form');
        federatedForm.method = 'POST';
        federatedForm.action = '/login';

        const hiddenConnectionInput = document.createElement('input');
        hiddenConnectionInput.setAttribute('type', 'hidden');
        hiddenConnectionInput.setAttribute('name', 'connection');
        hiddenConnectionInput.value = connection.name;
        federatedForm.appendChild(hiddenConnectionInput);

        const hiddenStateInput = document.createElement('input');
        hiddenStateInput.setAttribute('type', 'hidden');
        hiddenStateInput.setAttribute('name', 'state');
        hiddenStateInput.value = universal_login_config.transaction.state;
        federatedForm.appendChild(hiddenStateInput);

        const federatedButton = document.createElement('button');
        federatedButton.textContent = connection.friendly_name;
        federatedForm.appendChild(federatedButton);

        container.appendChild(federatedForm);
    });

    const body = document.body;
    body.appendChild(container);
}

document.addEventListener('DOMContentLoaded', function() {
    if (window.universal_login_config) {
        createLoginUI(window.universal_login_config);
    }
    
});
