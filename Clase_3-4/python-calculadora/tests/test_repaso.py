import pytest
from calculadora import sumar, restar, multiplicar, dividir
import logging

logger = logging.getLogger(__name__)

# ----- FIXTURES -----

@pytest.fixture
def enteros():
    """Dos enteros comunes para pruebas."""
    return 20, 5

@pytest.fixture
def decimales():
    """Dos números decimales para pruebas de precisión."""
    return 0.1, 0.2


# ----- SUMAR -----
@pytest.mark.smoke
@pytest.mark.parametrize("a, b, esperado", [
    pytest.param(20, 5, 25, id="enteros_positivos"),
    pytest.param(-1, -1, -2, id="enteros_negativos"),
    pytest.param(2.5, 0.5, 3.0, id="decimales"),
])
def test_sumar_exito(a, b, esperado):
    assert sumar(a, b) == pytest.approx(esperado)

@pytest.mark.smoke
def test_sumar_decimales(decimales):
    a, b = decimales
    resultado = sumar(a, b)
    logger.info(f"Probando suma: {a} + {b} = {resultado:.1f}")
    assert pytest.approx(resultado) == 0.3

@pytest.mark.exception
@pytest.mark.parametrize("a, b", [
    ("10", 5),
    (None, 5),
], ids=["error_string", "error_none"])
def test_sumar_error_tipos(a, b):
    with pytest.raises(TypeError):
        sumar(a, b)

@pytest.mark.exception
@pytest.mark.parametrize("a, b", [
    ("100", 50),
    (None, 5),
], ids=["error_string", "error_none"])
def test_restar_error_tipos(a, b):
    with pytest.raises(TypeError):
        restar(a, b)

# ----- RESTAR -----
@pytest.mark.parametrize("a, b, esperado", [
    pytest.param(20, 5, 15, id="enteros_positivos"),
    pytest.param(-1, -1, 0, id="enteros_negativos"),
    pytest.param(2.5, 0.5, 2.0, id="decimales"),
])
def test_restar_exito(a, b, esperado):
    assert restar(a, b) == pytest.approx(esperado)


# ----- MULTIPLICAR -----
def test_multiplicar_exito(enteros):
    a, b = enteros
    assert multiplicar(a, b) == 100

@pytest.mark.exception
def test_multiplicar_error_tipos():
    with pytest.raises(TypeError):
        multiplicar(None, 5)


# ----- DIVIDIR -----
def test_dividir_exito(enteros):
    a, b = enteros
    assert dividir(a, b) == 4

@pytest.mark.exception
def test_dividir_por_cero():
    with pytest.raises(ValueError) as excinfo:
        dividir(1, 0)
    assert "No se puede dividir por cero" in str(excinfo.value)
