document.addEventListener('DOMContentLoaded', () => {
    // 獲取表單元素和按鈕
    const formSections = document.querySelectorAll('.booking-list');
    const consentCheckbox = document.getElementById('consent');
    const submitButton = document.querySelector('.submit-reservation-btn');
    submitButton.addEventListener('click', (event) => {

        //阻止按鈕的默認行為
        event.preventDefault(); 

        //儲存錯誤訊息
        let errorMessages = [];
        
        //檢查必填欄位
        formSections.forEach(section => {
            const inputs = section.querySelectorAll('input, select');
            inputs.forEach(input => {
                if (input.value.trim() === '' || input.value === '-') {
                    const label = section.querySelector(`label[for="${input.id}"]`).textContent;
                    errorMessages.push(`${label}尚未填寫。`);
                }
            });
        });

        //驗證姓名
        const nameInput = document.getElementById('name');
        if (nameInput.value.trim() !== '') {
            const namePattern = /^[\u4e00-\u9fa5a]+$/; // \u4e00-\u9fa5中文漢字Unicode範圍
            if (!namePattern.test(nameInput.value.trim())) {
                errorMessages.push('姓名僅能填寫中文。');
            }
        }

        //驗證手機號碼格式
        const phoneInput = document.getElementById('phone');
        if (phoneInput.value.trim() !== '') {
            const phonePattern = /^09\d{8}$/; 
            if (!phonePattern.test(phoneInput.value.trim())) {
                errorMessages.push('手機號碼格式錯誤。');
            }
        }

        //檢查方塊
        if (!consentCheckbox.checked) {
            errorMessages.push('請閱讀相關事項並勾選【我已了解相關規範並遵守】。');
        }

        //處理驗證結果
        if (errorMessages.length > 0) {
            alert('訂位資訊有誤，請檢查以下項目：\n\n' + errorMessages.join('\n'));
        } else {
            alert('訂位成功，歡迎您的光臨。');
            //清空填寫內容
            nameInput.value = '';
            phoneInput.value = '';
            document.getElementById('people').value = '-';
            document.getElementById('date').value = '';
            document.getElementById('time').value = '-';
            consentCheckbox.checked = false;
        }
    });
});