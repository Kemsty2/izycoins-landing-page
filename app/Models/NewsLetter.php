<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewsLetter extends Model
{
    use HasFactory;

    public static function fromRequest($array): self
    {
        return static::createNew(new static(), $array);
    }

    private static function createNew(self $newsLetter, $array): self
    {
        $newsLetter->email = $array['email'];
        $newsLetter->firstname = $array['firstname'];
        $newsLetter->phone = $array['phone'];
        $newsLetter->surname = $array['surname'];
        $newsLetter->sector = $array['sector'];
        $newsLetter->position = $array['position'];

        $newsLetter->save();

        return $newsLetter;
    }
}
