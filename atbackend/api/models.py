from django.db import models

# Create your models here.

class Hospital(models.Model):
    hospital_name=models.CharField(max_length=100)
    hospital_city=models.CharField(max_length=100)
    hospital_distance=models.CharField(max_length=50)
    hospital_rating=models.IntegerField(default=0,null=True,blank=True)
    hospital_images=models.ImageField(upload_to='api/hospital')
    hospital_location=models.CharField(max_length=100)

class Ambulance(models.Model):
    ambulance_type=models.CharField(max_length=100)
    ambulance_rating=models.IntegerField(default=0,null=True,blank=True)
    ambulance_time=models.CharField(max_length=100)
    ambulance_price=models.FloatField(default=0,null=True,blank=True)
    ambulance_images=models.ImageField(upload_to='api/ambulance')
    ambulance_drivernumber=models.IntegerField(default=0,null=True,blank=True)
