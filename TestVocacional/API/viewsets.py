from rest_framework import viewsets
from .models import ResponseQuiz
from .serializer import QuizSerializer

class QuizViewSet(viewsets.ModelViewSet):
    queryset = ResponseQuiz.objects.all()
    serializer_class = QuizSerializer