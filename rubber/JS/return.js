function validateForm(event) {
      event.preventDefault(); // отменяем стандартную отправку формы

      const msgEl = document.getElementById('message');
      msgEl.textContent = '';
      msgEl.className = '';

      const username = document.getElementById('username').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;

      if (username.length < 3) {
        msgEl.textContent = 'Имя пользователя должно содержать минимум 3 символа.';
        msgEl.className = 'error';
        return; // досрочно выходим, дальше не проверяем
      }

      if (!validateEmail(email)) {
        msgEl.textContent = 'Пожалуйста, введите корректный email.';
        msgEl.className = 'error';
        return;
      }

      if (password.length < 6) {
        msgEl.textContent = 'Пароль должен содержать минимум 6 символов.';
        msgEl.className = 'error';
        return;
      }

      // Если все проверки пройдены — показываем успех
      msgEl.textContent = 'Регистрация прошла успешно!';
      msgEl.className = 'success';

      // Здесь можно добавить отправку данных на сервер, очистку формы и т.п.
      return true; // можно вернуть true для формы, но мы уже отменили submit
    }

    function validateEmail(email) {
      // Простая проверка email через регулярку
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }