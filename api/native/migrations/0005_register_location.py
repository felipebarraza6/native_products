# Generated by Django 5.0.7 on 2024-07-13 05:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('native', '0004_alter_register_date_1_alter_register_date_2_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='register',
            name='location',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
