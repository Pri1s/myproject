from django.shortcuts import render
from django.http import JsonResponse

def index(request):
    return render(request, 'myapp/index.html')

# def my_function(request):
#     # Process data or perform any Python operations here
#     result = "Hello from Python!"
#     return JsonResponse({'result': result})

def class_count(request):
    return render(request, 'myapp/class_count.html')