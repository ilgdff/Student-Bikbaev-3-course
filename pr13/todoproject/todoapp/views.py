from django.shortcuts import render, redirect
from django.http import JsonResponse
from .models import Task

def todo_list(request):
    if request.method == 'POST':
        action = request.POST.get('action')
        
        if action == 'add':
            title = request.POST.get('title')
            if title:
                Task.objects.create(title=title)
                
        elif action == 'edit':
            task_id = request.POST.get('id')
            new_title = request.POST.get('title')
            task = Task.objects.get(id=task_id)
            task.title = new_title
            task.save()
            
        elif action == 'delete':
            task_id = request.POST.get('id')
            Task.objects.filter(id=task_id).delete()
            
        elif action == 'toggle':
            task_id = request.POST.get('id')
            task = Task.objects.get(id=task_id)
            task.completed = not task.completed
            task.save()
            
        return redirect('todo_list')
    
    tasks = Task.objects.all()
    return render(request, 'todolist.html', {'tasks': tasks})