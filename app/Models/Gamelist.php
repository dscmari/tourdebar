<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gamelist extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'game_id_0',
        'game_id_1',
        'game_id_2',
        'game_id_3',
        'game_id_4',
        'game_id_5',
        'game_id_6',
        'game_id_7',
        'game_id_8',
        'game_id_9',
    ];
}
