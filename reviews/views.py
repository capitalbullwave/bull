from django.shortcuts import render
from django.http import JsonResponse
from .models import Review
import json


def home(request):
    return render(request, 'index.html')


def about(request):
    return render(request, 'about.html')


def contact(request):
    return render(request, 'contact.html')


def features(request):
    return render(request, 'features.html')


def insight(request):
    return render(request, 'insight.html')


def plans(request):
    return render(request, 'plans.html')


def pricing(request):
    return render(request, 'Pricing.html')


def privacy_policy(request):
    return render(request, 'privacypolicy.html')


def services(request):
    return render(request, 'services.html')


def terms(request):
    return render(request, 'terms.html')


def thanku(request):
    return render(request, 'Thanku.html')


def get_reviews(request):
    reviews = Review.objects.all().order_by("-created_at")

    data = []
    for review in reviews:
        data.append({
            "id": review.id,
            "email": review.email,
            "rating": review.rating,
            "comment": review.comment,
            "created_at": review.created_at.strftime("%d %b %Y")
        })

    return JsonResponse(data, safe=False)


def add_review(request):
    if request.method == "POST":
        data = json.loads(request.body)

        email = data.get("email", "").strip()
        rating = int(data.get("rating", 0))
        comment = data.get("comment", "").strip()

        if not email or not comment or rating < 1 or rating > 5:
            return JsonResponse({
                "success": False,
                "message": "Please fill email, rating and comment."
            })

        Review.objects.create(
            email=email,
            rating=rating,
            comment=comment
        )

        return JsonResponse({
            "success": True,
            "message": "Review submitted successfully."
        })

    return JsonResponse({
        "success": False,
        "message": "Invalid request."
    })