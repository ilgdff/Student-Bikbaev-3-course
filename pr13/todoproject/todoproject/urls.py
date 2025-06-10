from django.contrib import admin
from django.urls import path
from todoapp.views import todo_list

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', todo_list, name='todo_list'), 
    path('todoapp/', todo_list, name='todo_list_app'),  
]