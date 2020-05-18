from .models import ResponseQuiz
from rest_framework import serializers

class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResponseQuiz
        fields = '__all__'