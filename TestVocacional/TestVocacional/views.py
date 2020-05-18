from django.http import HttpResponse
import datetime
from django.shortcuts import render
from django.contrib.auth.decorators import login_required

def Firstview(resquest):
    d=datetime.datetime.now()
    return render(resquest, "supersonic.html", {"Day":d})

@login_required
def home(request):
    return render(request, "home.html", {})