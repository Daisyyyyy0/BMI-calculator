// var result = document.getElementById('BMI');


function calculate() {

    var height = document.querySelector('.height').value;
    var weight = document.querySelector('.weight').value;

    if (height == "") {
        alert('請記得輸入身高');
    } else if (weight == "") {
        alert('請記得輸入體重');
    }
    // else if(typeof(height) !== 'number' || typeof(weight) !== 'number'){
    // alert('欄位內請輸入數字，我們不收文字喔');
    // } 
    else {
        height = parseFloat(height);
        weight = parseFloat(weight);

        var BMI = Math.round((weight / Math.pow(height / 100, 2)) * 100) / 100;

        if (BMI < 18.5) {
            document.getElementById('BMI').textContent = BMI;
            document.getElementById('alert').textContent =
                '唉呀，你太瘦了！要多吃一點！';

        } else if (BMI >= 18.5 && BMI <= 23) {
            document.getElementById('BMI').textContent = BMI;
            document.getElementById('alert').textContent =
                '很棒！你的體重很正常，繼續維持吧！';

        } else if (BMI > 23 && BMI < 24) {
            document.getElementById('BMI').textContent = BMI;
            document.getElementById('alert').textContent =
                '快要壓線了，最近趕快多運動';

        } else if (BMI >= 24 && BMI < 30) {
            document.getElementById('BMI').textContent = BMI;
            document.getElementById('alert').textContent =
                '你胖了，手搖飲料跟炸物都不要再碰了好嗎，快去運動吧！';

        } else if (BMI >= 30) {
            document.getElementById('BMI').textContent = BMI;
            document.getElementById('alert').textContent =
                '你的肥胖已經是國家級警報的程度了，最好現在就趕緊出門跑步上健身房，不然肥胖疾病很快就會找上你！';

        } else if (BMI = NaN) {
            alert('欄位內請輸入數字，我們不收文字喔');
        }
    }

}




var count = document.querySelector('.count');
count.addEventListener('click', calculate, false);
