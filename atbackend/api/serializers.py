from rest_framework import serializers

from .models import Hospital

class HospitalSerializer(serializers.ModelSerializer):
    class Meta:
        model=Hospital
        fields=['id','hospital_name','hospital_city','hospital_distance','hospital_rating']