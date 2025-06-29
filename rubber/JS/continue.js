function showNumbers() {
      const input = document.getElementById('numInput').value;
      const n = parseInt(input, 10);
      const resultList = document.getElementById('resultList');
      resultList.innerHTML = '';

      if (isNaN(n) || n < 1) {
        alert('Пожалуйста, введите число 1 или больше.');
        return;
      }

      for (let i = 1; i <= n; i++) {
        if (i % 3 === 0) {
          // Пропускаем числа, кратные 3, но добавим их с особым стилем
          const li = document.createElement('li');
          li.textContent = i + ' (пропущено)';
          li.classList.add('skipped');
          resultList.appendChild(li);
          continue; // переходим к следующей итерации
        }
        // Обычные числа
        const li = document.createElement('li');
        li.textContent = i;
        resultList.appendChild(li);
      }
    }