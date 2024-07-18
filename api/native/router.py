"""Urls Customers."""

# Django
from django.urls import include, path

# Django REST Framework
from rest_framework.routers import DefaultRouter

# Views
from api.native.views import (registers as views_registers)

router = DefaultRouter()

# Actions
router.register(r'registers', views_registers.RegisterViewSet, basename='registers')
router.register(r'image-gallery', views_registers.ImageGalleryViewSet, basename='image-gallery')

urlpatterns = [
    path('', include(router.urls))
]
