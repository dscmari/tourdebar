<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('gamelists', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('game_id_0')->nullable();
            $table->unsignedBigInteger('game_id_1')->nullable();
            $table->unsignedBigInteger('game_id_2')->nullable();
            $table->unsignedBigInteger('game_id_3')->nullable();
            $table->unsignedBigInteger('game_id_4')->nullable();
            $table->unsignedBigInteger('game_id_5')->nullable();
            $table->unsignedBigInteger('game_id_6')->nullable();
            $table->unsignedBigInteger('game_id_7')->nullable();
            $table->unsignedBigInteger('game_id_8')->nullable();
            $table->unsignedBigInteger('game_id_9')->nullable();
            $table->timestamps();

            $table->foreign('game_id_0')->references('id')->on('games');
            $table->foreign('game_id_1')->references('id')->on('games');
            $table->foreign('game_id_2')->references('id')->on('games');
            $table->foreign('game_id_3')->references('id')->on('games');
            $table->foreign('game_id_4')->references('id')->on('games');
            $table->foreign('game_id_5')->references('id')->on('games');
            $table->foreign('game_id_6')->references('id')->on('games');
            $table->foreign('game_id_7')->references('id')->on('games');
            $table->foreign('game_id_8')->references('id')->on('games');
            $table->foreign('game_id_9')->references('id')->on('games');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gamelists');
    }
};
