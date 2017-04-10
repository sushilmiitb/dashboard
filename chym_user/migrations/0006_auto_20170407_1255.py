# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2017-04-07 12:55
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('chym_user', '0005_testdevice'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='email',
            field=models.EmailField(default='rubbal@chymeravr.com', editable=False, max_length=254),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='profile',
            name='currency',
            field=models.CharField(choices=[('USD', 'USD'), ('INR', 'INR')], default='USD', editable=False, max_length=20),
        ),
        migrations.AlterField(
            model_name='profile',
            name='user',
            field=models.OneToOneField(editable=False, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
