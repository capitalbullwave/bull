from django.contrib import admin
from .models import Review


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ("email", "rating", "comment", "created_at")
    search_fields = ("email", "comment")
    list_filter = ("rating", "created_at")