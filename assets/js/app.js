const createForm = function(){
    let form = document.createElement('div');
    form.classList.add('action-form');

    let form_header = document.createElement('div');
    form_header.classList.add('action-form-head');
    let form_header_cancel_btn = document.createElement('a');
    form_header_cancel_btn.classList.add('action-form-cancel-btn');
    form_header_cancel_btn.innerHTML = '<span class="material-symbols-outlined">close</span>';
    form_header_cancel_btn.onclick = function(){
        form.remove();
    }
    let form_header_placeholder = document.createElement('div');
    form_header_placeholder.classList.add('action-form-header-placeholder');
    form_header_placeholder.innerText = 'Send a request for Beta version';
    form_header.append(form_header_placeholder);
    form_header.append(form_header_cancel_btn);

    let form_body = document.createElement('div');
    form_body.classList.add('action-form-body');
    let form_body_form = document.createElement('form');
    form_body_form.classList.add('action-form-form-element');
    let form_body_form_input_name = document.createElement('input');
    form_body_form_input_name.classList.add('action-form-input','input-name');
    let form_body_form_input_email = document.createElement('input');
    form_body_form_input_name.setAttribute('placeholder', 'John Doe');
    form_body_form_input_name.setAttribute('name', 'name');
    form_body_form_input_email.classList.add('action-form-input','input-email');
    form_body_form_input_email.setAttribute('placeholder', 'somemail@example.com');
    form_body_form_input_email.setAttribute('name', 'email');
    let form_body_form_input_name_label = document.createElement('fieldset');
    let form_body_form_input_name_label_text = document.createElement('legend');
    form_body_form_input_name_label_text.innerText = 'Enter your name';
    let form_body_form_input_email_label = document.createElement('fieldset');
    let form_body_form_input_email_label_text = document.createElement('legend');
    form_body_form_input_email_label_text.innerText = 'Enter your email';
    let form_body_form_input_btn = document.createElement('a');
    form_body_form_input_btn.classList.add('btn','btn-send-form');
    form_body_form_input_btn.innerText = 'Send Request';
    form_body_form_input_email_label.append(form_body_form_input_email);
    form_body_form_input_email_label.append(form_body_form_input_email_label_text);
    form_body_form_input_name_label.append(form_body_form_input_name);
    form_body_form_input_name_label.append(form_body_form_input_name_label_text);
    form_body_form.append(form_body_form_input_name_label);
    form_body_form.append(form_body_form_input_email_label);
    form_body_form.append(form_body_form_input_btn);
    form_body.append(form_body_form);
    form.append(form_header);
    form.append(form_body);
    document.body.append(form);
}