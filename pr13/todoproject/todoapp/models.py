from django.db import models
from django.utils import timezone

class Task(models.Model):
    title = models.CharField('Задача', max_length=200)
    completed = models.BooleanField('Выполнено', default=False)
    created = models.DateTimeField('Дата создания', default=timezone.now)
    updated = models.DateTimeField('Дата изменения', auto_now=True)

    class Meta:
        ordering = ['-created']
        verbose_name = 'Задача'
        verbose_name_plural = 'Задачи'

    def __str__(self):
        return self.title