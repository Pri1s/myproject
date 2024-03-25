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

from django.shortcuts import render

def class_info(request):
    class_count = request.GET.get('classCount')
    num_classes = int(class_count) if class_count else 0
    
    # Prepare a list of numbers from 1 to num_classes
    class_numbers = range(1, num_classes + 1)

    # Define choices for class rigor dropdown
    RIGOR_CHOICES = [
        ('Regular', 'Regular'),
        ('Honors', 'Honors'),
        ('AP', 'AP'),
    ]

    # Pass class_numbers and rigor choices to the template context
    return render(request, 'myapp/class_info.html', {'class_numbers': class_numbers, 'rigor_choices': RIGOR_CHOICES})

def calculations(request):
    class_info_json = request.GET.get('classInfo')
    # Do something with class_info_json, like parse and perform calculations
    # Render calculations.html template with class_info_json as context data
    return render(request, 'myapp/calculations.html', {'class_info_json': class_info_json})