# -*- coding: utf-8 -*-
from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.core import serializers
import json
from MysqlDemo.models import Mysql

def verify(request):
    if request.GET:
        ctx = request.GET['name']
    user = request.GET['name']
    print('request.GET')
    print(request.GET)
    if Mysql.objects.filter(name=user):
        dataa = {
            "success":2,
            "data":{
                "msg":"数据库已有"
            }
        }
    else:
        dataa = {
            "success":0,
            "data":{
                "msg":"可以应用"
            }
        }
    func = request.GET.get('callback')
    data = str(dataa)
    jsonstr = '%s('+data+')'
    content = jsonstr %(func,)
    return HttpResponse(content)
    