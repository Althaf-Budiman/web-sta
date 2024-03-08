<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Super Tasko Aria</title>
    <link rel="shortcut icon" href="{{ asset('icon/logo-supertasko.svg') }}" type="image/x-icon" />
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">

    @inertiaHead
    @vite('resources/js/app.jsx')

    <!-- CDN -->
    <!-- Tailwind -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- End CDN -->

    <!-- Font Jakarta Snas -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
        rel="stylesheet" />
    <!-- End Font Jakarta Snas -->

    <!-- Font Poppins -->
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet" />
    <!-- End Font Poppins -->
    <script>
        tailwind.config = {
            theme: {
                fontFamily: {
                    jakartaSans: '"Plus Jakarta Sans"',
                    poppins: 'Poppins',
                },
                extend: {
                    colors: {
                        darkerBlue: '#0E5AE3',
                        gradientBlue: '#00FFCD',
                        lightBlue: '#3570FF',
                        grayBg: '#F8F9FA',
                        darkerGreen: '#18C718',
                        lightGreen: '#24DA24',
                        darkerRed: '#FF0007',
                        lightRed: '#FE2C32',
                        darkBlueBg: '#223659',
                    },
                },
            },
        };
    </script>
</head>

<body>
    @inertia
</body>

</html>
