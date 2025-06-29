  function runBreakExample() {
            const input = document.getElementById('stopNumber').value;
            const stopNum = parseInt(input, 10);
            if (isNaN(stopNum) || stopNum < 1 || stopNum > 10) {
                alert('Пожалуйста, введите число от 1 до 10.');
                return;
            }

            let output = '';
            for (let i = 1; i <= 10; i++) {
                if (i === stopNum) {
                    output += `[${i}] (стоп) `;
                    break; // досрочный выход из цикла
                }
                output += i + ' ';
            }

            document.getElementById('results').textContent = output.trim();
        }