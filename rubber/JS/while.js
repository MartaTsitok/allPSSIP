 function runLoops() {
            const input = document.getElementById('numInput').value;
            const n = parseInt(input, 10);

            if (isNaN(n) || n < 1) {
                alert('Пожалуйста, введите положительное целое число.');
                return;
            }

            // Цикл for
            let forOutput = '';
            for (let i = 1; i <= n; i++) {
                forOutput += i + ' ';
            }
            document.getElementById('forResult').textContent = forOutput.trim();

            // Цикл while
            let whileOutput = '';
            let j = 1;
            while (j <= n) {
                whileOutput += j + ' ';
                j++;
            }
            document.getElementById('whileResult').textContent = whileOutput.trim();

            // Цикл do...while
            let doWhileOutput = '';
            let k = 1;
            do {
                doWhileOutput += k + ' ';
                k++;
            } while (k <= n);
            document.getElementById('doWhileResult').textContent = doWhileOutput.trim();
        }