# La calculadora Estructura es:
- calculadora/
   * venv/
   - main.py
   - operaciones.py
   - test_operaciones.py
   - requirements.txt
## pasos
1. Crear entorno virtual: **python3 -m venv venv**
2. Activar entorno (linux/Mac): **source venv/bin/activate** 
3. Instalar paquetes:**pip install pytest pytest-html**
4. Guardar dependencias (muy importante): **pip freeze > requirements.txt**
## filtrar por tipo de test seria
- Tytest test_calculadora.py -v -m exception # por exceptios filtrado
- Test_calculadora.py -v -m smoke
