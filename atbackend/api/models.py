from django.db import models

# Create your models here.

class Hospital(models.Model):
    hospital_name=models.CharField(max_length=100)
    hospital_city=models.CharField(max_length=100)
    hospital_distance=models.CharField(max_length=50)
    hospital_rating=models.IntegerField(default=0,null=True,blank=True)
    hospital_images=models.CharField(max_length=200)
