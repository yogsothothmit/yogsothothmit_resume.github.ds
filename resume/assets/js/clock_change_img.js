function applyTimeBasedClass() {
    const now = new Date();
    const hours = now.getHours();
    const heroSection = document.getElementById('hero');

    // 清除之前應用的時間類
    heroSection.classList.remove('morning', 'afternoon', 'evening');

    // 根據當前時間添加相應的類
    if (hours >= 6 && hours < 11) {
        heroSection.classList.add('morning');
        //console.log('morning');
    }else if (hours >= 11 && hours < 14) {
        heroSection.classList.add('afternoon');
        //console.log('afternoon');
    } else if (hours >= 14 && hours < 18) {
        heroSection.classList.add('afternoon');
        //console.log('afternoon');
    } else {
        heroSection.classList.add('evening');
        //console.log('evening');
    }
}

// 頁面加載完成後立即執行
window.onload = applyTimeBasedClass;
