from .models import Hawker
from django.contrib.auth.models import User, Group
from rest_framework import serializers

# Our TodoSerializer
class HawkerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        # The model it will serialize
        model = Hawker
        # the fields that should be included in the serialized output
        fields = ['Name', 'Image', 'AddressLine1', 'AddressLine2', 'Postcode', 'OpeningTime', 'ClosingTime', 'AmIOpen']