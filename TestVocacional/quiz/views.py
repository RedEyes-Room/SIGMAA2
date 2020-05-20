from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.template import loader
# Rest API
from API.models import ResponseQuiz
from API.serializer import QuizSerializer
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
import pandas as pd
import numpy as np

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
     # Query database
    query = ResponseQuiz.objects.filter(email=request.user.email).order_by('date_test')
    flag = False
    carer = ""
    carl = ""
    if len(query):
        flag = True

    if flag:
        # Serializer
        serializer = QuizSerializer(query[0])
        # Response key vector
        keys = [ "r1", "r2", "r3", "r4", "r5", "r6", "r7", "r8", "r9", "r10", "r11", "r12", 
                "r13", "r14", "r15", "r16", "r17", "r18", "r19", "r20", "r21", "r22", "r23", 
                "r24", "r25", "r26", "r27", "r28", "r29", "r30" ]
        # Response Values
        res = []
        for key in keys:
            res.append(serializer.data[key])
        # 1: Ingeniería en Datos 
        # 2: Ingeniería en logística 
        # 3: Ingeniería Ambiental 
        # 4: Ingeniería Industrial 
        # 5: Licenciatura en Turismo 
        # 6: Negocios Internacionales 
        labels = [1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6]
        unilab = [1,2,3,4,5,6]
        labcar = {1: "IDEIO", 2: "IL", 3: "IA", 4: "II", 5: "LT", 6: "NI"}
        carlab = {1: "Ingeniería en Datos", 2: "Ingeniería en logística ", 
                    3: "Ingeniería Ambiental ", 4: "Ingeniería Industrial ", 
                    5: "Licenciatura en Turismo ", 
                    6: "Negocios Internacionales"}
        # Dataframe
        d = {"res":res, "lab":labels}
        df = pd.DataFrame(data=d, dtype=np.int8)
        # Calculate Score
        win = 0
        bs_score = 0
        for i in unilab:
            dfc = df[df.lab==i]
            S = dfc["res"].sum()
            if S > bs_score:
                win = i
                bs_score = S
        carl = labcar[win]
        carer = carlab[win]

    context = { "flag": flag, "label": carl, "carrer": carer }
    return render(request, "result.html", context)