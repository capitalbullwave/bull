from django.db import models


class Review(models.Model):
    email = models.EmailField()
    rating = models.PositiveSmallIntegerField()
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.email} - {self.rating} stars"