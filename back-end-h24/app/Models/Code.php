<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model ;

class Code extends Model
{
    protected $fillable = [
        'titre',
        'categorie',
        'description',
        'code',
    ];
}
