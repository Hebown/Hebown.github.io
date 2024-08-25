// source/js/theme-toggle.js
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    
    // 检查本地存储中是否有用户之前的选择
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      body.classList.add(savedTheme);
    } else {
      // 如果没有保存的主题，根据系统偏好设置默认主题
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark-mode');
      } else {
        body.classList.add('light-mode');
      }
    }
  
    // 切换模式的函数
    toggleButton.addEventListener('click', function () {
      if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
      } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
      }
    });
  });
  