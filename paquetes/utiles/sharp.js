const sharp = require('sharp');

sharp('/Users/kevin/Cursos/Fundamentos_nodejs/paquetes/utiles/original.png',)
    .resize(80)
        .toFile('/Users/kevin/Cursos/Fundamentos_nodejs/paquetes/utiles/resized.png')