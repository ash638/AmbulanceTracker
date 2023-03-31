from django.contrib import admin
from .models import Hospital

@admin.register(Hospital)

class HospitalAdmin(admin.ModelAdmin):
    list_display=['id','hospital_name','hospital_city','hospital_distance','hospital_rating']



# Register your models here.
