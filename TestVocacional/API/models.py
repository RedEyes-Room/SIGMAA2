from django.db import models

# Create your models here.
class ResponseQuiz(models.Model):
    email = models.EmailField(verbose_name="email", max_length=60)
    r1 = models.CharField(max_length=20)
    r2 = models.CharField(max_length=20)
    r3 = models.CharField(max_length=20)
    r4 = models.CharField(max_length=20)
    r5 = models.CharField(max_length=20)
    r6 = models.CharField(max_length=20)
    r7 = models.CharField(max_length=20)
    r8 = models.CharField(max_length=20)
    r9 = models.CharField(max_length=20)
    r10 = models.CharField(max_length=20)
