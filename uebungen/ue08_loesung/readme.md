# To-Do

1. Installiere folgende dependencies:
    - css-loader (lädt nur die css Dateien)
    - url-loader (über css können auch webfonts etc. geladen werden, aus diesem Grund der url-loader)
    - style-loader (für die verarbeitung der css files)
    - bootstrap

2. Modifiziere die webpack.config.js so das die loader für die jeweiligen dateien angewendet werden
    Hier die benötigten regex:
        - /\.css$/
        - /\.(png|woff|woff2|eot|ttf|svg)$

3. Importiere die public/app.js in der Index.html und untersuche das Dokument mit den Dev-Tools (head)