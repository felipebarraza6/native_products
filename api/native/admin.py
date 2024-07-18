from django.contrib import admin
from api.native.models import Register, ImageGallery
from import_export.admin import ImportExportModelAdmin 
from import_export.admin import ExportActionMixin

@admin.register(Register)
#admin.site.register(Register, ImportExportModelAdmin)
class RegisterAdmin(admin.ModelAdmin):
    list_display = ('id', 'region', 'province', 'commune', 'pfnm', 'species', 'condition', 'format_comercial', 'unit', 'price_1', 'location_sale')
    #search_fields = ()
    list_filter = ('region', "province", "commune", "location", "pfnm", "species", "condition", "format_comercial", "unit", "price_1", "location_sale")

admin.site.register(ImageGallery, ImportExportModelAdmin)


# Register your models here.
