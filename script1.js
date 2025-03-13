const works = {
    "task1": { "title": "Project 1", "url": "works/task1/index.html" },
    "task2": { "title": "Project 2", "url": "works/task2/index.html" },
    "task3": { "title": "Project 3", "url": "works/task3/index.html" },
};

function loadProject(task, bodyColor, titleColor) {
    document.getElementById('line').style.display = 'none';
    document.getElementById('instruction').style.display = 'none';
    document.body.style.backgroundColor = bodyColor;
    document.getElementById('title').style.color = titleColor;

    let frame = document.getElementById('projectFrame');
    frame.src = works[task].url;
    frame.style.display = 'block';
}
