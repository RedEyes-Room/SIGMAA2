from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

# Create your models here.
class MyAccountManager(BaseUserManager):
    def create_user(self, email, username, name, lastname1, lastname2, age, password=None):
        if not email:
            raise ValueError("Debe contenter una dirección de correo eléctronico")
        
        user = self.model( 
            email=self.normalize_email(email),
            username=username,
            name=name,
            lastname1=lastname1,
            lastname2=lastname2,
            age=age,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, username, name, lastname1, lastname2, age, password):
        user = self.create_user(
            email=self.normalize_email(email),
            username=username,
            name=name,
            lastname1=lastname1,
            lastname2=lastname2,
            age=age,
            password=password,
        )
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

class Account(AbstractBaseUser):
    email = models.EmailField(verbose_name="email", max_length=60, unique=True )
    username = models.CharField(max_length=30, unique=True)
    name = models.CharField(max_length=40)
    lastname1 = models.CharField(max_length=30)
    lastname2 = models.CharField(max_length=30)
    age = models.IntegerField()
    date_joined = models.DateTimeField(verbose_name="date joined", auto_now_add=True)
    last_login = models.DateTimeField(verbose_name="last login", auto_now=True)
    is_admin = models.BooleanField(default=False)
    is_activate = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'name', 'lastname1', 'lastname2', 'age']

    objects = MyAccountManager()
    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True