<?php

namespace Database\Seeders;

use App\Models\Article;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Article::create([
            'title' => 'Article 1',
            'body' => '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies, nisl id bibendum scelerisque, libero magna eleifend lorem, sed sodales ipsum felis nec ex. Phasellus pretium sem vel arcu efficitur, vel consequat magna pellentesque.</p>',
        ]);

        Article::create([
            'title' => 'Article 2',
            'body' => '<p>Maecenas luctus, dui sit amet vestibulum varius, elit massa tincidunt ex, at pellentesque sapien mauris nec lorem. Nulla facilisi. Donec ac metus nec est laoreet euismod. Integer nec nunc est. Integer tincidunt malesuada enim at mattis. Fusce commodo vehicula est, a lacinia odio fermentum ut. In in fermentum libero.</p>',
        ]);

        Article::create([
            'title' => 'Article 3',
            'body' => '<p>Suspendisse potenti. Vivamus id ante nec quam feugiat malesuada. Nulla facilisi. Etiam in placerat justo. Morbi tempus sapien at purus suscipit, et hendrerit libero vestibulum. Quisque posuere, ex eu pharetra sagittis, turpis ipsum fermentum urna, a interdum ante lacus ac tortor.</p>',
        ]);

    }
}
