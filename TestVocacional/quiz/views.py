from django.shortcuts import render, redirect

from django.http import HttpResponse
from django.template import loader

# Create your views here.
def dashboard(request):
    # Si estamos identificados devolvemos la portada
    if request.user.is_authenticated:
        return render(request, "dashboard.html", {})
    # En otro caso redireccionamos al login
    return redirect('login_url')

def instructions(request):
    # Si estamos identificados devolvemos la portada
    if request.user.is_authenticated:
        return render(request, "ins.html", {})
    # En otro caso redireccionamos al login
    return redirect('login_url')

def quiz(request):
    # Si estamos identificados devolvemos la portada
    if request.user.is_authenticated:
        return render(request, "quiz.html", {})
    # En otro caso redireccionamos al login
    return redirect('login_url')


# Create your views here.
def result(request):
    # Si estamos identificados devolvemos la portada
    if request.POST:
        context = {'r1': request.POST['r1']}
        return render(request, "dashboard.html", context)