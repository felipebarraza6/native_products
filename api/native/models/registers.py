""" Clients."""
from django.db import models
from api.utils.models import ModelApi


class ImageGallery(ModelApi):
    """Categories Model."""
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='categories/', blank=True, null=True)
    position = models.IntegerField(default=0)

    def __str__(self):
        return str(self.name)


class Register(ModelApi):
    """Register Model."""
    region = models.CharField(
        max_length=255, blank=True, null=True, verbose_name='Región')
    region_lat = models.CharField(max_length=555, blank=True, null=True)
    region_long = models.CharField(max_length=555, blank=True, null=True)

    province = models.CharField(
        max_length=255, blank=True, null=True, verbose_name='Provincia')
    province_lat = models.CharField(max_length=555, blank=True, null=True)
    province_long = models.CharField(max_length=555, blank=True, null=True)

    commune = models.CharField(
        max_length=255, blank=True, null=True, verbose_name='Comuna')
    commune_lat = models.CharField(max_length=555, blank=True, null=True)
    commune_long = models.CharField(max_length=555, blank=True, null=True)

    location = models.CharField(
        max_length=255, blank=True, null=True, verbose_name='Localidad')

    pfnm = models.CharField(max_length=255, blank=True,
                            null=True, verbose_name='Pfmn')
    species = models.CharField(
        max_length=255, blank=True, null=True, verbose_name='Especie')
    condition = models.CharField(
        max_length=255, blank=True, null=True, verbose_name='Condición')
    format_comercial = models.CharField(
        max_length=255, blank=True, null=True, verbose_name='Formato Comercial')
    unit = models.CharField(max_length=255, blank=True,
                            null=True, verbose_name='Unidad')
    price_1 = models.CharField(
        max_length=255, blank=True, null=True, verbose_name='Precio')
    date_1 = models.CharField(max_length=300, blank=True, null=True)
    price_2 = models.CharField(max_length=255, blank=True, null=True)
    date_2 = models.CharField(max_length=300, blank=True, null=True)
    price_3 = models.CharField(max_length=255, blank=True, null=True)
    date_3 = models.CharField(max_length=300, blank=True, null=True)
    price_4 = models.CharField(max_length=255, blank=True, null=True)
    date_4 = models.CharField(max_length=300, blank=True, null=True)
    volumen_proposition_aprox = models.CharField(
        max_length=255, blank=True, null=True)
    location_sale = models.CharField(
        max_length=255, blank=True, null=True, verbose_name='Lugar de Venta')

    def __str__(self):
        return str(self.id)
