from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
    path('features/', views.features, name='features'),
    path('insight/', views.insight, name='insight'),
    path('plans/', views.plans, name='plans'),
    path('pricing/', views.pricing, name='pricing'),
    path('privacy-policy/', views.privacy_policy, name='privacy_policy'),
    path('services/', views.services, name='services'),
    path('terms/', views.terms, name='terms'),
    path('thanku/', views.thanku, name='thanku'),

    path('get-reviews/', views.get_reviews, name='get_reviews'),
    path('add-review/', views.add_review, name='add_review'),
]


