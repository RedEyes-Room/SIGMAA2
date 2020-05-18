from django.contrib import admin
from django.urls import path
from accounts import views

urlpatterns = [
    path('', views.index, name="home"),
    #path('dashboard/', views.dashboard, name="dashboard"),
    path('register/', views.register, name="register_url"),
    path('login/', views.login, name="login_url"),
    path('logout/', views.logout, name="logout_url"),
]