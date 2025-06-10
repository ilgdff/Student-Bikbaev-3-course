from django.views.generic import TemplateView
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', TemplateView.as_view(template_name='dashboard/home.html'), name='home'),
    path('accounts/', include('allauth.urls')),
]

