# Generated by Django 5.0.7 on 2024-07-13 05:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('native', '0005_register_location'),
    ]

    operations = [
        migrations.RenameField(
            model_name='register',
            old_name='locationn_sale',
            new_name='location_sale',
        ),
    ]