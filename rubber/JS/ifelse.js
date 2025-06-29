function checkNumber() {
            const input = document.getElementById('numberInput').value;
            const num = Number(input);
            let message;

            if (isNaN(num)) {
                message = 'Пожалуйста, введите корректное число.';
            } else if (num > 0) {
                message = 'Число положительное.';
            } else if (num < 0) {
                message = 'Число отрицательное.';
            } else {
                message = 'Число равно нулю.';
            }

            document.getElementById('resulting').textContent = message;
        }