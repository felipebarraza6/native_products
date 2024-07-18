"""Drivers serializers."""
from rest_framework import serializers
from api.native.models import Register, ImageGallery 


class RegisterSerializer(serializers.ModelSerializer):
    """Register serializer."""
    class Meta:
        """Register Meta serializer."""
        model = Register 
        fields = '__all__'

class ImageGallerySerializer(serializers.ModelSerializer):
    """Image Gallery serializer."""
    class Meta:
        """Image Gallery Meta serializer."""
        model = ImageGallery 
        fields = '__all__'
