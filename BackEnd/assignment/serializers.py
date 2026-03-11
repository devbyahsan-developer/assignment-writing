from rest_framework import serializers
from .models import HeroSection,PremimumServices, WorkSample,WriterSkill,Writer,Blog,Review,PageSEO

class HeroSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeroSection
        fields = ["heading", "subheading"]


class PremiumServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = PremimumServices
        fields = ["title", "description"]



class WriterSkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = WriterSkill
        fields = ["name"]


class WriterSerializer(serializers.ModelSerializer):

    skills = WriterSkillSerializer(many=True, read_only=True)
    image = serializers.SerializerMethodField()

    class Meta:
        model = Writer
        fields = [
            "id",
            "name",
            "rate",
            "projects",
            "image",
            "description",
            "skills"
        ]

    def get_image(self, obj):
        request = self.context.get("request")
        if obj.image:
            return request.build_absolute_uri(obj.image.url)
        return None

class BlogListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Blog
        fields = [
            "id",
            "title",
            "slug",
            "excerpt",
            "featured_image",
            "created_at",
        ]


class BlogDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = Blog
        fields = "__all__"



class ReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = "__all__"

class WorkSampleSerializer(serializers.ModelSerializer):

    class Meta:
        model = WorkSample
        fields = "__all__"

class PageSEOSerializer(serializers.ModelSerializer):
    og_image = serializers.SerializerMethodField()
    twitter_image = serializers.SerializerMethodField()

    class Meta:
        model = PageSEO
        fields = "__all__"

    def get_og_image(self, obj):
        request = self.context.get("request")
        if obj.og_image and request:
            return request.build_absolute_uri(obj.og_image.url)
        return None

    def get_twitter_image(self, obj):
        request = self.context.get("request")
        if obj.twitter_image and request:
            return request.build_absolute_uri(obj.twitter_image.url)
        return None
