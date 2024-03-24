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

def class_info(request):
    # Get the number of classes from the query parameters
    class_count = request.GET.get('classCount')
    # Convert class_count to an integer
    num_classes = int(class_count) if class_count else 0

    # Prepare a list of numbers from 1 to num_classes
    class_numbers = range(1, num_classes + 1)

    # Pass the class_numbers list to the template context
    return render(request, 'myapp/class_info.html', {'class_numbers': class_numbers})