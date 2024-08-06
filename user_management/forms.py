from django import forms


class SignUpForm(forms.Form):
    First_name = forms.CharField(max_length = 200)
    First_name.widget.attrs.update({'class': 'form-control form-control-lg'})  
    
    Last_name = forms.CharField(max_length = 200)
    Last_name.widget.attrs.update({'class': 'form-control form-control-lg'})  
    
    Country = forms.CharField(max_length = 200)
    Country.widget.attrs.update({'class': 'form-control form-control-lg'})

    phone_code = forms.CharField(max_length = 3)
    phone_code.widget.attrs.update({'class': 'form-control form-control-lg'})

    phone = forms.CharField(max_length = 10)
    phone.widget.attrs.update({'class': 'form-control form-control-lg'})

    phone = forms.CharField(max_length = 10)
    phone.widget.attrs.update({'class': 'form-control form-control-lg'})

    Email = forms.EmailField(max_length=200)
    Email.widget.attrs.update({'class': 'form-control form-control-lg'})

    Experince = forms.EmailField(max_length=200)
    Experince.widget.attrs.update({'class': 'form-control form-control-lg'}) 