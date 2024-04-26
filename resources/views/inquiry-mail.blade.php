<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Inquiry From {{ $name }}</title>
    <!-- Tailwind -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- End CDN -->
</head>

<body>
    <h1 class="text-4xl">Inquiry From {{ $name }}</h1>
    <h2 class="text-3xl">Email: {{ $email }}</h2>
    <h2 class="text-3xl">Company: {{ $company }}</h2>
    <h2 class="text-3xl">Phone Number: {{ $phoneNumber }}</h2>
    <br>
    <p>{{ $inquiry }}</p>
</body>

</html>
