from django.shortcuts import render

def index(request): # renders the 'index.html' page for the URL
    return render(request, 'myapp/index.html')

def class_count(request): # renders the 'class_count.html' page for the URL
    return render(request, 'myapp/class_count.html')

def class_info(request): 
    class_count = request.GET.get('classCount') # Gets the class_count parameter from the URL redirection
    num_classes = int(class_count) # Converts class_count to an integer
    # Prepare a list of numbers from 1 to num_classes
    class_numbers = range(1, num_classes + 1)
    # Define choices for class rigor dropdown
    RIGOR_CHOICES = [
        ('Regular', 'Regular'),
        ('Honors', 'Honors'),
        ('AP', 'AP'),
    ]

    # Prepares a context for the parameters that will be passed into the html template
    context = {'class_numbers': class_numbers, 'rigor_choices': RIGOR_CHOICES}
    return render(request, 'myapp/class_info.html', context) # Passes context into the html template

def calculations(request):
    class_info = request.GET.get('classInfo') # Gets the 'class_info' parameter from the URL redirection
    return render(request, 'myapp/calculations.html', {'class_info': class_info}) # Passes parameter into the html template