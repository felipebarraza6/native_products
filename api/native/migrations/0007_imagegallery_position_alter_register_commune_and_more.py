# Generated by Django 5.0.7 on 2024-07-15 04:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('native', '0006_rename_locationn_sale_register_location_sale'),
    ]

    operations = [
        migrations.AddField(
            model_name='imagegallery',
            name='position',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='register',
            name='commune',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Comuna'),
        ),
        migrations.AlterField(
            model_name='register',
            name='condition',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Condición'),
        ),
        migrations.AlterField(
            model_name='register',
            name='format_comercial',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Formato Comercial'),
        ),
        migrations.AlterField(
            model_name='register',
            name='location',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Localidad'),
        ),
        migrations.AlterField(
            model_name='register',
            name='location_sale',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Lugar de Venta'),
        ),
        migrations.AlterField(
            model_name='register',
            name='pfnm',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Pfmn'),
        ),
        migrations.AlterField(
            model_name='register',
            name='price_1',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Precio'),
        ),
        migrations.AlterField(
            model_name='register',
            name='province',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Provincia'),
        ),
        migrations.AlterField(
            model_name='register',
            name='region',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Región'),
        ),
        migrations.AlterField(
            model_name='register',
            name='species',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Especie'),
        ),
        migrations.AlterField(
            model_name='register',
            name='unit',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Unidad'),
        ),
    ]
