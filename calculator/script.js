const display = document.querySelector('.calculator-input'); // Hesap makinesi ekranını temsil eden HTML elementini seçiyoruz.
const keys = document.querySelector('.calculator-keys'); // Hesap makinesi tuşlarını temsil eden HTML elementini seçiyoruz.

let displayValue = '0'; // Ekranın mevcut değerini tutan değişken
let firstValue = null; // İlk değeri tutan değişken
let operator = null; // İşlem operatörünü tutan değişken
let waitingForSecondValue = false; // İkinci değeri bekleyip beklemediğimizi tutan değişken

updateDisplay(); // Ekranı güncellemek için updateDisplay fonksiyonunu çağırıyoruz

function updateDisplay() {
    display.value = displayValue; // Ekranın değerini güncelliyoruz
}

keys.addEventListener('click', function(e) {
    const element = e.target; // Tıklanan tuşu temsil eden HTML elementini alıyoruz

    if (!element.matches('button')) return; // Eğer tıklanan element bir tuş değilse fonksiyondan çıkıyoruz

    if(element.classList.contains('operator')) {
        handleOperator(element.value); // Eğer tıklanan tuş bir işlem operatörü ise handleOperator fonksiyonunu çağırıyoruz
        updateDisplay(); // Ekranı güncelliyoruz
        return;
    }

    if(element.classList.contains('decimal')) {
        inputDecimal(); // Eğer tıklanan tuş ondalık ayracı ise inputDecimal fonksiyonunu çağırıyoruz
        updateDisplay(); // Ekranı güncelliyoruz
        return;
    }

    if(element.classList.contains('clear')) {
        clear(); // Eğer tıklanan tuş "clear" ise clear fonksiyonunu çağırıyoruz
        updateDisplay();  // Ekranı güncelliyoruz
        return;
    }

    inputNumber(element.value); // Tıklanan tuş bir sayı tuşu ise inputNumber fonksiyonunu çağırıyoruz
    updateDisplay(); // Ekranı güncelliyoruz
});

function handleOperator(nextOperator) {
    const value = parseFloat(displayValue); // Ekranın değerini ondalık bir sayıya çeviriyoruz

    if(operator && waitingForSecondValue) {
        operator = nextOperator; // Eğer bir işlem operatörü daha önce seçildiyse ve ikinci değer bekleniyorsa, operatörü güncelliyoruz
        return;
    }

    if (firstValue === null) {
        firstValue = value; // İlk değeri henüz seçilmediyse, ekranın değerini ilk değer olarak atıyoruz
    } else if (operator) {
        const result = calculate(firstValue, value, operator); // İlk değer, mevcut değer ve işlem operatörünü kullanarak sonucu hesaplıyoruz

        displayValue = `${parseFloat(result.toFixed(7))}`; // Sonucu 7 basamaklı ondalık bir sayıya dönüştürüyoruz ve ekrana atıyoruz
        firstValue = result; // İlk değeri güncelliyoruz
    }

    waitingForSecondValue = true; // İkinci değeri bekliyoruz
    operator = nextOperator; // İşlem operatörünü güncelliyoruz

    console.log(displayValue, firstValue, operator, waitingForSecondValue);
}

function calculate(first, second, operator) {
    if(operator === '+') {
        return first + second; // Toplama işlemi
    } else if (operator === '-') {
        return first - second; // Çıkarma işlemi
    } else if (operator === '*') {
        return first * second // Çarpma işlemi
    } else if (operator === '/') {
        return first / second; // Bölme işlemi
    }
    return second;
}

function inputNumber(num) {
    if(waitingForSecondValue) {
        displayValue = num; // İkinci değeri bekliyorsak, ekranın değerini tıklanan sayıya ayarlıyoruz
        waitingForSecondValue = false; // İkinci değeri artık beklemediğimizi belirtiyoruz
    } else {
        displayValue = displayValue === '0'? num: displayValue + num; // Eğer ekranın değeri "0" ise tıklanan sayıyı ekranın değeri olarak ayarlıyoruz, aksi takdirde sayıyı ekranın değerine ekliyoruz
    }

    console.log(displayValue, firstValue, operator, waitingForSecondValue);
}

function inputDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.'; // Eğer ekranın değerinde ondalık ayracı yoksa, ondalık ayracı ekliyoruz
    }
}

function clear() {
    displayValue = '0'; // Ekranın değerini sıfırlıyoruz
}
