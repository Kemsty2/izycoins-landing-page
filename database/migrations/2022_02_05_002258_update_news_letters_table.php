<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateNewsLettersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('news_letters', function (Blueprint $table) {
            $table->enum('status', ['pending', 'validated', 'rejected'])->default('pending');
            $table->string('message')->nullable();
            $table->timestamp('validated_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropColumns('news_letters', ['status', 'validated_at', 'message']);
    }
}
