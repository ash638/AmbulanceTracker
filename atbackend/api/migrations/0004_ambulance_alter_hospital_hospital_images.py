# Generated by Django 4.1.7 on 2023-04-03 14:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_hospital_hospital_location_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Ambulance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ambulance_type', models.CharField(max_length=100)),
                ('ambulance_rating', models.IntegerField(blank=True, default=0, null=True)),
                ('ambulance_time', models.FloatField(blank=True, default=0, null=True)),
                ('ambulance_price', models.FloatField(blank=True, default=0, null=True)),
                ('ambulance_images', models.ImageField(upload_to='api/ambulance')),
                ('ambulance_drivernumber', models.IntegerField(blank=True, default=0, null=True)),
            ],
        ),
        migrations.AlterField(
            model_name='hospital',
            name='hospital_images',
            field=models.ImageField(upload_to='api/hospital'),
        ),
    ]
