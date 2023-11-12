<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Road extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'bar_0',
        'bar_1',
        'bar_2',
        'bar_3',
        'bar_4',
        'bar_5',
        'bar_6',
        'bar_7',
    ];
}
