from django.db import models
from django.utils.text import slugify
from django_ckeditor_5.fields import CKEditor5Field

class HeroSection(models.Model):

    heading = models.CharField(max_length=255)
    subheading = models.TextField()

    def __str__(self):
        return self.heading
    

class PremimumServices(models.Model):

    title = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.title


class Writer(models.Model):

    name = models.CharField(max_length=255)
    rate = models.CharField(max_length=100)
    projects = models.CharField(max_length=150)
    image = models.ImageField(upload_to="writers/")
    description = models.TextField()

    def __str__(self):
        return self.name


class WriterSkill(models.Model):

    writer = models.ForeignKey(
        Writer,
        on_delete=models.CASCADE,
        related_name="skills"
    )

    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    






class Blog(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True)
    featured_image = models.ImageField(upload_to="blogs/")
    excerpt = models.TextField()
    content = CKEditor5Field('Content', config_name='extends')
    is_published = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title



class Review(models.Model):

    name = models.CharField(max_length=150)

    image = models.ImageField(upload_to="reviews/")

    review = models.TextField()

    rating = models.IntegerField(default=5)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class WorkSample(models.Model):

    title= models.CharField(max_length=255)
    level = models.CharField(max_length=200)
    pages = models.CharField(max_length=50)
    format = models.CharField(max_length=100)
    file = models.FileField(upload_to="samples/")

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
class PageSEO(models.Model):
    page_path = models.CharField(
        max_length=255,
        unique=True,
        help_text="Example: /, /about, /blog, /blog/which-face-shape-do-i-have"
    )

    title = models.CharField(max_length=255)
    description = models.TextField()

    keywords = models.CharField(max_length=255, blank=True, null=True)
    canonical_url = models.URLField(blank=True, null=True)

    og_title = models.CharField(max_length=255, blank=True, null=True)
    og_description = models.TextField(blank=True, null=True)
    og_image = models.ImageField(upload_to="seo/", blank=True, null=True)

    twitter_title = models.CharField(max_length=255, blank=True, null=True)
    twitter_description = models.TextField(blank=True, null=True)
    twitter_image = models.ImageField(upload_to="seo/", blank=True, null=True)

    robots = models.CharField(
        max_length=50,
        default="index, follow",
        blank=True
    )

    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.page_path
