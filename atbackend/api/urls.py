from django.urls import path
from api import views

urlpatterns=[
    path('hospital/',views.HospitalList.as_view()),
    path('ambulance/',views.AmbulanceList.as_view()),
]