from django.contrib import admin
from .models import Hospital
from .models import Ambulance

admin.site.register(Hospital)
admin.site.register(Ambulance)


