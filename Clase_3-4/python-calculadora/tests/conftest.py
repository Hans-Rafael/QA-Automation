import pytest
import logging

logger = logging.getLogger(__name__)

@pytest.fixture(autouse=True)
def log_test(request):
    logger.info(f"Test iniciando: {request.node.name}")
    yield
    logger.info(f"Test terminado: {request.node.name}")
