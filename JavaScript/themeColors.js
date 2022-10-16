function useThemesLight(){
    document.body.style.color = '#212529';
    document.body.style.backgroundColor = '#f1f5f9';
    
}

function useThemesDark(){
    document.body.style.color = '#f1f5f9';
    document.body.style.backgroundColor = '#212529';
}

document.getElementById('lightbtn').addEventListener('click', useThemesLight);
document.getElementById('darkbtn').addEventListener('click', useThemesDark);