from django.db import models
from django.contrib.auth.models import User

class Hawker(models.Model):
    Name = models.CharField(max_length=100)
    Image = models.CharField(max_length=500)
    AddressLine1 = models.CharField(max_length=100)
    AddressLine2 = models.CharField(max_length=100)
    Postcode = models.IntegerField()
    OpeningTime = models.IntegerField()
    ClosingTime = models.IntegerField()
    AmIOpen = models.BooleanField(default=True)

class Favourites(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    favourites = models.ManyToManyField(User, related_name="favourite", blank=True)