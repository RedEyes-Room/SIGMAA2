from django.contrib import admin
from django.urls import path
from quiz import views
from django.views.generic import TemplateView

urlpatterns = [
    #path('', views.index, name="homequiz"),
    path('dashboard/', views.dashboard, name="dashboard"),
    path('instructions/', views.instructions, name="ins_url"),
    path('quiz/', views.quiz, name="quiz"),
    path('result/', views.result, name="result"),

    #url(r'^quiz', TemplateView.as_view(template_name='quiz.html'), name='quiz'),
]