from django.urls import path , include

from rest_framework.routers import DefaultRouter

from .views import signup , formView

router = DefaultRouter()
router.register(r'api/form', formView, basename='Onu')

urlpatterns = [
    path('join/', signup),
    path('', include(router.urls)),

]