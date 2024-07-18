# Generated by Django 5.0.7 on 2024-07-13 04:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('native', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='register',
            name='commune_lat',
            field=models.CharField(blank=True, max_length=555, null=True),
        ),
        migrations.AddField(
            model_name='register',
            name='commune_long',
            field=models.CharField(blank=True, max_length=555, null=True),
        ),
        migrations.AddField(
            model_name='register',
            name='province_lat',
            field=models.CharField(blank=True, max_length=555, null=True),
        ),
        migrations.AddField(
            model_name='register',
            name='province_long',
            field=models.CharField(blank=True, max_length=555, null=True),
        ),
        migrations.AddField(
            model_name='register',
            name='region_lat',
            field=models.CharField(blank=True, max_length=555, null=True),
        ),
        migrations.AddField(
            model_name='register',
            name='region_long',
            field=models.CharField(blank=True, max_length=555, null=True),
        ),
    ]