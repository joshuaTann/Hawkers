# Generated by Django 3.2.9 on 2021-11-15 07:42

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Hawker',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=100)),
                ('Image', models.CharField(max_length=500)),
                ('AddressLine1', models.CharField(max_length=100)),
                ('AddressLine2', models.CharField(max_length=100)),
                ('Postcode', models.IntegerField()),
                ('AmIOpen', models.BooleanField()),
            ],
        ),
    ]
