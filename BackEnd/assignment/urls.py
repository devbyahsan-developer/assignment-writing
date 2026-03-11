from django.urls import path
from .views import BlogListView, HeroSectionAPI,PremiumServicesAPI, ReviewListView, WorkSampleListAPIView, WriterListAPI,BlogDetailView,PageSEOView

urlpatterns = [
    path('hero/', HeroSectionAPI.as_view(), name="hero-section"),
    path("premium-services/", PremiumServicesAPI.as_view(), name="services"),
    path("writers/", WriterListAPI.as_view(), name="writers-list"),
    path("blogs/", BlogListView.as_view(), name="blog-list"),
    path("blogs/<slug:slug>/", BlogDetailView.as_view(), name="blog-detail"),
    path("reviews/", ReviewListView.as_view(), name="review-list"),
    path('samples/', WorkSampleListAPIView.as_view(), name='samples'),
    path("seo/",PageSEOView.as_view()),

]