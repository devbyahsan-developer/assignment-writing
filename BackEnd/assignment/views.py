from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import status
from rest_framework.response import Response
from .models import HeroSection, PremimumServices,Writer,Blog,Review,PageSEO,WorkSample
from .serializers import HeroSerializer, PremiumServicesSerializer,WriterSerializer,BlogDetailSerializer,BlogListSerializer,ReviewSerializer,PageSEOSerializer,WorkSampleSerializer


class HeroSectionAPI(APIView):

    def get(self, request):

        hero = HeroSection.objects.first()
        serializer = HeroSerializer(hero)

        return Response(serializer.data)



class PremiumServicesAPI(APIView):

    def get(self, request):

        services = PremimumServices.objects.all()
        serializer = PremiumServicesSerializer(services, many=True)

        return Response(serializer.data)



class WriterListAPI(APIView):

    def get(self, request):

        writers = Writer.objects.prefetch_related("skills").all()
        serializer = WriterSerializer(
            writers,
            many=True,
            context={"request": request}
        )

        return Response(serializer.data)
class BlogListView(ListAPIView):
    serializer_class = BlogListSerializer

    def get_queryset(self):
        queryset = Blog.objects.filter(is_published=True)
        category = self.request.query_params.get("category")
        if category:
            queryset = queryset.filter(category__slug=category)
        return queryset


class BlogDetailView(RetrieveAPIView):
    queryset = Blog.objects.filter(is_published=True)
    serializer_class = BlogDetailSerializer
    lookup_field = "slug"
    



class ReviewListView(ListAPIView):

    queryset = Review.objects.all().order_by("-created_at")

    serializer_class = ReviewSerializer

class WorkSampleListAPIView(APIView):

    def get(self, request):

        samples = WorkSample.objects.all().order_by("-id")
        serializer = WorkSampleSerializer(samples, many=True)

        return Response(serializer.data)


    def post(self, request):

        serializer = WorkSampleSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PageSEOView(RetrieveAPIView):
    serializer_class = PageSEOSerializer

    def get(self, request, *args, **kwargs):
        path = request.query_params.get("path")

        if not path:
            return Response(
                {"detail": "path query parameter is required"},
                status=status.HTTP_400_BAD_REQUEST
            )

        seo = PageSEO.objects.filter(page_path=path).first()

        if not seo:
            # 👇 IMPORTANT: return empty object, NOT 404, NOT 500
            return Response({}, status=status.HTTP_200_OK)

        serializer = self.get_serializer(seo)
        return Response(serializer.data, status=status.HTTP_200_OK)