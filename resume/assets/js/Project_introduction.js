const portfolioItems = [
    {  }
    // 可以繼續添加更多項目
    ];

// Function to generate and insert portfolio items
const generatePortfolioItems = (items) => {
    const container = document.getElementById('portfolio-items');
    container.innerHTML = ''; // 清空容器

    items.forEach(item => {
        // 檢查所有字段是否存在且不為NULL或undefined
        if (item.imgSrc && item.youtubeLink && item.innerPageLink && item.text) {
            const div = document.createElement('div');
            div.className = `col-lg-4 col-md-6 portfolio-item ${item.type}`;
            div.innerHTML = `
                <div class="portfolio-wrap">
                    <img src="${item.imgSrc}" class="img-fluid" alt="">
                    <div class="portfolio-links">
                        <a href="${item.youtubeLink}" title="More Details"><i class="bx bi-youtube"></i></a>
                        <a href="${item.innerPageLink}" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                </div>
                <strong><p class="center-text">${item.text}</p></strong>
            `;
            container.appendChild(div);
        }
    });
};

// 從API獲取數據並更新portfolioItems
const fetchProjects = () => {
    fetch('https://nodejs-server-web-tim2024ds-d9601f117ee2.herokuapp.com/api/projects')
        .then(response => response.json())
        .then(data => {
            const apiItems = data.map(project => ({
                imgSrc: project.imgadr,
                youtubeLink: project.YT_Address,
                innerPageLink: project.innerPageLink,
                text: project.project_name,
                type: project.project_type 
            }));
            // 合併apiItems與portfolioItems
            const allItems = [...portfolioItems, ...apiItems];
            // 更新DOM
            generatePortfolioItems(allItems);
        })
        .catch(error => console.error('Error fetching projects:', error));
};

// 調用fetchProjects以獲取數據並更新界面
fetchProjects();
