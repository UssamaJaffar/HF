from django.shortcuts import render
from rest_framework.response import Response

from rest_framework import viewsets , status

from .serializers import formSerializer

# Create your views here.

def signup(request):
    return render(request , 'Signup.html')
    

class formView(viewsets.ViewSet):
    serializer_class = formSerializer

    def create(self,request):

        serializer = self.serializer_class(data=request.data)

        serializer.is_valid(raise_exception=True)
        print(serializer.validated_data)

        return Response({},status=status.HTTP_200_OK)