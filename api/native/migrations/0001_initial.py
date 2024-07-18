# Generated by Django 5.0.7 on 2024-07-13 04:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ImageGallery',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True, help_text='Fecha de creacion.', verbose_name='created at')),
                ('modified', models.DateTimeField(auto_now_add=True, help_text='Fecha de modificacion.', verbose_name='modified at')),
                ('name', models.CharField(max_length=255)),
                ('image', models.ImageField(blank=True, null=True, upload_to='categories/')),
            ],
            options={
                'ordering': ['-created', '-modified'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Register',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True, help_text='Fecha de creacion.', verbose_name='created at')),
                ('modified', models.DateTimeField(auto_now_add=True, help_text='Fecha de modificacion.', verbose_name='modified at')),
                ('region', models.CharField(blank=True, max_length=255, null=True)),
                ('province', models.CharField(blank=True, max_length=255, null=True)),
                ('commune', models.CharField(blank=True, max_length=255, null=True)),
                ('pfnm', models.CharField(blank=True, max_length=255, null=True)),
                ('condition', models.CharField(blank=True, max_length=255, null=True)),
                ('format_comercial', models.CharField(blank=True, max_length=255, null=True)),
                ('unit', models.CharField(blank=True, max_length=255, null=True)),
                ('price_1', models.CharField(blank=True, max_length=255, null=True)),
                ('date_1', models.DateField(blank=True, null=True)),
                ('price_2', models.CharField(blank=True, max_length=255, null=True)),
                ('date_2', models.DateField(blank=True, null=True)),
                ('price_3', models.CharField(blank=True, max_length=255, null=True)),
                ('date_3', models.DateField(blank=True, null=True)),
                ('price_4', models.CharField(blank=True, max_length=255, null=True)),
                ('date_4', models.DateField(blank=True, null=True)),
                ('volumen_proposition_aprox', models.CharField(blank=True, max_length=255, null=True)),
                ('locationn_sale', models.CharField(blank=True, max_length=255, null=True)),
            ],
            options={
                'ordering': ['-created', '-modified'],
                'abstract': False,
            },
        ),
    ]
