<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Class Works</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            text-align: center;
        }

        header {
            text-align: center;
            padding: 20px 0;
            background-color: #f4f4f4;
            border-bottom: 2px solid #000;
        }

        h1 {
            margin: 0;
        }

        .projects {
            margin-top: 10px;
        }

        .projects button {
            padding: 10px 20px;
            cursor: pointer;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            transition: background-color 0.3s;
            margin: 0 10px;
        }

        .projects button:hover {
            opacity: 0.8;
        }

        .line {
            width: 80%;
            margin: 20px auto;
            border: 1px solid black;
        }

        .body-content {
            margin-top: 30px;
        }

        .body-content p {
            font-size: 18px;
        }
    </style>
</head>
<body>

    <header>
        <h1 id="title">Class Works</h1>

        <!-- Projects inside the header -->
        <div class="projects">
            <button onclick="changeColor('pink', 'lightpink')">Project 1</button>
            <button onclick="changeColor('green', 'lightgreen')">Project 2</button>
            <button onclick="changeColor('purple', 'lavender')">Project 3</button>
        </div>
    </header>

    <!-- Line in the body section -->
    <div class="line" id="line"></div>

    <div class="body-content">
        <p id="instruction">Click a project below to display it here:</p>
    </div>

    <script>
        function changeColor(bodyColor, titleColor) {
            // Hide the line as soon as a project is clicked
            document.getElementById('line').style.display = 'none';

            // Hide the instruction text as soon as a project is clicked
            document.getElementById('instruction').style.display = 'none';

            // Change body background color
            document.body.style.backgroundColor = bodyColor;
            // Change the title color
            document.getElementById('title').style.color = titleColor;
        }
    </script>

</body>
</html>
