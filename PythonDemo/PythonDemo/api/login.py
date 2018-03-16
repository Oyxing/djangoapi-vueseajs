# -*- coding: utf-8 -*-
from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.core import serializers
import json
from MysqlDemo.models import Mysql

def Login(request):
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
    elif request.GET['age']:
        mysql1 = Mysql(name=request.GET['name'],age=request.GET['age'],pwd=request.GET['pwd'],email=request.GET['email'])
        mysql1.save()
        if Mysql.objects.filter(name=user):
            dataa = {
                "success":0,
                "data":{
                    "msg":"创建成功"
                }
            }
        else:
            dataa = {
                "success":2,
                "data":{
                    "msg":"创建失败"
                }
            }
    func = request.GET.get('callback')
    data = str(dataa)
    jsonstr = '%s('+data+')'
    content = jsonstr %(func,)
    return HttpResponse(content)

    