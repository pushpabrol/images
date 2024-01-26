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
    else {
        const universal_login_config = {
            "application": {
                "id": "lFt4u93pZK5stEBT9Dt1rhxQuq286mgL",
                "name": "RWA",
                "metadata": {
                    "_uf_bundle_urls": "https://cdn.jsdelivr.net/gh/pushpabrol/images/main.76178d91.js",
                    "_uf_screens": "login,login-id",
                    "_uf_style_urls": "https://cdn.jsdelivr.net/gh/pushpabrol/images/main.ac030291.css"
                }
            },
            "branding": {
                "logo_url": "https://logo.clearbit.com/cmegroup.com"
            },
            "tenant": {
                "friendly_name": "CME Group",
                "support_email": "",
                "support_url": ""
            },
            "locale": "en",
            "prompt": {
                "name": "login",
                "screen": {
                    "name": "login",
                    "texts": {
                        "pageTitle": "Log in | RWA",
                        "title": "Welcome",
                        "description": "Log in to CME Group to continue to RWA.",
                        "separatorText": "Or",
                        "buttonText": "Continue",
                        "footerLinkText": "Sign up",
                        "signupActionLinkText": "Sign up",
                        "footerText": "Don't have an account?",
                        "signupActionText": "Don't have an account?",
                        "forgotPasswordText": "Forgot password?",
                        "passwordPlaceholder": "Password",
                        "usernamePlaceholder": "Username or email address",
                        "emailPlaceholder": "Email address",
                        "phonePlaceholder": "Phone number",
                        "usernameOnlyPlaceholder": "Username",
                        "phoneOrUsernameOrEmailPlaceholder": "Phone or Username or Email",
                        "phoneOrEmailPlaceholder": "Phone number or Email address",
                        "phoneOrUsernamePlaceholder": "Phone Number or Username",
                        "usernameOrEmailPlaceholder": "Username or Email address",
                        "editEmailText": "Edit",
                        "alertListTitle": "Alerts",
                        "invitationTitle": "You've Been Invited!",
                        "invitationDescription": "Log in to accept 's invitation to join CME Group on RWA.",
                        "logoAltText": "CME Group",
                        "showPasswordText": "Show password",
                        "hidePasswordText": "Hide password"
                    }
                }
            },
            "transaction": {
                "state": "hKFo2SBLcGl0V2NhSGJwOFY3dXAxOVF4aFJHc1RmT1J1eU5jLaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIHdzbWJpdUtITGNRN2FybG1iblpfRFdnSWM1ZU5BUlJUo2NpZNkgbEZ0NHU5M3BaSzVzdEVCVDlEdDFyaHhRdXEyODZtZ0w",
                "captcha": null,
                "database_connection": {
                    "id": "con_8TG7T51J4RMgdpMB",
                    "name": "Username-Password-Authentication",
                    "signup_enabled": true,
                    "signup_path": "/u/signup?state=hKFo2SBLcGl0V2NhSGJwOFY3dXAxOVF4aFJHc1RmT1J1eU5jLaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIHdzbWJpdUtITGNRN2FybG1iblpfRFdnSWM1ZU5BUlJUo2NpZNkgbEZ0NHU5M3BaSzVzdEVCVDlEdDFyaHhRdXEyODZtZ0w",
                    "forgot_password_enabled": true,
                    "forgot_password_path": "/u/login/password-reset-start/Username-Password-Authentication?state=hKFo2SBLcGl0V2NhSGJwOFY3dXAxOVF4aFJHc1RmT1J1eU5jLaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIHdzbWJpdUtITGNRN2FybG1iblpfRFdnSWM1ZU5BUlJUo2NpZNkgbEZ0NHU5M3BaSzVzdEVCVDlEdDFyaHhRdXEyODZtZ0w"
                },
                "federated_connections": [
                    {
                        "name": "google-oauth2",
                        "strategy": "google",
                        "friendly_name": "Google"
                    }
                ],
                "organizations": false,
                "request": {
                    "ip": "47.197.132.2",
                    "country": {
                        "name": "United States",
                        "code": "US",
                        "prefix": "1"
                    }
                },
                "errors": null,
                "params": {
                    "acr_values": [],
                    "login_hint": null,
                    "prompt": [],
                    "redirect_uri": "https://jwt.io",
                    "requested_scopes": [
                        "openid"
                    ],
                    "response_mode": null,
                    "response_type": [
                        "id_token"
                    ],
                    "state": "643490",
                    "ui_locales": []
                }
            }
        }
        createLoginUI(universal_login_config);
    }
});
