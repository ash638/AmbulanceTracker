from rest_framework import serializers

from .models import Hospital
from .models import Ambulance

class HospitalSerializer(serializers.ModelSerializer):
    class Meta:
        model=Hospital
        fields=['id','hospital_name','hospital_city','hospital_distance','hospital_rating','hospital_images','hospital_location']

class AmbulanceSerializer(serializers.ModelSerializer):
    class Meta:
        model=Ambulance
        fields=['id','ambulance_time','ambulance_type','ambulance_rating','ambulance_price','ambulance_images','ambulance_drivernumber']