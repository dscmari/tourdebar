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
        Schema::create('roads', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('bar_0')->nullable();
            $table->string('bar_1')->nullable();
            $table->string('bar_2')->nullable();
            $table->string('bar_3')->nullable();
            $table->string('bar_4')->nullable();
            $table->string('bar_5')->nullable();
            $table->string('bar_6')->nullable();
            $table->string('bar_7')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('roads');
    }
};
