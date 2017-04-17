# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2017-04-07 13:24
from __future__ import unicode_literals

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('chym_user', '0007_auto_20170407_1321'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='activation_code',
            field=models.CharField(default=uuid.uuid4, max_length=100, unique=True),
        ),
    ]