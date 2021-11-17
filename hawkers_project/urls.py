
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from hawkers_app.views import HawkersViewSet

# create a new router
router = routers.DefaultRouter()
# register our viewsets
router.register(r'Hawkers', HawkersViewSet) #register "/Hawkers" routes


urlpatterns = [
    # add all of our router urls
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('', include('accounts.urls')),
]
