@component('mail::message')


<p style="text-align: justify;">
    Dear {{ $newsLetter->firstname }} {{ $newsLetter->surname }},
    <br/>
    <br/>
    We can confirm that we did receive your interest for IzyCoins strategy launch.
    We thank you for your interest and look forward to including you with us in this venture.
    <br/>
    Once your details has been checked, you will receive your login/passwd in order to access to our system.
    <br/>
    <br/>
    Please note that IzyCoins as a service provider is only dealing with individuals.
    <br/>
    <br/>
    Sincerely yours,
    <br/>
    Founders
</p>

@endcomponent
