from rest_framework import serializers
import re


class formSerializer(serializers.Serializer):
    firstName = serializers.CharField(max_length = 200)
    lastName = serializers.CharField(max_length = 200)
    phone = serializers.CharField(max_length = 20)
    experience = serializers.IntegerField()
    email = serializers.CharField(max_length = 200)
    country = serializers.CharField(max_length = 200)


    def validate_firstName(self, value):
        if not re.match(r'^[a-zA-Z\s]+$', value):
            raise serializers.ValidationError("Only alphabets and spaces are allowed in the first name.")
        return value

    def validate_lastName(self, value):
        if not re.match(r'^[a-zA-Z\s]+$', value):
            raise serializers.ValidationError("Only alphabets and spaces are allowed in the last name.")
        return value

    def validate_phone(self, value):
        if not re.match(r'^\+\d{1,3}\d{6,14}$', value):
            raise serializers.ValidationError("Please enter a valid phone number with country code.")
        return value

    def validate_experience(self, value):
        if value < 0:
            raise serializers.ValidationError("Experience cannot be negative.")
        return value

    def validate_email(self, value):
        if not re.match(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$', value):
            raise serializers.ValidationError("Please enter a valid email address.")
        return value

    def validate_country(self, value):
        if not re.match(r'^[a-zA-Z\s]+$', value):
            raise serializers.ValidationError("Only alphabets and spaces are allowed in the country name.")
        return value