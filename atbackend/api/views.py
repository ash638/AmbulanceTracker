from .serializers import HospitalSerializer
from .serializers import AmbulanceSerializer
from rest_framework.generics import ListAPIView
from .models import Hospital
from .models import Ambulance

class HospitalList(ListAPIView):
    queryset=Hospital.objects.all()
    serializer_class=HospitalSerializer

class AmbulanceList(ListAPIView):
    queryset=Ambulance.objects.all()
    serializer_class=AmbulanceSerializer



# Create your views here.
