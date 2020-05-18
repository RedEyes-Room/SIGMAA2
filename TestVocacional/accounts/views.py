from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, logout as do_logout, login as do_login
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm

from accounts.forms import RegistrationForm, AccountAuthenticationForm

def index(request):
    return render(request, "base.html", {})


def register(request):
    context = {}
    if request.method == "POST":
        # Añadimos los datos recibidos al formulario
        form = RegistrationForm(data=request.POST)
        # Si el formulario es válido...
        if form.is_valid():
            # Creamos la nueva cuenta de usuario
            form.save()
            email = form.cleaned_data.get('email')
            raw_password = form.cleaned_data.get('password1')
            account = authenticate(email=email, password=raw_password)
            do_login(request, account)
            return redirect('dashboard')
        else:
            context = {'form': form}
    else: 
        form = RegistrationForm()
        context = {'form': form}

    # Si queremos borramos los campos de ayuda
    #form.fields['username'].help_text = None
    form.fields['email'].help_text = None
    form.fields['password1'].help_text = None
    form.fields['password2'].help_text = None

    # Si llegamos al final renderizamos el formulario
    return render(request, "register.html", context)

def login(request):
    context = {}
    user = request.user
    if user.is_authenticated:
        return redirect('dashboard')

    if request.method == "POST":
        # Añadimos los datos recibidos al formulario
        form = AccountAuthenticationForm(data=request.POST)
        # Si el formulario es válido...
        if form.is_valid():
            # Recuperamos las credenciales validadas
            email = request.POST['email']
            password = request.POST['password']

            # Verificamos las credenciales del usuario
            user = authenticate(email=email, password=password)

            # Si existe un usuario con ese nombre y contraseña
            if user:
                # Hacemos el login manualmente
                do_login(request, user)
                # Y le redireccionamos a la portada
                return redirect('dashboard')
    else:
        form = AccountAuthenticationForm()
    context = {'form': form}
    # Si llegamos al final renderizamos el formulario
    return render(request, "login.html", context)

def logout(request):
    # Finalizamos la sesión
    do_logout(request)
    # Redireccionamos a la portada
    return redirect('home')