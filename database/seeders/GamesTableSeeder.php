<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Game;


class GamesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $games = [
            [
                'name' => 'Down A Beer',
                'description' => 'Drink a beer without setting it down once. Film, upload the video to get a point.',
            ],
            [
                'name' => 'Carry Your Partner',
                'description' => 'Carry your teammate from one bar to another.',
            ],
            [
                'name' => 'Runaround',
                'description' => 'Its a game related to the TV-Show Runarround. You need some chalk to draw a pitch and at least 10 quiz-questions, with 3 answer options each.
                With the chalk you draw 2 2 meters long parallel lines in about 1.5 Meters distance. In each of the so created three fields you draw the numbers 1, 2 or 3. The field with the respective number corresponds to the appropriate answer option.
                All the participants position themselves somewhere on the pitch and as soon as the question is asked out loud, they need to choose with field is the right answer.
                Everyone has two lifes, if you are wrong, you loose one life. If you are wrong twice, you are out. The last one standing wins this game for his/her team. If after 10 question more than 1 participant is still alive, every team with a team member beeing alive gets a point.'
            ],
            [
                'name' => 'Flirt A Drink',
                'description' => 'Try to make someone, that does not belong to your group, buy you a drink. Make a selfie with your drink, upload it and get a point.',
            ],
            [
                'name' => 'Launch A Tea Bag',
                'description' => 'The aim is to throw a teabag as far as possible with just your mouth. Everyone has one try. If your group is 10 or less people, everyone has two tries. Make a selfie with your winning tea bag, upload it and get a point. ',
            ],
            [
                'name' => 'Best Team Picture',
                'description' => 'Try to be creative for your team picture. The best one is voted by your fellow participants and gets a point.',
            ],
        ];

        foreach ($games as $game) {
            Game::create($game);
        }
    }
}
