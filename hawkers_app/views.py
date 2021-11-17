
from .models import Hawker
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import HawkerSerializer


class HawkersViewSet(viewsets.ModelViewSet):
    ## The Main Query for the index route
    queryset = Hawker.objects.all()
    # The serializer class for serializing output
    serializer_class = HawkerSerializer
    # optional permission class set permission level
    permission_classes = [permissions.AllowAny] 

