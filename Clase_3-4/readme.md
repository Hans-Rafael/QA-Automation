# La calculadora Estructura es:
- calculadora/
   * venv/
   - main.py
   - operaciones.py
   - test_calculadora.py
   - requirements.txt
## pasos primera vez
1. Crear entorno virtual: **python3 -m venv venv**
2. Activar entorno (linux/Mac) desde la carpeta raiz: **source venv/bin/activate** 
3. Instalar paquetes:**pip install pytest pytest-html**
4. Guardar dependencias (muy importante): **pip freeze > requirements.txt**
## pasos para entrar al entorno virtual ir a carpeta raiz
- source venv/bin/activate    (deactivate)
## Ejecucion de pruebas
Desde la carpeta tests
- pytest -v (ejecuta los files con prefijo test_) ó pytest -v test_nombre_prueba.py -v
## filtrar por tipo de test seria
- pytest test_calculadora.py -v -m exception
- pytest Test_calculadora.py -v -m smoke
## Generar reporte html
- pytest--html=report.html
## Pare ver los logs
desde la raiz  del proyecto mejor: python -m pytest tests/test_repaso.py -v

- pytest --log-cli-level=INFO (por comando)
- logger.debug() (detalles tecnicos) 
- logger.error() (Fallos criticos)
