from .serializers import HospitalSerializer
from rest_framework.generics import ListAPIView
from .models import Hospital

class HospitalList(ListAPIView):
    queryset=Hospital.objects.all()
    serializer_class=HospitalSerializer


# Create your views here.
