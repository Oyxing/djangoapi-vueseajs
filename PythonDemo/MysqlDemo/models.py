from django.db import models

# Create your models here.
class Mysql(models.Model):
    name = models.CharField(max_length=20)
    email = models.EmailField()
    age = models.IntegerField()
    pwd = models.CharField(max_length=20)