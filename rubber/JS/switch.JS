  function checkDay() {
            const day = document.getElementById('dayInput').value.trim();
            let message;

            switch(day) {
                case 'Понедельник':
                    message = 'Сегодня понедельник';
                    break;
                case 'Вторник':
                    message = 'Сегодня вторник';
                    break;
                case 'Среда':
                    message = 'Сегодня среда';
                    break;
                case 'Четверг':
                    message = 'Сегодня четверг';
                    break;
                case 'Пятница':
                    message = 'Сегодня пятница';
                    break;
                case 'Суббота':
                case 'Воскресенье':
                    message = 'Выходной день!';
                    break;
                default:
                    message = 'Неизвестный день';
            }

            document.getElementById('result').textContent = message;
        }