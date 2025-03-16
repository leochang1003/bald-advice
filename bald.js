function getAdvice() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const hairLoss = document.getElementById("hairLoss").value;
    let advice = '';

    if (name === "張行健") {
        advice = "死肥豬，沒救了！";
    }
    else if (name === "張翊") {
        advice = "哇！大帥哥完全不會有禿頭問題喔!";
    }
    else {
        const adviceList = {
            "1": "您目前沒有禿頭，保持健康的生活習慣可預防掉髮。",
            "2": "建議使用口服藥物（如非那雄胺）、生髮水或考慮植髮來預防惡化。",
            "3": "建議使用口服藥物搭配植髮手術，可顯著改善掉髮狀況。",
            "4": "可考慮植髮手術，但若供髮區不足，建議假髮或頭皮紋繡來改善外觀。"
        };
        advice = adviceList[hairLoss];
    }

    document.getElementById("advice").innerHTML = `<h3>建議：</h3><p>${advice}</p>`;
}