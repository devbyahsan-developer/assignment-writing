from django.contrib import admin
from .models import HeroSection,PremimumServices,Writer,WriterSkill,Blog,Review,PageSEO


@admin.register(HeroSection)
class HeroSectionAdmin(admin.ModelAdmin):
    fields = ['heading', 'subheading']
    


@admin.register(PremimumServices)
class PremiumServicesAdmin(admin.ModelAdmin):

    list_display = ["id", "title"]
    search_fields = ["title"]
    

class WriterSkillInline(admin.TabularInline):
    model = WriterSkill
    extra = 1
    min_num = 1


@admin.register(Writer)
class WriterAdmin(admin.ModelAdmin):

    list_display = ["id", "name", "rate", "projects"]
    search_fields = ["name", "rate"]
    list_filter = ["rate"]

    inlines = [WriterSkillInline]

    fieldsets = (
        ("Writer Information", {
            "fields": (
                "name",
                "rate",
                "projects",
                "image",
                "description"
            )
        }),
    )


@admin.register(WriterSkill)
class WriterSkillAdmin(admin.ModelAdmin):

    list_display = ["id", "name", "writer"]
    search_fields = ["name"]
    list_filter = ["writer"]
@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ("title", "is_published", "created_at")
    list_filter = ("is_published",)
    search_fields = ("title", "excerpt", "content")
    prepopulated_fields = {"slug": ("title",)}



@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):

    list_display = ["name", "created_at"]

from django.contrib import admin
from .models import WorkSample


@admin.register(WorkSample)
class WorkSampleAdmin(admin.ModelAdmin):

    list_display = (
        
        "title",
        "discipline",
        "level",
        "pages",
        
    )

   

@admin.register(PageSEO)
class PageSEOAdmin(admin.ModelAdmin):
    # ===============================
    # LIST VIEW (TABLE)
    # ===============================
    list_display = (
        "page_path",
        "title",
        "robots",
        "updated_at",
    )

    list_filter = (
        "robots",
        "updated_at",
    )

    search_fields = (
        "page_path",
        "title",
        "description",
        "keywords",
    )

    ordering = ("page_path",)

    # ===============================
    # FORM LAYOUT (DETAIL VIEW)
    # ===============================
    fieldsets = (
        (
            "Page Identification",
            {
                "fields": ("page_path",),
                "description": "Exact frontend URL path (e.g. /, /about, /blog/my-post)",
            },
        ),
        (
            "Basic SEO",
            {
                "fields": ("title", "description", "keywords"),
            },
        ),
        (
            "Canonical & Robots",
            {
                "fields": ("canonical_url", "robots"),
            },
        ),
        (
            "Open Graph (Facebook, LinkedIn)",
            {
                "fields": ("og_title", "og_description", "og_image"),
            },
        ),
        (
            "Twitter Card",
            {
                "fields": ("twitter_title", "twitter_description", "twitter_image"),
            },
        ),
    )

    # ===============================
    # UX IMPROVEMENTS
    # ===============================
    readonly_fields = ("updated_at",)

    save_on_top = True
