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
            'title' => 'Effects Of Supacon?',
            'body' => '<h1>Introduces an epoch-making energy saving super condenser.</h1>
                        <p><br>SUPACON, a Hybrid Supacon System, which can retro-fit the existing air conditioning machine and realize 25% of energy saving combined with a HB-156. The HB-156 is a low pressured refrigerant&nbsp;which minimizes the damage of an ozone&nbsp;layer. Electric current can be reduced by&nbsp;low pressure operation of 1.5MPa in HB-156,&nbsp;although it is 20MPa in R-22. Low pressure&nbsp;operation releases the load and extends the&nbsp;life of the compressor.</p>
                        <p><br>In the insufficient ambient condition of an&nbsp;outdoor unit with a high outdoor temperature,&nbsp;compressed high temperature gas may not&nbsp;well radiate the heat in the condenser. It is&nbsp;often seen that enough evaporation heat&nbsp;cannot be gained in condensing unit by the reason of&nbsp; unliqufied gas, which is sent to the condensing unit. On the other hand, pressure<br>of the gas in the condenser rises, as load of&nbsp;the compressor increases.</p>
                        <p>The electric current&nbsp;increases and then compressor may stop its&nbsp;operation by an over-current and high pressure&nbsp;cutout. SUPACON improves heat radiation efficiency in consider to completely liquefied, enough&nbsp;evaporation heat can be gained in fan coil unit&nbsp;when vaporizing.</p>',
            'thumbnail' => '',
        ]);

        Article::create([
            'title' => 'Article 2',
            'body' => '<p>Maecenas luctus, dui sit amet vestibulum varius, elit massa tincidunt ex, at pellentesque sapien mauris nec lorem. Nulla facilisi. Donec ac metus nec est laoreet euismod. Integer nec nunc est. Integer tincidunt malesuada enim at mattis. Fusce commodo vehicula est, a lacinia odio fermentum ut. In in fermentum libero.</p>',
            'thumbnail' => '1715820599.jpg',
        ]);
    }
}
