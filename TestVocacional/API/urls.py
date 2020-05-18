from rest_framework import routers
from .viewsets import QuizViewSet

router = routers.SimpleRouter()
router.register('quiz', QuizViewSet)

urlpatterns = router.urls