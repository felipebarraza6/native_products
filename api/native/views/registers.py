"""View Clients."""
from rest_framework import viewsets, mixins, permissions
from django.http import JsonResponse
from rest_framework.response import Response
from api.native.models import Register, ImageGallery
from api.native.serializers import RegisterSerializer, ImageGallerySerializer 
from django_filters import rest_framework as filters
from rest_framework.decorators import action
from django.db.models import F
from rest_framework import status

class RegisterViewSet(mixins.RetrieveModelMixin,
                    mixins.ListModelMixin,
                    mixins.CreateModelMixin,
                    mixins.UpdateModelMixin,
                    mixins.DestroyModelMixin, viewsets.GenericViewSet,):
    queryset = Register.objects.all()
    serializer_class = RegisterSerializer 
    permission_classes = [permissions.AllowAny]
    filter_backends = (filters.DjangoFilterBackend,)
    lookup_field = 'id'

    class RegisterFilter(filters.FilterSet):
        class Meta:
            model = Register
            fields = {
                'region': ['icontains'],
                'province': ['icontains'],
                'commune': ['icontains'],
                'pfnm': ['icontains'],
                'condition': ['icontains'],
                'format_comercial': ['icontains'],
                'location': ['icontains'],
                'unit': ['icontains'],
                'species': ['icontains'],
                'price_1': ['icontains'],
                'date_1': ['icontains'],
                'price_2': ['icontains'],
                'date_2': ['icontains'],
                'price_3': ['icontains'],
                'date_3': ['icontains'],
                'price_4': ['icontains'],
                'date_4': ['icontains'],
                'volumen_proposition_aprox': ['icontains'],
                'location_sale': ['icontains'],
            }
    filterset_class = RegisterFilter
    

    @action(detail=False, methods=['get'])
    def unique_values(self, request):
        regions = set(Register.objects.values_list('region', flat=True))
        communes = set(Register.objects.values_list('commune', flat=True))
        provinces = set(Register.objects.values_list('province', flat=True))
        pfnms = set(Register.objects.values_list('pfnm', flat=True))
        conditions = set(Register.objects.values_list('condition', flat=True))
        format_comercials = set(Register.objects.values_list('format_comercial', flat=True))
        units = set(Register.objects.values_list('unit', flat=True))
        prices = set(Register.objects.values_list('price_1', flat=True))
        species = set(Register.objects.values_list('species', flat=True))
        locations = set(Register.objects.values_list('location', flat=True))
        locations_sales = set(Register.objects.values_list('location_sale', flat=True))

        data = {
            "regions": list(regions),
            "provinces": list(provinces),
            "communes": list(communes),
            "pfnms": list(pfnms),
            "conditions": list(conditions),
            "format_comercials": list(format_comercials),
            "units": list(units),
            "prices": list(prices),
            "species": list(species),
            "locations": list(locations),
            "locations_sales": list(locations_sales),
        }

        return Response(data, status=status.HTTP_200_OK)


class ImageGalleryViewSet(viewsets.GenericViewSet,
                    mixins.RetrieveModelMixin,
                    mixins.ListModelMixin,
                    mixins.CreateModelMixin,
                    mixins.UpdateModelMixin,
                    mixins.DestroyModelMixin):
    queryset = ImageGallery.objects.order_by('position').all()
    serializer_class = ImageGallerySerializer 
    permission_classes = [permissions.AllowAny]
    filter_backends = (filters.DjangoFilterBackend,)
    lookup_field = 'id'

    class ImageGalleryFilter(filters.FilterSet):
        class Meta:
            model = ImageGallery
            fields = {
                'name': ['icontains'],
            }
    filterset_class = ImageGalleryFilter



