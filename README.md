# Super Piluka Game

¡Bienvenido a **Super Piluka Game**!  
Este es un juego web desarrollado con [Phaser](https://phaser.io/) para el frontend y [Flask](https://flask.palletsprojects.com/) para el backend. Los niveles del juego pueden gestionarse tanto desde un archivo JSON como desde un módulo Python, facilitando el desarrollo y la edición.

---

## Estructura del Proyecto

```
super_piluka_game/
├── frontend/              # JavaScript + Phaser
│   ├── index.html
│   ├── game.js
│   └── assets/            # Imágenes, sonidos, animaciones
├── backend/               # Python (Flask)
│   ├── app.py             # Lógica del juego y API REST
│   ├── levels.json        # Niveles en formato JSON
│   └── levels.py          # Niveles en formato Python
└── README.md              # Este archivo
```

---

## Instalación y Ejecución

### 1. Clona el Repositorio

```bash
git clone https://github.com/tu-usuario/super_piluka_game.git
cd super_piluka_game
```

### 2. Backend (Flask)

#### a. Instalación de dependencias

```bash
cd backend
python -m venv venv
source venv/bin/activate  # En Windows usa: venv\Scripts\activate
pip install flask
```

#### b. Ejecuta el servidor

```bash
python app.py
```

El backend estará disponible en [http://localhost:5000](http://localhost:5000)

> **Nota:** Puedes elegir entre usar los niveles desde `levels.json` o `levels.py` cambiando la variable `USE_JSON` en `app.py`.

### 3. Frontend (Phaser)

Abre un servidor local en la carpeta `frontend` (recomendado para evitar problemas de CORS). Por ejemplo:

- Usando VS Code: haz clic derecho en `index.html` y elige "Open with Live Server".
- O usa Python simple HTTP server:

```bash
cd frontend
python -m http.server 8000
```

Luego visita [http://localhost:8000](http://localhost:8000) en tu navegador.

---

## Uso de la API

- Obtener un nivel específico (por ID):
  ```
  GET /api/level/<level_id>
  ```
  Ejemplo: [http://localhost:5000/api/level/1](http://localhost:5000/api/level/1)

La respuesta será un JSON con los datos del nivel.

---

## Niveles

Puedes definir los niveles en dos archivos:

- **levels.json:** Ideal para edición rápida y externa.
- **levels.py:** Útil si quieres lógica Python o cargar los niveles desde código.

Cambia la variable `USE_JSON` en `backend/app.py` según el método que prefieras.

---

## Personalización

- Agrega tus imágenes, sprites y sonidos en `frontend/assets/`.
- Modifica la lógica del juego en `frontend/game.js`.
- Amplía la API o la lógica de niveles en `backend/app.py`, `levels.json` o `levels.py`.

---

## Créditos

- [Phaser](https://phaser.io/) para el motor de juegos 2D.
- [Flask](https://flask.palletsprojects.com/) para el backend en Python.

---

## Licencia

Este proyecto se distribuye bajo la licencia MIT.  
¡Siéntete libre de modificar, compartir y mejorar!

---
